/* eslint-disable no-restricted-syntax */

import type { AnimationLibs } from './animation-libs';

export type TimelineAnimation = {
  id: string;
  start: number;
  end: number;
  update: (progress: number) => void;
};

export type TimelineSection = {
  id: string;
  start?: 'top' | 'bottom';
  section: HTMLElement;
  animations: TimelineAnimation[];
  dispose?: () => void;
};

export type Timeline = {
  progress: number;
  initSection: (section: TimelineSection) => void;
  update: (progress: number) => void;
  refresh: () => void;
  dispose: () => void;
};

export type TimelineOptions = {
  /**
   * When true, timeline progress only moves forward.
   * Scrolling up will not reverse or reset animations.
   */
  forwardOnly?: boolean;
};

export type CreateTimelineSection<DepsT extends unknown = undefined> = (
  libs: AnimationLibs,
  deps: DepsT
) => TimelineSection;

type SectionRange = {
  section: TimelineSection;
  startScrollY: number;
  endScrollY: number;
  startProgress: number;
  endProgress: number;
};

function calculateSectionRanges(sections: TimelineSection[], totalScrollHeight: number): SectionRange[] {
  return sections.map(section => {
    const rect = section.section.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const sectionTop = rect.top + scrollY;
    const sectionHeight = section.section.offsetHeight;

    // Determine start position based on configuration (defaults to 'bottom')
    const startScrollY =
      section.start === 'top'
        ? sectionTop // top of section hits top of viewport
        : sectionTop - window.innerHeight; // top of section hits bottom of viewport

    const endScrollY = sectionTop + sectionHeight; // bottom hits top of viewport

    // Convert to global progress percentage (0-100)
    const startProgress = totalScrollHeight > 0 ? (startScrollY / totalScrollHeight) * 100 : 0;
    const endProgress = totalScrollHeight > 0 ? (endScrollY / totalScrollHeight) * 100 : 0;

    return {
      section,
      startScrollY,
      endScrollY,
      startProgress,
      endProgress
    };
  });
}

export function createTimeline(libs: AnimationLibs, options: TimelineOptions = {}): Timeline {
  const sections: TimelineSection[] = [];
  const animations: (TimelineAnimation & { lastProgress: number })[] = [];
  const scrollSpacer = document.getElementById('scrollSpacer');
  if (!scrollSpacer) throw new Error('Scroll spacer not found');
  let currentProgress = 0;
  let maxProgress = 0;
  let totalScrollHeight = 0;
  let sectionRanges: SectionRange[] = [];

  const calculateAndSetHeight = () => {
    if (sections.length === 0) {
      totalScrollHeight = 0;
      scrollSpacer.style.height = '0px';
      return;
    }

    // Calculate total scroll height based on section positions
    const maxEndScroll = Math.max(
      ...sections.map(section => {
        const rect = section.section.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const sectionTop = rect.top + scrollY;
        const sectionHeight = section.section.offsetHeight;
        // End is always when bottom hits top of viewport
        return sectionTop + sectionHeight;
      })
    );

    totalScrollHeight = Math.max(maxEndScroll, 0);
    scrollSpacer.style.height = `${totalScrollHeight}px`;

    // Recalculate section ranges with new total height
    sectionRanges = calculateSectionRanges(sections, totalScrollHeight);
  };

  const updateAnimations = (progress: number) => {
    for (const animation of animations) {
      const { start, end, lastProgress, update } = animation;
      const localProgress = mapRange(progress, start, end);
      if (progress >= start && progress <= end) {
        update(localProgress);
        animation.lastProgress = localProgress;
      } else if (progress > end && lastProgress !== 1) {
        update(1);
        animation.lastProgress = 1;
      } else if (progress < start && lastProgress !== 0) {
        update(0);
        animation.lastProgress = 0;
      }
    }
  };

  calculateAndSetHeight();
  const { ScrollTrigger } = libs;
  const scrollTrigger = ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    scrub: 0.5,
    end: () => `+=${totalScrollHeight}`,
    onUpdate: self => {
      const nextProgress = self.progress * 100;
      if (options.forwardOnly) {
        maxProgress = Math.max(maxProgress, nextProgress);
        currentProgress = maxProgress;
      } else {
        currentProgress = nextProgress;
      }
      updateAnimations(currentProgress);
    }
  });

  // Set up resize listener with debouncing
  let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
  const handleResize = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
      timeline.refresh();
    }, 150); // Debounce resize events
  };

  window.addEventListener('resize', handleResize);

  const timeline = {
    get progress() {
      return currentProgress;
    },
    update: updateAnimations,
    refresh() {
      // Clear existing animations
      animations.length = 0;

      // Recalculate heights and ranges
      calculateAndSetHeight();

      // Rebuild animations with new ranges
      for (const section of sections) {
        const range = sectionRanges.find(r => r.section === section);
        if (!range) continue;

        const sectionSpan = range.endProgress - range.startProgress;

        for (const animation of section.animations) {
          const globalStart = range.startProgress + (animation.start / 100) * sectionSpan;
          const globalEnd = range.startProgress + (animation.end / 100) * sectionSpan;
          animations.push({
            ...animation,
            start: globalStart,
            end: globalEnd,
            lastProgress: 0
          });
        }
      }

      ScrollTrigger.refresh();
    },
    dispose() {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      scrollTrigger.kill();
      for (const section of sections) {
        if (section.dispose) {
          section.dispose();
        }
      }
      sections.length = 0;
      animations.length = 0;
    },
    initSection(section: TimelineSection) {
      sections.push(section);

      // Recalculate heights and ranges with new section
      calculateAndSetHeight();

      // Find the range for this section
      const range = sectionRanges.find(r => r.section === section);
      if (!range) {
        throw new Error(`Section range not found for ${section.id}`);
      }

      const sectionSpan = range.endProgress - range.startProgress;

      // Map section animations to global progress range
      for (const animation of section.animations) {
        const globalStart = range.startProgress + (animation.start / 100) * sectionSpan;
        const globalEnd = range.startProgress + (animation.end / 100) * sectionSpan;
        animations.push({
          ...animation,
          start: globalStart,
          end: globalEnd,
          lastProgress: 0
        });
      }

      // Refresh ScrollTrigger to account for new height
      ScrollTrigger.refresh();
    }
  };

  return timeline;
}

function mapRange(globalProgress: number, start: number, end: number): number {
  if (globalProgress <= start) return 0;
  if (globalProgress >= end) return 1;
  return (globalProgress - start) / (end - start);
}

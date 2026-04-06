import type { AnimationLibs } from '@lib/animations/animation-libs';
import type { CreateTimelineSection } from '@lib/animations/section-timeline';
import { createSequentialThresholdAnimations } from '@lib/animations/text-animations';
import { interpolate } from '@utils/animations';

type Section2Deps = {};

function getSection2Elements(libs: AnimationLibs) {
  const section = document.getElementById('section2');
  const title = document.getElementById('section2Subtitle');
  const cardsContainer = document.getElementById('section2Cards');
  const cards = cardsContainer?.querySelectorAll('.homeCard');
  const videos = cardsContainer?.querySelectorAll('.homeCardImage');
  if (!section) throw new Error('Section 2 not found');
  if (!title) throw new Error('Section 2 title not found');
  if (!cards?.length) throw new Error('Section 2 cards not found');
  if (!videos?.length) throw new Error('Section 2 videos not found');
  return {
    section,
    title,
    titleSplit: libs.SplitText.create(title, { type: 'words,chars' }),
    cards,
    videos
  };
}

function initSection2(libs: AnimationLibs) {
  const elements = getSection2Elements(libs);
  return elements;
}

export const createSection2: CreateTimelineSection<Section2Deps> = libs => {
  const elements = initSection2(libs);
  const animateText = createSequentialThresholdAnimations(libs, [{ elements: elements.titleSplit.chars }]);

  return {
    id: 'section2',
    section: elements.section,
    animations: [
      {
        id: 'fadeInTitle',
        start: 10,
        end: 20,
        update: animateText
      },
      {
        id: 'panVideos',
        start: 20,
        end: 100,
        update: progress => {
          const h = elements.cards[0]?.clientHeight || 0;
          const y = interpolate(0, h * 0.5, progress);
          for (const video of elements.videos) libs.gsap.set(video, { y });
        }
      }
    ]
  };
};

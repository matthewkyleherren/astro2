import { type AnimationLibs, initAnimationLibs } from '@lib/animations/animation-libs';
import { createTimeline, type Timeline } from '@lib/animations/section-timeline';
import { createVideoPlayer, type VideoPlayer } from '@lib/video-player';
import type MuxVideoElement from '@mux/mux-video';
import {
  SECTION_1_VIDEO_PLAYBACK_ID,
  SECTION_1_VIDEO_PLAYBACK_ID_MOBILE,
  SECTION_3_VIDEO_PLAYBACK_ID,
  SECTION_3_VIDEO_PLAYBACK_ID_MOBILE
} from './constants';
import { createSection1, fadeInSection1, fadeInSection1Headers, fadeOutSection1Headers } from './sections/section-1';
import { createSection2 } from './sections/section-2';
import { createSection3 } from './sections/section-3';
import { createSection4 } from './sections/section-4';
import { createSection5 } from './sections/section-5';
import { createSection6 } from './sections/section-6';
import { createVideoControls, type VideoControls } from './video-controls';

export type Store = {
  timeline: Timeline | null;
  section1Video: {
    player: VideoPlayer;
    controls: VideoControls;
  };
};

let store: Store | null = null;
let lastTime = 0;

function initStore(next: Store) {
  store = next;
}

export function getStore() {
  return store;
}

function initTimeline(libs: AnimationLibs, deps: Omit<Store, 'timeline'>) {
  const timeline = createTimeline(libs);
  timeline.initSection(createSection1(libs, deps));
  timeline.initSection(createSection2(libs, deps));
  timeline.initSection(createSection3(libs, deps));
  timeline.initSection(createSection4(libs, deps));
  timeline.initSection(createSection5(libs, deps));
  timeline.initSection(createSection6(libs, deps));
  timeline.refresh();
  return timeline;
}

function initSection1Video(libs: AnimationLibs) {
  const video = document.getElementById('section1Video') as MuxVideoElement | null;
  const button = document.getElementById('section1HeaderRightButton');
  const section = document.getElementById('section1');
  if (!video) throw new Error('Section 1 video element not found');
  if (!button) throw new Error('Section 1 header right button element not found');
  if (!section) throw new Error('Section 1 element not found');
  let canShow = false;
  const player = createVideoPlayer(video, v => {
    v.play();
    section.classList.add('section1PosterHidden');
    fadeInSection1(libs, () => {
      canShow = true;
    });
  });

  const controls = createVideoControls(libs, {
    player,
    initialIsVisible: false,
    onShow: isFirstShow => {
      if (isFirstShow) player.restart();
      player.play();
      player.unmute();
      fadeOutSection1Headers(libs);
    },
    onHide: () => {
      player.play();
      player.mute();
      fadeInSection1Headers(libs);
    }
  });

  const updateVideoPlaybackId = () => {
    const playbackId = window.innerWidth < 500 ? SECTION_1_VIDEO_PLAYBACK_ID_MOBILE : SECTION_1_VIDEO_PLAYBACK_ID;
    video.setAttribute('playback-id', playbackId);
  };

  const show = () => {
    if (controls.isVisible || !canShow) return;
    controls.show();
  };

  updateVideoPlaybackId();
  button.addEventListener('click', show);
  video.addEventListener('click', show);
  window.addEventListener('resize', updateVideoPlaybackId);
  return { player, controls };
}

function initSection3Video() {
  const video = document.getElementById('section3Video') as MuxVideoElement | null;
  if (!video) throw new Error('Section 3 video element not found');
  const updateVideoPlaybackId = () => {
    const playbackId = window.innerWidth < 500 ? SECTION_3_VIDEO_PLAYBACK_ID_MOBILE : SECTION_3_VIDEO_PLAYBACK_ID;
    video.setAttribute('playback-id', playbackId);
  };
  updateVideoPlaybackId();
  window.addEventListener('resize', updateVideoPlaybackId);
}

function initCleanupListener() {
  document.addEventListener('astro:before-swap', () => {
    if (!store) return;
    store.timeline?.dispose();
    store.section1Video.player.dispose();
    store.section1Video.controls.dispose();
    store = null;
  });
}

function initAnimations() {
  const animate = (currentTime: number) => {
    if (!store) return;
    requestAnimationFrame(animate);
    lastTime = currentTime;
  };
  lastTime = performance.now();
  animate(lastTime);
}

async function waitForFontsReady() {
  if (!('fonts' in document) || !document.fonts?.ready) return;
  await Promise.race([
    document.fonts.ready,
    new Promise<void>(resolve => {
      window.setTimeout(resolve, 3000);
    })
  ]);
}

async function init() {
  const libs = await initAnimationLibs();
  const section1Video = initSection1Video(libs);
  await waitForFontsReady();
  const timeline = initTimeline(libs, { section1Video });
  initSection3Video();
  initStore({ timeline, section1Video });
  initAnimations();
  initCleanupListener();
}

init();

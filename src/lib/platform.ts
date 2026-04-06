export function checkIsMobile() {
  if (navigator.userAgentData) return navigator.userAgentData.mobile;
  return /Mobi|Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function checkIsSafari() {
  const ua = navigator.userAgent;
  return /Safari/i.test(ua) && !/Chrome|CriOS|Chromium|Edg/i.test(ua);
}

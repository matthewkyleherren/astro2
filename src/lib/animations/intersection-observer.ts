/**
 * IntersectionObserver utilities for entrance animations
 *
 * These helpers reduce boilerplate when setting up scroll-triggered animations
 * that should only play once when an element enters the viewport.
 */

export type OnEnterCallback = () => void;

export interface IntersectionOptions {
  /** Intersection threshold (0-1). Defaults to 0.5 */
  threshold?: number;
  /** Root margin for the observer */
  rootMargin?: string;
  /** If true, only triggers once. Defaults to true */
  once?: boolean;
}

/**
 * Observe an element and call callback when it enters viewport.
 * By default, only triggers once then disconnects.
 *
 * @param element - The element to observe
 * @param onEnter - Callback to run when element enters viewport
 * @param options - IntersectionObserver options
 * @returns Cleanup function to disconnect the observer
 *
 * @example
 * ```ts
 * const cleanup = observeIntersection(
 *   element,
 *   () => playAnimation(),
 *   { threshold: 0.3 }
 * );
 *
 * // Later, to cleanup:
 * cleanup();
 * ```
 */
export function observeIntersection(
  element: Element,
  onEnter: OnEnterCallback,
  options?: IntersectionOptions
): () => void {
  let hasTriggered = false;
  const once = options?.once ?? true;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (!once || !hasTriggered)) {
          onEnter();
          hasTriggered = true;
          if (once) {
            observer.disconnect();
          }
        }
      });
    },
    {
      threshold: options?.threshold ?? 0.5,
      rootMargin: options?.rootMargin
    }
  );

  observer.observe(element);
  return () => observer.disconnect();
}

/**
 * Setup an entrance animation observer for a Web Component.
 * This is a convenience wrapper around observeIntersection for HTMLElement classes.
 *
 * @param element - The HTMLElement (usually `this` in a Web Component)
 * @param playAnimation - Function to play the entrance animation
 * @param getTarget - Optional function to get the target element to observe (defaults to element itself)
 * @param options - IntersectionObserver options (once is always true)
 * @returns Cleanup function to disconnect the observer
 *
 * @example
 * ```ts
 * class MyElement extends HTMLElement {
 *   private cleanup: (() => void) | null = null;
 *
 *   connectedCallback() {
 *     this.cleanup = setupEntranceObserver(
 *       this,
 *       () => this.playEntranceAnimation(),
 *       () => this.querySelector('.card'),
 *       { threshold: 0.5 }
 *     );
 *   }
 *
 *   disconnectedCallback() {
 *     this.cleanup?.();
 *   }
 * }
 * ```
 */
export function setupEntranceObserver(
  element: HTMLElement,
  playAnimation: () => void,
  getTarget?: () => Element | null,
  options?: Omit<IntersectionOptions, 'once'>
): () => void {
  const target = getTarget?.() ?? element;
  if (!target) {
    // Return no-op cleanup if target not found
    return () => {};
  }
  return observeIntersection(target, playAnimation, { ...options, once: true });
}

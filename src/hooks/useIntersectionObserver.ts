import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  initialVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.05,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  initialVisible = false,
}: UseIntersectionObserverOptions = {}) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    // If already visible and only triggers once, nothing to observe
    if (isVisible && triggerOnce) return;

    // Graceful fallback for non-browser or environments lacking IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const element = targetRef.current;
    if (!element) return;

    // Safety fallback: ensure content is always revealed even if the observer misses an event
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      clearTimeout(fallbackTimer);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, isVisible]);

  return [targetRef, isVisible] as const;
}

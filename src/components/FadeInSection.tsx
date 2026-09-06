import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  threshold?: number;
  rootMargin?: string;
  direction?: 'up' | 'down' | 'none';
  initialVisible?: boolean;
  id?: string;
  as?: 'div' | 'section';
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 700,
  threshold = 0.05,
  rootMargin = '0px 0px -40px 0px',
  direction = 'up',
  initialVisible = false,
  id,
  as = 'div',
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true,
    initialVisible,
  });

  const getTransformClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-y-0';
    }
    if (direction === 'up') {
      return 'opacity-0 translate-y-8';
    }
    if (direction === 'down') {
      return 'opacity-0 -translate-y-8';
    }
    return 'opacity-0';
  };

  const Component = as;

  return (
    <Component
      ref={ref}
      id={id}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all ease-out transform will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${getTransformClasses()} ${className}`}
    >
      {children}
    </Component>
  );
};

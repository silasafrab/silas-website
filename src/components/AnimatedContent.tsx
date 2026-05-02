'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimatedContentMotionProps = {
  distance: number;
  direction: 'vertical' | 'horizontal';
  reverse: boolean;
  duration: number;
  ease: string;
  initialOpacity: number;
  animateOpacity: boolean;
  scale: number;
  threshold: number;
  scrollStart?: string;
};

interface AnimatedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | string | null;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  /** Ex.: `"top bottom"` ou `"top 90%"`. Se omitido usa `threshold`. */
  scrollStart?: string;
  /**
   * Sobrescreve apenas em `min-width: 768px` (breakpoint `md` do Tailwind).
   * Útil para direção diferente no desktop vs celular sem divergência de SSR.
   */
  mdOverrides?: Partial<AnimatedContentMotionProps>;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
  onComplete,
  onDisappearanceComplete,
  scrollStart,
  mdOverrides,
  className = '',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget: Element | string | null = container || document.getElementById('snap-main-container') || null;

    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const mq = mdOverrides ? window.matchMedia('(min-width: 768px)') : null;
    let st: ScrollTrigger | undefined;
    let tl: gsap.core.Timeline | undefined;

    const dispose = () => {
      st?.kill();
      tl?.kill();
    };

    const build = () => {
      dispose();
      gsap.killTweensOf(el);

      const isMd = Boolean(mq?.matches);
      const m = mdOverrides && isMd
        ? {
            distance,
            direction,
            reverse,
            duration,
            ease,
            initialOpacity,
            animateOpacity,
            scale,
            threshold,
            scrollStart,
            ...mdOverrides,
          }
        : {
            distance,
            direction,
            reverse,
            duration,
            ease,
            initialOpacity,
            animateOpacity,
            scale,
            threshold,
            scrollStart,
          };

      const axis = m.direction === 'horizontal' ? 'x' : 'y';
      const offset = m.reverse ? -m.distance : m.distance;
      const startPct = (1 - m.threshold) * 100;
      const triggerStart = m.scrollStart ?? scrollStart ?? `top ${startPct}%`;

      gsap.set(el, {
        [axis]: offset,
        scale: m.scale,
        opacity: m.animateOpacity ? m.initialOpacity : 1,
        visibility: 'visible',
        transformOrigin: '50% 50%',
      });

      const activeTl = gsap.timeline({
        paused: true,
        delay,
        onComplete: () => {
          if (onComplete) onComplete();
          if (disappearAfter > 0) {
            gsap.to(el, {
              [axis]: m.reverse ? m.distance : -m.distance,
              scale: 0.8,
              opacity: m.animateOpacity ? m.initialOpacity : 0,
              delay: disappearAfter,
              duration: disappearDuration,
              ease: disappearEase,
              onComplete: () => onDisappearanceComplete?.(),
            });
          }
        },
      });
      tl = activeTl;

      activeTl.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration: m.duration,
        ease: m.ease,
      });

      st = ScrollTrigger.create({
        trigger: el,
        scroller: scrollerTarget || undefined,
        start: triggerStart,
        once: true,
        onEnter: () => activeTl.play(),
      });
    };

    build();

    if (mq && mdOverrides) {
      mq.addEventListener('change', build);
      return () => {
        mq.removeEventListener('change', build);
        dispose();
      };
    }

    return () => dispose();
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete,
    scrollStart,
    mdOverrides,
  ]);

  return (
    <div ref={ref} className={`invisible ${className}`} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;

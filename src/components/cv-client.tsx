'use client';

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { readCvSession, saveCvSession } from '@/lib/cv-session';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { BookLoader } from '@/components/book-loader';
import { PageNavigation } from '@/components/page-navigation';
import { pageMotionTokens } from '@/lib/motion-tokens';
import { getImageProps } from 'next/image';
import type { Lang } from '@/types';
import type { Dictionary } from '@/hooks/getDictionary';

interface CVClientWrapperProps {
  children: React.ReactNode;
  lang: Lang;
  pageText: string;
  ofText: string;
  dict: Dictionary;
}

const chapterSlugs = [
  'about',
  'experience',
  'projects',
  'skills',
  'education',
] as const;
const totalPages = chapterSlugs.length;
const swipeMinDistance = 70;
const swipeMaxDrift = 50;

type PageCustom = { forward: boolean; instant: boolean };

type NavState = PageCustom & { page: number };

const pageVariants = {
  enter: ({ forward, instant }: PageCustom) =>
    instant
      ? { x: 0, opacity: 1, filter: 'blur(0px)' }
      : {
          x: forward ? pageMotionTokens.offset : -pageMotionTokens.offset,
          opacity: 0,
          filter: `blur(${pageMotionTokens.blur})`,
        },
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: pageMotionTokens.duration,
      ease: pageMotionTokens.ease,
    },
  },
  exit: ({ forward, instant }: PageCustom) =>
    instant
      ? { opacity: 0, transition: { duration: 0 } }
      : {
          x: forward ? -pageMotionTokens.offset : pageMotionTokens.offset,
          opacity: 0,
          transition: {
            duration: pageMotionTokens.duration,
            ease: pageMotionTokens.ease,
          },
        },
};

function pageFromHash(hash: string): number | null {
  const index = chapterSlugs.indexOf(
    hash.replace('#', '') as (typeof chapterSlugs)[number]
  );
  return index === -1 ? null : index + 1;
}

function chapterHash(page: number): string {
  return `#${chapterSlugs[page - 1]}`;
}

function isEditableTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  );
}

function projectPreloadImages(dict: Dictionary): string[] {
  return dict.projects.items
    .filter(item => item.brandLogo !== 'popauction' && item.image.length > 0)
    .map(item => item.image);
}

function chapterImagePaths(dict: Dictionary, page: number): string[] {
  const byPage: string[][] = [
    ['/Chapter1.png'],
    ['/Chapter2.png'],
    projectPreloadImages(dict),
    [],
    ['/Chapter5.png'],
  ];
  return byPage[page - 1] ?? [];
}

function preloadChapterImages(dict: Dictionary, page: number) {
  for (const src of chapterImagePaths(dict, page)) {
    const { props } = getImageProps({
      src,
      alt: '',
      width: 1024,
      height: 1024,
      sizes: '(max-width: 768px) 100vw, 740px',
    });
    const image = new window.Image();
    image.srcset = props.srcSet ?? '';
    image.sizes = props.sizes ?? '';
    image.src = props.src;
  }
}

export default function CVClientWrapper({
  children,
  lang,
  pageText,
  ofText,
  dict,
}: CVClientWrapperProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [nav, setNav] = useState<NavState>({
    page: 1,
    forward: true,
    instant: true,
  });
  const currentPage = nav.page;
  const pageRef = useRef(currentPage);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const session = readCvSession();
    if (session.introSeen) {
      setShowLoader(false);
    }

    const hashPage = pageFromHash(window.location.hash);
    const page = hashPage ?? session.page;
    if (page !== 1) {
      setNav({ page, forward: true, instant: true });
      if (hashPage === null) {
        window.history.replaceState(null, '', chapterHash(page));
      }
    }
  }, []);

  useEffect(() => {
    pageRef.current = currentPage;
    saveCvSession({ page: currentPage });
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [currentPage, reduceMotion]);

  useEffect(() => {
    if (!showLoader) {
      preloadChapterImages(dict, currentPage + 1);
    }
  }, [currentPage, showLoader, dict]);

  const goToPage = useCallback((page: number) => {
    const target = Math.min(totalPages, Math.max(1, page));
    if (target === pageRef.current) return;
    setNav({ page: target, forward: target > pageRef.current, instant: false });
    window.history.pushState(null, '', chapterHash(target));
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const page = pageFromHash(window.location.hash) ?? 1;
      setNav(prev => ({ page, forward: page > prev.page, instant: false }));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (showLoader) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        isEditableTarget(event.target)
      ) {
        return;
      }
      if (event.key === 'ArrowRight') goToPage(pageRef.current + 1);
      if (event.key === 'ArrowLeft') goToPage(pageRef.current - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLoader, goToPage]);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < swipeMinDistance || Math.abs(dy) > swipeMaxDrift) {
      return;
    }
    goToPage(pageRef.current + (dx < 0 ? 1 : -1));
  };

  const handleLoaderComplete = useCallback(() => {
    saveCvSession({ introSeen: true });
    setShowLoader(false);
  }, []);

  const pages = React.Children.toArray(children);
  const pageCustom: PageCustom = {
    forward: nav.forward,
    instant: nav.instant || Boolean(reduceMotion),
  };

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key='loader'
            initial={false}
            exit={{
              opacity: 0,
              transition: {
                duration: pageMotionTokens.duration,
                ease: pageMotionTokens.ease,
              },
            }}
            className='fixed inset-0 z-50'
          >
            <BookLoader
              onComplete={handleLoaderComplete}
              dict={dict}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className='bg-background overflow-x-clip'>
        <div
          className='relative mx-auto max-w-5xl px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:px-12'
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence
            mode='wait'
            initial={false}
            custom={pageCustom}
          >
            <motion.div
              key={currentPage}
              custom={pageCustom}
              variants={pageVariants}
              initial='enter'
              animate='center'
              exit='exit'
              className='w-full'
            >
              <motion.div
                key={lang}
                initial={{ opacity: 0.94 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: pageMotionTokens.duration,
                  ease: pageMotionTokens.ease,
                }}
              >
                {pages[currentPage - 1]}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <PageNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          lang={lang}
          pageText={pageText}
          ofText={ofText}
          chapterNames={dict.chapters.nav}
          navLabel={dict.common.chapterNavigation}
          prevPageLabel={dict.common.prevPage}
          nextPageLabel={dict.common.nextPage}
          themeLightLabel={dict.common.themeLight}
          themeDarkLabel={dict.common.themeDark}
          switchLanguageLabel={dict.common.switchLanguage}
        />
      </div>
    </MotionConfig>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { BookLoader } from '@/components/book-loader';
import { PageNavigation } from '@/components/page-navigation';
import { pageMotionTokens } from '@/lib/motion-tokens';
import type { Lang } from '@/types';
import type { Dictionary } from '@/hooks/getDictionary';

interface CVClientWrapperProps {
  children: React.ReactNode;
  lang: Lang;
  pageText: string;
  ofText: string;
  dict: Dictionary;
}

const pageVariants = {
  enter: (forward: boolean) => ({
    x: forward ? pageMotionTokens.offset : -pageMotionTokens.offset,
    opacity: 0,
    filter: `blur(${pageMotionTokens.blur})`,
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: pageMotionTokens.duration,
      ease: pageMotionTokens.ease,
    },
  },
  exit: (forward: boolean) => ({
    x: forward ? -pageMotionTokens.offset : pageMotionTokens.offset,
    opacity: 0,
    transition: {
      duration: pageMotionTokens.duration,
      ease: pageMotionTokens.ease,
    },
  }),
};

export default function CVClientWrapper({
  children,
  lang,
  pageText,
  ofText,
  dict,
}: CVClientWrapperProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const totalPages = 5;

  useEffect(() => {
    const behavior = reduceMotion ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, behavior });

    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior });
    }
  }, [currentPage, reduceMotion]);

  const handlePageChange = (newPage: number) => {
    setIsForward(newPage > currentPage);
    setCurrentPage(newPage);
  };

  const pages = React.Children.toArray(children);

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key='loader'
            initial={{ opacity: 1 }}
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
              onComplete={() => setShowLoader(false)}
              dict={dict}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showLoader && (
        <div className='bg-background overflow-x-hidden'>
          <div
            ref={containerRef}
            className='hide-scrollbar relative mx-auto max-w-5xl overflow-x-hidden overflow-y-auto px-5 py-10 pb-[140px] sm:px-8 sm:py-14 sm:pb-[180px] lg:px-12 lg:pb-32'
          >
            <AnimatePresence
              mode='wait'
              custom={isForward}
            >
              <motion.div
                key={currentPage}
                custom={isForward}
                variants={pageVariants}
                initial='enter'
                animate='center'
                exit='exit'
                className='w-full'
              >
                {pages[currentPage - 1]}
              </motion.div>
            </AnimatePresence>
          </div>

          <PageNavigation
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            lang={lang}
            pageText={pageText}
            ofText={ofText}
          />
        </div>
      )}
    </MotionConfig>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookLoader } from '@/components/book-loader';
import { PageNavigation } from '@/components/page-navigation';
import { pageVariants } from '@/lib/motion-variants';
import type { Lang } from '@/types';
import type { Dictionary } from '@/hooks/getDictionary';

interface CVClientWrapperProps {
  children: React.ReactNode;
  lang: Lang;
  pageText: string;
  ofText: string;
  dict: Dictionary;
}

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
  const totalPages = 5;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setIsForward(newPage > currentPage);
    setCurrentPage(newPage);
  };

  const pages = React.Children.toArray(children);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key='loader'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
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
        <div className='bg-background from-background via-background to-muted/20 overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]'>
          <div
            ref={containerRef}
            className='hide-scrollbar relative mx-auto max-w-4xl overflow-x-hidden overflow-y-auto px-4 py-8 pb-[140px] sm:px-6 sm:py-12 sm:pb-[180px] lg:px-8 lg:pb-32'
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
    </>
  );
}

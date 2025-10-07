'use client';

import { useState, useEffect, useRef } from 'react';
import { BookLoader } from '@/components/book-loader';
import { PageNavigation } from '@/components/page-navigation';
import type { Lang } from '@/types';

interface CVClientWrapperProps {
  children: React.ReactNode;
  lang: Lang;
  pageText: string;
  ofText: string;
}

export default function CVClientWrapper({
  children,
  lang,
  pageText,
  ofText,
}: CVClientWrapperProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = 5;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setIsForward(newPage > currentPage);
    setPreviousPage(currentPage);
    setCurrentPage(newPage);
  };

  const getPageClassName = (pageNumber: number) => {
    if (currentPage === pageNumber) {
      return 'translate-x-0 opacity-100 relative';
    }

    if (previousPage === pageNumber) {
      if (isForward) {
        return 'page-turn-exit absolute inset-0 pointer-events-none';
      } else {
        return 'translate-x-full opacity-0 absolute inset-0 pointer-events-none transition-all duration-700';
      }
    }

    if (currentPage > pageNumber) {
      return '-translate-x-full opacity-0 absolute inset-0 pointer-events-none';
    }
    return 'translate-x-full opacity-0 absolute inset-0 pointer-events-none';
  };

  if (showLoader) {
    return <BookLoader onComplete={() => setShowLoader(false)} />;
  }

  return (
    <div className='bg-background from-background via-background to-muted/20 min-h-screen overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]'>
      <div
        ref={containerRef}
        className='hide-scrollbar relative mx-auto max-w-4xl overflow-x-hidden overflow-y-auto px-4 py-8 pb-[140px] sm:px-6 sm:py-12 sm:pb-[180px] lg:px-8 lg:py-16'
      >
        {/* Render children with page animations */}
        {Array.isArray(children) ? (
          <>
            {(children as React.ReactElement[]).map((child, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${getPageClassName(index + 1)}`}
              >
                {child}
              </div>
            ))}
          </>
        ) : (
          children
        )}
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
  );
}

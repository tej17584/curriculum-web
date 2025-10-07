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
  const [isTransitioning, setIsTransitioning] = useState(false);
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
      // La página nueva que entra debe estar absolute para superponerse
      return 'translate-x-0 opacity-100 absolute inset-0 z-10';
    }

    if (previousPage === pageNumber) {
      if (isForward) {
        // Página anterior se mantiene relative para conservar altura durante la transición
        return 'page-turn-exit relative z-0 pointer-events-none';
      } else {
        // Página anterior se desliza hacia la derecha y se mantiene en el flujo
        return 'translate-x-full opacity-0 relative z-0 pointer-events-none transition-all duration-700';
      }
    }

    // Páginas que no están en transición se ocultan completamente
    return 'hidden';
  };

  if (showLoader) {
    return <BookLoader onComplete={() => setShowLoader(false)} />;
  }

  return (
    <div className='bg-background from-background via-background to-muted/20 overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]'>
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
                className={`min-h-[500px] transition-all duration-700 ${getPageClassName(index + 1)}`}
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

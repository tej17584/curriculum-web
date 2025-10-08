'use client';

import { useState, useEffect, useRef } from 'react';
import { BookLoader } from '@/components/book-loader';
import { PageNavigation } from '@/components/page-navigation';
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
    // Scroll al inicio de la página cuando cambie el currentPage
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setIsForward(newPage > currentPage);
    setCurrentPage(newPage);
  };

  const getPageClassName = (pageNumber: number) => {
    const isActive = currentPage === pageNumber;

    if (!isActive) {
      // Páginas no activas: completamente ocultas
      return 'hidden';
    }

    // Página actual: animación de entrada según dirección
    if (isForward) {
      return 'block animate-slide-in-right';
    } else {
      return 'block animate-slide-in-left';
    }
  };
  if (showLoader) {
    return (
      <BookLoader
        onComplete={() => setShowLoader(false)}
        dict={dict}
      />
    );
  }

  return (
    <div className='bg-background from-background via-background to-muted/20 overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]'>
      <div
        ref={containerRef}
        className='hide-scrollbar relative mx-auto max-w-4xl overflow-x-hidden overflow-y-auto px-4 py-8 pb-[140px] sm:px-6 sm:py-12 sm:pb-[180px] lg:px-8 lg:pb-32'
      >
        {/* Render children with simple slide animations */}
        {Array.isArray(children) ? (
          <div className='relative w-full'>
            {(children as React.ReactElement[]).map((child, index) => {
              const pageNumber = index + 1;
              const pageClasses = getPageClassName(pageNumber);

              return (
                <div
                  key={index}
                  className={`w-full ${pageClasses}`}
                >
                  {child}
                </div>
              );
            })}
          </div>
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

"use client"

import { useState, useEffect, useRef } from "react"
import { BookLoader } from "@/components/book-loader"
import { useLanguage, LanguageProvider } from "@/lib/language-context"
import { PageNavigation } from "@/components/page-navigation"
import { Chapter1About } from "@/components/chapters/chapter-1-about"
import { Chapter2Experience } from "@/components/chapters/chapter-2-experience"
import { Chapter3Projects } from "@/components/chapters/chapter-3-projects"
import { Chapter4Skills } from "@/components/chapters/chapter-4-skills"
import { Chapter5Education } from "@/components/chapters/chapter-5-education"

function CVContent() {
  const [showLoader, setShowLoader] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [previousPage, setPreviousPage] = useState(1)
  const [isForward, setIsForward] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const totalPages = 5

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    setIsForward(newPage > currentPage)
    setPreviousPage(currentPage)
    setCurrentPage(newPage)
  }

  const getPageClassName = (pageNumber: number) => {
    if (currentPage === pageNumber) {
      return "translate-x-0 opacity-100 relative"
    }

    if (previousPage === pageNumber) {
      if (isForward) {
        return "page-turn-exit absolute inset-0 pointer-events-none"
      } else {
        return "translate-x-full opacity-0 absolute inset-0 pointer-events-none transition-all duration-700"
      }
    }

    if (currentPage > pageNumber) {
      return "-translate-x-full opacity-0 absolute inset-0 pointer-events-none"
    }
    return "translate-x-full opacity-0 absolute inset-0 pointer-events-none"
  }

  if (showLoader) {
    return <BookLoader onComplete={() => setShowLoader(false)} />
  }

  return (
    <div className="overflow-x-hidden bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-muted/20">
      <div
        ref={containerRef}
        className="hide-scrollbar relative mx-auto max-w-4xl overflow-y-auto overflow-x-hidden px-4 py-8 pb-32 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        {/* Page 1: About */}
        <div className={`transition-all duration-700 ${getPageClassName(1)}`}>
          <Chapter1About t={t} />
        </div>

        {/* Page 2: Experience */}
        <div className={`transition-all duration-700 ${getPageClassName(2)}`}>
          <Chapter2Experience t={t} />
        </div>

        {/* Page 3: Projects */}
        <div className={`transition-all duration-700 ${getPageClassName(3)}`}>
          <Chapter3Projects t={t} />
        </div>

        {/* Page 4: Skills & Certifications */}
        <div className={`transition-all duration-700 ${getPageClassName(4)}`}>
          <Chapter4Skills t={t} />
        </div>

        {/* Page 5: Education */}
        <div className={`transition-all duration-700 ${getPageClassName(5)}`}>
          <Chapter5Education t={t} />
        </div>
      </div>

      <PageNavigation currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <CVContent />
    </LanguageProvider>
  )
}

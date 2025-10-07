"use client"

import { ChevronLeft, ChevronRight, Languages, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useState } from "react"

type PageNavigationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PageNavigation({ currentPage, totalPages, onPageChange }: PageNavigationProps) {
  const { language, setLanguage, t } = useLanguage()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border-2 border-border bg-card/95 px-3 py-2 shadow-xl backdrop-blur-md sm:bottom-8 sm:gap-3 sm:px-6 sm:py-3">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="h-10 w-10 sm:h-9 sm:w-9"
      >
        <ChevronLeft className="h-5 w-5 sm:h-4 sm:w-4" />
      </Button>

      <span className="font-serif text-sm text-foreground sm:text-base">
        {t("page")} {currentPage} {t("of")} {totalPages}
      </span>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="h-10 w-10 sm:h-9 sm:w-9"
      >
        <ChevronRight className="h-5 w-5 sm:h-4 sm:w-4" />
      </Button>

      <div className="h-6 w-px bg-border" />

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="h-10 w-10 transition-all hover:scale-110 sm:h-9 sm:w-9"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-primary sm:h-4 sm:w-4" />
        ) : (
          <Sun className="h-5 w-5 text-primary sm:h-4 sm:w-4" />
        )}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
        className="h-10 w-10 transition-all hover:scale-110 sm:h-9 sm:w-9"
        aria-label="Toggle language"
      >
        <Languages className="h-5 w-5 text-primary sm:h-4 sm:w-4" />
      </Button>
    </div>
  )
}

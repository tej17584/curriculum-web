"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Chapter1AboutProps {
  t: (key: string) => string
}

export function Chapter1About({ t }: Chapter1AboutProps) {
  return (
    <>
      <header className="mb-16 border-b-2 border-primary/20 pb-8">
        <h1 className="mb-3 font-serif text-5xl font-bold tracking-tight text-foreground lg:text-6xl">{t("name")}</h1>
        <p className="mb-4 font-serif text-xl italic text-primary lg:text-2xl">{t("title")}</p>
        <p className="mb-6 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">{t("bio")}</p>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-2 border-primary/50 bg-transparent text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <a href="mailto:your.email@example.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {t("email")}
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-2 border-primary/50 bg-transparent text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-2 border-primary/50 bg-transparent text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <a
              href="https://linkedin.com/in/alejandrotejada17584"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 font-serif text-3xl font-semibold tracking-wide text-foreground">{t("chapterAbout")}</h2>
        <div className="space-y-4 font-serif text-lg leading-relaxed text-foreground">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-none first-letter:text-primary">
            {t("aboutText1")}
          </p>
          <p>{t("aboutText2")}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/book-stack-illustration.jpg"
              alt="Stack of books illustration"
              className="w-full grayscale transition-all hover:opacity-90"
            />
          </div>
        </div>
      </section>
    </>
  )
}

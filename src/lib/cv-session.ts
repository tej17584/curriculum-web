const STORAGE_KEY = 'cv-reading-session';
const TOTAL_PAGES = 5;

/** Read by the inline script in `app/layout.tsx` before hydration. */
export const INTRO_SEEN_KEY = 'cv-intro-seen';

export type CvReadingSession = {
  page: number;
  introSeen: boolean;
};

const defaultSession: CvReadingSession = {
  page: 1,
  introSeen: false,
};

function clampPage(page: number): number {
  if (!Number.isFinite(page)) return 1;
  return Math.min(TOTAL_PAGES, Math.max(1, Math.round(page)));
}

function readIntroSeen(): boolean {
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

export function readCvSession(): CvReadingSession {
  if (typeof window === 'undefined') return defaultSession;

  const introSeen = readIntroSeen();

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultSession, introSeen };

    const parsed = JSON.parse(raw) as Partial<CvReadingSession>;
    return {
      page: clampPage(parsed.page ?? 1),
      introSeen,
    };
  } catch {
    return { ...defaultSession, introSeen };
  }
}

export function saveCvSession(partial: Partial<CvReadingSession>): void {
  if (typeof window === 'undefined') return;

  try {
    if (partial.introSeen !== undefined) {
      if (partial.introSeen) {
        localStorage.setItem(INTRO_SEEN_KEY, '1');
      } else {
        localStorage.removeItem(INTRO_SEEN_KEY);
      }
    }

    if (partial.page !== undefined) {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ page: clampPage(partial.page) })
      );
    }
  } catch {
    // ignore quota / private mode
  }
}

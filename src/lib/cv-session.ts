const STORAGE_KEY = 'cv-reading-session';
const TOTAL_PAGES = 5;

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

export function readCvSession(): CvReadingSession {
  if (typeof window === 'undefined') return defaultSession;

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSession;

    const parsed = JSON.parse(raw) as Partial<CvReadingSession>;
    return {
      page: clampPage(parsed.page ?? 1),
      introSeen: Boolean(parsed.introSeen),
    };
  } catch {
    return defaultSession;
  }
}

export function saveCvSession(partial: Partial<CvReadingSession>): void {
  if (typeof window === 'undefined') return;

  const current = readCvSession();
  const next: CvReadingSession = {
    page: partial.page !== undefined ? clampPage(partial.page) : current.page,
    introSeen:
      partial.introSeen !== undefined ? partial.introSeen : current.introSeen,
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore quota / private mode
  }
}

import { readCvSession, saveCvSession } from './cv-session';

describe('cv-session', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('returns defaults when empty', () => {
    expect(readCvSession()).toEqual({ page: 1, introSeen: false });
  });

  it('persists page and introSeen', () => {
    saveCvSession({ page: 3, introSeen: true });
    expect(readCvSession()).toEqual({ page: 3, introSeen: true });
  });

  it('clamps page to valid range', () => {
    saveCvSession({ page: 99 });
    expect(readCvSession().page).toBe(5);
    saveCvSession({ page: 0 });
    expect(readCvSession().page).toBe(1);
  });
});

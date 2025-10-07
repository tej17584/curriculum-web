import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './language-context';

function Consumer() {
  const { t, language, setLanguage } = useLanguage();
  return React.createElement(
    'div',
    null,
    React.createElement('span', { 'data-testid': 'lang' }, language),
    React.createElement('span', { 'data-testid': 'text' }, t('chapterAbout')),
    React.createElement('button', { onClick: () => setLanguage('es') }, 'es'),
  );
}

test('useLanguage provides t() that returns translations', async () => {
  render(React.createElement(LanguageProvider, null, React.createElement(Consumer)));

  expect(screen.getByTestId('text').textContent).toMatch(/Chapter I|Capítulo I/);
  expect(screen.getByTestId('lang').textContent).toBe('en');
  fireEvent.click(screen.getByText('es'));

  await waitFor(() => expect(screen.getByTestId('lang').textContent).toBe('es'));
  await waitFor(() => expect(screen.getByTestId('text').textContent).toMatch(/Capítulo I/));
});

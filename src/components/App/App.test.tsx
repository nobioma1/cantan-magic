import { render, screen } from '@testing-library/react';

import App from './App';

test('renders this is app', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is app/i);
  expect(linkElement).toBeInTheDocument();
});

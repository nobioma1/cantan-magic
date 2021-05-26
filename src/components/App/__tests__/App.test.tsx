import { render, waitFor } from '@testing-library/react';
import fetch from 'jest-fetch-mock';

import App from '../App';

beforeEach(() => {
  fetch.resetMocks();
});

test('renders app', async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      sets: [],
    })
  );

  const { getByTestId, getByText } = await waitFor(() => render(<App />));
  expect(getByText(/select a set/i)).toBeInTheDocument();
  expect(getByTestId('DROPDOWN-SELECT')).toBeInTheDocument();
  expect(getByText(/gather/i)).toBeInTheDocument();
  expect(
    getByText(
      /no information to display, please choose a set from the dropdown./i
    )
  ).toBeInTheDocument();
});

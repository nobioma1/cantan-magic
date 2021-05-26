import { render, waitFor } from '@testing-library/react';

import Sets from '../Sets';

describe('renders child components appropriately', () => {
  test('renders this is app', async () => {
    const { getByTestId } = await waitFor(() => render(<Sets />));
    expect(getByTestId('test-set-filter')).toBeInTheDocument();
    expect(getByTestId('test-set-grid')).toBeInTheDocument();
  });
});

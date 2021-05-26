import { render, waitFor, fireEvent } from '@testing-library/react';
import fetch from 'jest-fetch-mock';

import SetFilter from '../SetFilter';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Set Filter Component', () => {
  test('renders sets dropdown data from request', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        sets: [
          {
            code: '2ED',
            name: 'Unlimited Edition',
            type: 'core',
            releaseDate: '1993-12-01',
            onlineOnly: false,
          },
          {
            code: '5ED',
            name: 'Fifth Edition',
            type: 'core',
            releaseDate: '1997-03-24',
            block: 'Core Set',
            onlineOnly: false,
          },
        ],
      })
    );

    const { getByText } = await waitFor(() =>
      render(<SetFilter setSet={() => {}} />)
    );

    expect(getByText(/Fifth Edition/i)).toBeInTheDocument();
    expect(getByText(/Unlimited Edition/i)).toBeInTheDocument();
  });

  test('sets the selected set after clicking Gather button', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        sets: [
          {
            code: '2ED',
            name: 'Unlimited Edition',
            type: 'core',
            releaseDate: '1993-12-01',
            onlineOnly: false,
          },
          {
            code: '5ED',
            name: 'Fifth Edition',
            type: 'core',
            releaseDate: '1997-03-24',
            block: 'Core Set',
            onlineOnly: false,
          },
        ],
      })
    );

    const setSetFn = jest.fn();

    const { getByTestId, getByText } = await waitFor(() =>
      render(<SetFilter setSet={setSetFn} />)
    );

    fireEvent.change(getByTestId('DROPDOWN-SELECT'), {
      target: { value: 'Fifth Edition' },
    });

    fireEvent.click(getByText(/gather/i));

    expect(setSetFn).toHaveBeenCalledWith({
      code: '5ED',
      name: 'Fifth Edition',
      type: 'core',
      releaseDate: '1997-03-24',
      block: 'Core Set',
      onlineOnly: false,
    });
  });

  test('check for value after clicking Gather button', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        sets: [],
      })
    );

    const setSetFn = jest.fn();

    const { getByTestId, getByText } = await waitFor(() =>
      render(<SetFilter setSet={setSetFn} />)
    );

    fireEvent.change(getByTestId('DROPDOWN-SELECT'), {
      target: { value: '' },
    });

    fireEvent.click(getByText(/gather/i));

    expect(setSetFn).not.toHaveBeenCalled();
  });
});

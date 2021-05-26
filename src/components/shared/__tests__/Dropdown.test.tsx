import { render, screen } from '@testing-library/react';

import Dropdown from '../Dropdown';

describe('Dropdown Component', () => {
  const props = {
    name: 'test-dropdown',
    options: [
      { title: 'option 1', value: '1' },
      { title: 'option 2', value: '2' },
    ],
  };

  test('renders dropdown with label', () => {
    render(<Dropdown {...props} label="Test Dropdown Label" />);
    const labelEl = screen.getByLabelText(/Test Dropdown Label/i);
    expect(labelEl).toBeInTheDocument();
  });

  test('renders dropdown with options', () => {
    render(<Dropdown {...props} />);
    expect(screen.getByTestId('DROPDOWN-SELECT')).toBeInTheDocument();
    expect(screen.getAllByTestId('DROPDOWN-SELECT-OPTIONS')).toHaveLength(
      props.options.length
    );
  });
});

import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button Component', () => {
  test('renders button text', () => {
    render(<Button title="Test Button" onClick={() => {}} />);
    const btnEl = screen.getByText(/Test Button/i);
    expect(btnEl).toBeInTheDocument();
  });

  test('button receive and fires onClick function', () => {
    const props = {
      title: 'Test Button',
      onClick: jest.fn(),
    };
    render(<Button {...props} />);
    fireEvent.click(screen.getByText(/Test Button/i));
    expect(props.onClick).toHaveBeenCalled();
  });
});

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CounterTwo } from './CounterTwo';

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />,
    );

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalled;

    expect(decrementHandler).toHaveBeenCalled;
  });
});

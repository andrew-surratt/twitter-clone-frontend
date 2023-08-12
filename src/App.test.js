import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const signIn = screen.getByTestId(/sign-in-container/i);
  expect(signIn).toBeInTheDocument();
});

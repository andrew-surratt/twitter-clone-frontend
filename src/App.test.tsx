import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App.js';

test('renders sign in page', () => {
  render(<App />);
  const signIn = screen.getByTestId(/sign-in-container/i);
  expect(signIn).toBeDefined();
});

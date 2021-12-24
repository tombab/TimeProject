import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders different state', () => {
  render(<App />);
  const linkElement = screen.getByText(/Daily/i);
  expect(linkElement).toBeInTheDocument();
});

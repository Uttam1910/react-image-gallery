// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lumora brand elements', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/LUMORA/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

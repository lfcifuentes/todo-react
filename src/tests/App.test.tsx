// Imports
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

// To Test
import App from '../App';

// eslint-disable-next-line jest/valid-describe-callback
describe('Renders main page correctly', async () => {
  /**
   * Resets all renders after each test
   */
  afterEach(() => {
      cleanup();
  });

  /**
   * Passes - shows title correctly
   */
  it('Should render the page correctly', async () => {
      // Setupq
      render(<App />);
      const h1 = screen.queryByText('Vite + React');

      // Post Expectations
      expect(h1).toBeInTheDocument();
  });
})
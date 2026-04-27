import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Astral Solutions hero heading', async () => {
  render(<App />);
  const heading = await screen.findByRole('heading', {
    name: /Building Digital Systems That Help Businesses Grow and Operate Smarter/i,
  });
  expect(heading).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render the header', async () => {
  render(<App />);

  const head = screen.getByText(/category/i);

  expect(head).toBeInTheDocument();
});

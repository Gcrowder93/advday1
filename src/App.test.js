import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render the header', async () => {
  render(<App />);

  const head = screen.getByText(/category/i);
  const cat = screen.getByText(/family/i);
  const search = screen.getByRole(/text/);

  expect(head).toBeInTheDocument();
  expect(cat).toBeInTheDocument();
  expect(search).toBeInTheDocument();
});

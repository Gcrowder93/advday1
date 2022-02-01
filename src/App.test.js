import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import excuses from './Data/Data';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(`https://excuser.herokuapp.com/v1/excuse/10`, (req, res, ctx) => {
    return res(ctx.json(excuses));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('Should render the header', async () => {
  render(<App />);

  const head = screen.getByText(/category/i);
  const cat = screen.getByText(/family/i);
  const search = screen.getByRole(/text/);

  expect(head).toBeInTheDocument();
  expect(cat).toBeInTheDocument();
  expect(search).toBeInTheDocument();
});

test('we search for a category', async () => {
  render(<App />);

  const searchbar = await screen.findByRole('textbox', { search: /search:/i });
  const excuseCategory = 'family';
  userEvent.type(searchbar, excuseCategory);
  const excuses = await screen.findAllByText(excuseCategory, { exact: false });
  const result = excuses.map((excuses) => excuses.textContent);
  const handleCategoryCheck = (excuses) => excuses.toLowerCase().includes(excuseCategory);
  const isSameCat = result.every(handleCategoryCheck);

  expect(isSameCat).toBe(true);
  expect(searchbar).toBeInTheDocument();
});

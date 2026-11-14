
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import App from './App';

it('Have user', () => {
  render(<App />);

  expect(screen.getByText('Ali')).toBeInTheDocument();
  expect(screen.getByText('Vali')).toBeInTheDocument();
});
it('search work', async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByPlaceholderText(/search by name/i);
  await user.type(input, 'vali');

  expect(screen.getByText('Vali')).toBeInTheDocument();
  expect(screen.queryByText('Ali')).not.toBeInTheDocument();
});


it('Delete work', async () => {
  const user = userEvent.setup();
  render(<App />);

  const deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
  await user.click(deleteButtons[0]);

  expect(screen.queryByText('Ali')).not.toBeInTheDocument();
  expect(screen.getByText('Vali')).toBeInTheDocument();
});

it('Add users', async () => {
  const user = userEvent.setup();
  render(<App />);

 
  await user.click(screen.getByRole('button', { name: 'Add User' }));

  await user.type(screen.getByPlaceholderText('Enter your name'), 'Rustam');
  await user.type(screen.getByPlaceholderText('Enter your email'), 'r@mail.com');

  const form = screen.getByPlaceholderText('Enter your name').closest('form');
  await user.click(within(form).getByRole('button', { name: 'Add User' }));

  expect(await screen.findByText('Rustam')).toBeInTheDocument();
});


it('if get error say', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: 'Add User' }));

  const form = screen.getByPlaceholderText('Enter your name').closest('form');
  await user.click(within(form).getByRole('button', { name: 'Add User' }));

  expect(await screen.findByText('Name is required')).toBeInTheDocument();
  
});
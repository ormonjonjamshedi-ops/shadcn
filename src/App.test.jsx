import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from './App';

const { mockAdd, mockEdit, mockDelete } = vi.hoisted(() => {
  const ok = () => vi.fn(() => ({ unwrap: () => Promise.resolve({}) }));
  return { mockAdd: ok(), mockEdit: ok(), mockDelete: ok() };
});

vi.mock('./api/todo', () => ({
  useGetTodosQuery: () => ({
    data: {
      data: [
        { id: 1, name: 'Learn React', description: 'Study hooks', images: [], isCompleted: false },
      ],
    },
    isLoading: false,
    error: undefined,
  }),
  useGetTodoByIdQuery: () => ({ data: undefined, isFetching: false }),
  useAddTodoMutation: () => [mockAdd],
  useEditTodoMutation: () => [mockEdit],
  useDeleteTodoMutation: () => [mockDelete],
}));

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows the todo list', () => {
    render(<App />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Study hooks')).toBeInTheDocument();
  });

  it('opens the add modal', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Add Task' }));
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  it('shows validation errors for empty form', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Add Task' }));
    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Description is required')).toBeInTheDocument();
    expect(mockAdd).not.toHaveBeenCalled();
  });

  it('adds a new task', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Add Task' }));
    await user.type(screen.getByPlaceholderText('Name'), 'Buy milk');
    await user.type(screen.getByPlaceholderText('Description'), 'From the shop');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    await waitFor(() => expect(mockAdd).toHaveBeenCalledTimes(1));
  });

  it('edits a task with JSON data', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Edit' }));
    expect(screen.getByPlaceholderText('Name')).toHaveValue('Learn React');

    await user.type(screen.getByPlaceholderText('Name'), ' 2');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    await waitFor(() =>
      expect(mockEdit).toHaveBeenCalledWith(
        expect.objectContaining({ id: 1, name: 'Learn React 2' })
      )
    );
  });

  it('deletes a task after confirm', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Delete' }));

    await waitFor(() => expect(mockDelete).toHaveBeenCalledWith(1));
  });
});
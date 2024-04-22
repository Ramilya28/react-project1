// todoSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types';

interface TodoState {
  todos: Task[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Task>) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: number; updatedTodo: Task }>) => {
      const { id, updatedTodo } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex] = updatedTodo;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== idToDelete);
    },
    toggleStatus: (state, action: PayloadAction<number>) => {
      const idToToggle = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === idToToggle);
      if (todoIndex !== -1) {
        state.todos[todoIndex].status = state.todos[todoIndex].status === 'opened' ? 'completed' : 'opened';
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleStatus } = todoSlice.actions;

export default todoSlice.reducer;

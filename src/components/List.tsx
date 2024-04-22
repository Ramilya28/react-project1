import React, { useState } from 'react';
import { Todo } from './Todo';

export function List() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Task 1', date: '01.04', status: 'opened' },
    { id: 2, title: 'Task 2', date: '02.04', status: 'completed' },
    { id: 3, title: 'Task 3', date: '03.04', status: 'opened' },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === 'opened' ? 'completed' : 'opened' } : todo
      )
    );
  };

  const selectStatus = (e) => {
    const value = e.target.value;
    if (value === 'opened') {
      setTodos(todos.filter(todo => todo.status === 'opened'));
    } else if (value === 'completed') {
      setTodos(todos.filter(todo => todo.status === 'completed'));
    } else {
      setTodos([...todos]);
    }
  };

  return (
    <>
      <p>Todo List</p>
      <select className="form-select" defaultValue='all' onChange={selectStatus}>
        <option value="all">All</option>
        <option value="opened">Opened</option>
        <option value="completed">Completed</option>
      </select>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleStatus={toggleStatus}
        />
      ))}
    </>
  );
}

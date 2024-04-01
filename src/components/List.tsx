
import React, { useState } from 'react';
import { Todo } from './Todo';

export function List() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  const handleAddTask = () => {
    const newTask = { id: Date.now(), title: 'New Task', completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <p>Todo List</p>
      <div>
        <button type="button" className="btn btn-secondary" onClick={handleAddTask}>
          Add
        </button>
      </div>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
          onToggle={handleToggleTask}
        />
      ))}
    </>
  );
}

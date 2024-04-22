import React, { useState } from 'react';

export function Todo({ todo, editTodo, deleteTodo, toggleStatus }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    editTodo(todo.id, { title: newTitle });
    setEditing(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        checked={todo.status === 'completed'}
        onChange={() => toggleStatus(todo.id)}
      />
      {editing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <p>{todo.title}</p>
      )}
      <button type="button" className="btn btn-secondary" onClick={() => setEditing(!editing)}>
        {editing ? 'Save' : 'Edit'}
      </button>
      <button type="button" className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

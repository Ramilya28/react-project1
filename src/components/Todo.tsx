 import React, { useState } from 'react';

export function Todo({ id, title, completed, onDelete, onEdit, onToggle }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id, newTitle);
    setEditing(false);
  };

  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        checked={completed}
        onChange={handleToggle}
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
        <p>{title}</p>
      )}
      <button type="button" className="btn btn-secondary" onClick={() => setEditing(!editing)}>
        {editing ? 'Save' : 'Edit'}
      </button>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}


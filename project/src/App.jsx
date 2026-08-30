import React, { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete, onStartEdit, onSaveEdit, onCancelEdit }) {
  const [editText, setEditText] = useState(todo.text)

  return (
    <li className={"todo-item" + (todo.completed ? ' completed' : '')}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {todo.editing ? (
        <>
          <input
            className="edit-input"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button className="btn save" onClick={() => onSaveEdit(todo.id, editText)}>Save</button>
          <button className="btn" onClick={() => { setEditText(todo.text); onCancelEdit(todo.id) }}>Cancel</button>
        </>
      ) : (
        <>
          <span className="text">{todo.text}</span>
          <div className="actions">
            <button className="btn" onClick={() => onStartEdit(todo.id)}>Edit</button>
            <button className="btn danger" onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  )
}

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  function addTodo() {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false }
    ])
    setText('')
  }

  function toggle(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  function remove(id) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  function startEdit(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, editing: true } : t))
  }

  function saveEdit(id, newText) {
    const trimmed = newText.trim()
    if (!trimmed) return
    setTodos(prev => prev.map(t => t.id === id ? { ...t, text: trimmed, editing: false } : t))
  }

  function cancelEdit(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, editing: false } : t))
  }

  function handleKey(e) {
    if (e.key === 'Enter') addTodo()
  }

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="add-row">
        <input
          placeholder="Add a new todo"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="btn primary" onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && <li className="empty">No todos yet</li>}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggle}
            onDelete={remove}
            onStartEdit={startEdit}
            onSaveEdit={saveEdit}
            onCancelEdit={cancelEdit}
          />
        ))}
      </ul>
    </div>
  )
}

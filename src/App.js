import React, { useState } from "react";
import "./index.css";

const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];

const TodoList = () => {
  // State to hold the todo items
  const [todos, setTodos] = useState(initialState);

  // State to manage the input for adding new todo items
  const [newTodo, setNewTodo] = useState("");

  // State to keep track of the todo being edited
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  // Function to handle checkbox click
  const handleCheckboxClick = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle delete button click
  const handleDeleteClick = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  // Function to handle edit button click
  const handleEditClick = (todoId, todoText) => {
    setEditingTodoId(todoId);
    setEditedTodoText(todoText);
  };

  // Function to handle save button click (for editing)
  const handleSaveClick = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, title: editedTodoText } : todo
      )
    );
    setEditingTodoId(null);
  };

  // Function to handle new todo input change
  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Function to handle adding new todo item
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        userId: 1,
        id: Date.now(),
        title: newTodo.trim(),
        completed: false
      };
      setTodos((prevTodos) => [newTodoItem, ...prevTodos]);
      setNewTodo("");
    }
  };

  return (
    <div className="todo-list">
      <h2>Create Todo List</h2>
      <div className="new-todo-container">
        <input
          type="text"
          placeholder="Add task"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editingTodoId === todo.id ? (
            <>
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
              />
              <button onClick={() => handleSaveClick(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxClick(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.title}
              </span>
              {!todo.completed && (
                <>
                  {editingTodoId === null && (
                    <button onClick={() => handleEditClick(todo.id, todo.title)}>
                      Edit
                    </button>
                  )}
                  <button onClick={() => handleDeleteClick(todo.id)}>
                    Delete
                  </button>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add a new todo to the list
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]); // Add the new todo to the list
      setInput(""); // Clear the input field
    }
  };

  // Delete a todo from the list
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove the item at the given index
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-700 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>

      <div className="flex mb-4 gap-3">
        <input
          className="flex-1 p-2 rounded-lg border-none focus:outline-none text-black"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white  font-semibold px-4 py-2 rounded-lg "
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-700 rounded-lg"
          >
            <span>{todo}</span>
            <button
              className="text-red-500 hover:text-red-800 rounded"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

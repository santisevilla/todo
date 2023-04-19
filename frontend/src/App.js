import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAll } from "./utils/handleApi";

function App() {
  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    getAll(setTodo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input type="text" placeholder="Add" />
          <div className="add">Add</div>
        </div>
        <div className="list">
          {Todo.map((item) => (
            <Todo key={item._id} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

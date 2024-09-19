import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  //exisiting todos array me insert krdo id and new todo ke field jo context me bna h
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  //update krna h to you need id and on that particular id you have to update the todo
  //to todos array pr jao prev access krke uska id match krao current id se agr match kia to new todo daal do else rahne do
  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  //agr id ke equal ho to uska true false control kro
  const toggleComplete=(id)=>{
    setTodos((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">

            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}/>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

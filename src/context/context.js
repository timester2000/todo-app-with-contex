import React, { createContext, useState } from 'react'
import uuid from "uuid";

const TodoContext = createContext()
const { Provider } = TodoContext

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'My First Todo',
      completed: false
    },
    {
      id: '2',
      text: 'My Second Todo',
      completed: false
    }
  ])
///// add new task
  const addTodo = (text) => {
    const newItem = {
      id: uuid(),
      text,
      completed: false 
    }
    setTodos(state => [...state, newItem])
  }
/////// edited task
  const edittodo = (id, text) => {
    setTodos(state => todos.map(todo => todo.id === id ? { ...todo, text } : todo))
  }
/////////  complated task
  const completeTodo = index => {
    const newTodos = [...todos]
    if(newTodos[index].completed){
      newTodos[index].completed = false
    }
    else{
      newTodos[index].completed = true;
    }
    setTodos(newTodos);
  };

///////// deleted task  
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => (
      todo.id !== id
    ))
    setTodos(newTodos)
  }
  return (
    <Provider
      value = {{
        deleteTodo,
        completeTodo,
        edittodo,
        addTodo,
        todos,
      }}
    >
      {children}
    </Provider>
  )
}

export { TodoContext, TodoProvider }
import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import {TodoContext} from '../context/context'

const TodoList = () => {
  const todo = useContext(TodoContext)
  const { todos } = todo
  return(
    <ul className = 'list-group my-5'>
      <h3 className = 'text-capitalize text-center'>
        todo list
      </h3>
      {
        todos.map((todo,index) => (
          <TodoItem key={index} todo = {todo} index={index}  />
        ))
      }
    </ul>
  )
}
export default TodoList

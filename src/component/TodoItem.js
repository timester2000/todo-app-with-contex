import React, { useState, useContext } from 'react'
import {TodoContext} from '../context/context'

const TodoItem = ({ todo, index}) => {
  const  {edittodo}  = useContext(TodoContext)
  const  {deleteTodo}  = useContext(TodoContext)
  const  {completeTodo}  = useContext(TodoContext)
  const [value, setValue] = useState(todo.text)
  const [shownedit, setshownedit] = useState(false)
  const showedit = () => {
    if(shownedit === false){
    setshownedit(true)
  }else {
    setshownedit(false)
  }
  }
  return(
    <li className = 'list-group-item text-capitalize d-flex justify-content-between my-2'>
      {
        todo.completed ? (
          <del>
            {todo.text}
          </del>
        ) : (
        <h6>
          {todo.text}
        </h6>
        )
      }
      {
      shownedit ?
        <div>
        <div>
          <input type = 'text' onChange={(e) => setValue(e.target.value)} value = {value}></input>
        </div>
        <button onClick= {() => edittodo(todo.id, value)}>save</button>
        </div>:null}
      <div className = 'todo-icon'>
        <button onClick={() => showedit()}>
          <span className = 'mx-2 text-success'>
            <i className = 'fas fa-pen'/>
          </span>
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <span className = 'mx-2 text-danger'>
            <i className = 'fas fa-trash'/>
          </span>
        </button>
        <button onClick={() => completeTodo(index)}>
          <span className = 'mx-2 text'>
            <i className = 'fas fa-check'/>
          </span>
        </button>
      </div>
    </li>
  )
}

export default TodoItem

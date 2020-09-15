import React, { useState, useContext} from 'react'
import {TodoContext} from '../context/context'

  const TodoInput = () =>  {
    const [value, setValue] = useState('')
    const todo = useContext(TodoContext)
    const  {addTodo}  = useContext(TodoContext)
    const submitHandler = (e) => {
      e.preventDefault()
      // onSubmit(value)
      addTodo(value)
      setValue('')
    }

    return (
      <div className='card card-body my-3'>
        <form onSubmit={submitHandler}>
          <div className = 'input-group'>
            <div className = 'input-group-prepend'>
              <div className = 'input-group-text bg-primary text-white'>
                <i className = 'fas fa-book' style = {{height: '15px'}}/>
              </div>
            </div>
            <input 
              type='text'
              style={{width: '43rem', height: '4rem'}}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button
            className='btn btn-block btn-primary mt-3'
            type='submit'
          >
            add item
          </button>
        </form>
      </div>
    )
}

export default TodoInput
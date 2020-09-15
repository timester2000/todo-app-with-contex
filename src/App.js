import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {TodoProvider} from './context/context'

const  App = () => {  

  return (
    <>
    <TodoProvider>
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-10 mx-auto col-md-8 mt-4'>
            <h3 className = 'text-capitalize text-center'>
              todo input
            </h3>
            <TodoInput />
            <TodoList/>
          </div>
        </div>
      </div>
    </TodoProvider>
    </>
  );
}
export default App;

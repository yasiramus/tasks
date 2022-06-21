import React from 'react'
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList'

const TodoHome = () => {
  return (
          
          <div className="my-4 mx-auto md:mx-auto text-black text-center">
            
            <h2 className=" text-2xl font-extrabold p-2">The Task Planner</h2>
            
                <TodoForm /> 

            {/* { (todos.length > 0 ) ?
            
                ( (todoLoaderStarted) ?
                    
                    (<div>todo loading please wait...</div>) :

                    (todos.map((todo, index) => (<TodoList task={todo} key={index} />)))                   
                
                )

                : (<div>No To_dos Added Yet </div>)
                
            }  */}

          <TodoList/>
           
        </div>
  )
}

export default TodoHome

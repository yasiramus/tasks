import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList'

import { fetchingTodoData } from '../store/thunks/Thunk';

const TodoHome = ({ todoss, loadAllTodos, todoLoaderStarted }) => {
    
    useEffect(() => {

        loadAllTodos()

    }, [loadAllTodos])
    
  return (
          
          <div className="my-4 mx-auto md:mx-auto text-black text-center">
            
            <h2 className="italic text-2xl font-extrabold p-2">The Task Planners</h2>
            
                <TodoForm /> 

            { (todoss.length > 0 ) ?
            
                ( (todoLoaderStarted) ?
                    
                    (<div className='animate__animated animate__fadeOutUp'>todo loading please wait...</div>) :

                    (todoss.map((todo, index) => (<TodoList tasks={todo} key={index} />)))                   
                
                )

                : (<div className='animate__animated animate__backInDown'>No To_dos Added Yet </div>)
                
            } 
           
        </div>
  )
}

const mapStateToProps = state => ({

    todoss: state.loaderAndTodoReducer.todoData,

    todoLoaderStarted: state.loaderAndTodoReducer.loader
    
});

const mapDispatchToProps = dispatch => ({

    loadAllTodos: () => dispatch(fetchingTodoData())

});

export default connect(mapStateToProps, mapDispatchToProps )(TodoHome)


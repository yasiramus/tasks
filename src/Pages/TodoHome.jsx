// importation of useEffect from react 
import { useEffect } from 'react';

// connect importation 
import { connect } from 'react-redux';

// Todo form imporattion from the Component folder 
import TodoForm from '../Components/TodoForm';

// Todo list imporattion from the Component folder 
import TodoList from '../Components/TodoList'

// fetchingTodoData from the thunk folder 
import { fetchingTodoData } from '../store/thunks/Thunk';

// the todoss, loadAllTodos and todoLoaderStarted has been passed as a prop from the state the dispatch which has been set 
const TodoHome = ({ todoss, loadAllTodos, todoLoaderStarted }) => {
    
    // effect will only activate if the values in the loadAllTodos change.
    useEffect(() => {

        loadAllTodos()

    }, [loadAllTodos])
    
    return (
          
        // main container 
        <div className="my-4 mx-auto md:mx-auto text-black text-center">
            
            <h2 className="italic text-2xl font-extrabold p-2">The Task Planners</h2>

                {/* todo form component being used here  */}
                <TodoForm /> 

                {/* checking for the length of the todoss */}
            { (todoss.length > 0 ) ?
            
                // checking for the todoLoaderStarted
                ( (todoLoaderStarted) ?
                    
                    (<div className='animate__animated animate__fadeOutUp'>todo loading please wait...</div>) :

                    (todoss.map((todo, index) => (<TodoList tasks={todo} key={index} />)))                   
                
                )

                : (<div className='animate__animated animate__backInDown bg-pink-50 rounded lg:w-2/5 mx-auto py-10 font-bold drop-shadow px-8'>No To_dos Added Yet </div>)
                
            } 
           
        </div>

    )

}

// mapStateToProps
const mapStateToProps = state => ({

    todoss: state.loaderAndTodoReducer.todoData,

    todoLoaderStarted: state.loaderAndTodoReducer.loader
    
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({

    loadAllTodos: () => dispatch(fetchingTodoData())

});

export default connect(mapStateToProps, mapDispatchToProps )(TodoHome)


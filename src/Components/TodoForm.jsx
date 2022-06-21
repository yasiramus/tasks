// todo form Component

// connect is imported here 
import { connect } from "react-redux";

// use state importation
import { useState } from "react";

// addingNewTodo is being imported here from the thunk
import { addingNewTodo } from "../store/thunks/Thunk";

// modal component importation from the modal folder 
import Modal from "../Modal/Modal";

// todosAdded, filterText which is passed here as prop has been set within the mapStateToProps and mapDispatchToProps
const TodoForm = ({todosAdded, filterText}) => {

    // setting the state for input values
    const [inputValue, setInputValues] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    // converting input value to lower case and triming of space 
    const inputValueToLowerCase = inputValue.toLocaleLowerCase().trim()

    return (
      
        <>
        {/* // general container for the todo form  */}
        <div className="mt-4 mb-6 sm:p-3 p-4 rounded-lg text-center mx-auto sm:mx-auto lg:w-2/5 lg:block sm:w-11/12" id="customshadow">

            <label className="font-bold sm:text-sm lg:text-base">New Task</label>

            <input type="text" className="sm:w-5/12 lg:w-8/12 text-base font-medium p-2 rounded-lg my-0 mx-2.5 outline-none  border-solid border-b-2 border-#ddd-100" autoComplete="off"
                
            value={inputValueToLowerCase} onChange={e => setInputValues(e.target.value)} />
        
            <button className="sm:text-sm lg:text-base p-2 sm:p-1.5 text-white rounded-md" id="btnbgcolor"
                
                onClick={() => {

                    // if the input value is empty
                    if (!inputValueToLowerCase) {
                        
                        return;

                    }
                    else {

                        // comparing the already added text to the one which will be added 
                        // the some is used to prevent duplicate 
                        const dulicateText = filterText.some(todo => todo.text === inputValueToLowerCase);

                        if (dulicateText) {
                            
                            // setting the setIsOpen value to true here
                            setIsOpen(true)
                                
                        } else {

                            // add data 
                            todosAdded(inputValueToLowerCase)

                            // clear input field 
                            setInputValues("")
                                
                        }

                    }

                    
            }}> Add Task </button>
            
        </div>
            
            {/* the modal component is been used here  */}
            <Modal open={isOpen} close={() => { setIsOpen(false) }}>{ inputValueToLowerCase + " has been added already"}</Modal>  
            
        </>    
    )
    
};

// this is what was being used when the state was an array
// const mapStateToProps = state => ({

//     filterText: state.todoReducer

// });

// mapStateToProps accessing only the todo Data which is within the state object 
const mapStateToProps = state => ({

    filterText: state.loaderAndTodoReducer.todoData

});

// mapDispatchToProps variable for dispatching the Adding new todo fun in the thunk 
const mapDispatchToProps = dispatch => ({

    todosAdded: text => dispatch(addingNewTodo(text))

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

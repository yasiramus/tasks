// todo form Component

// connect is imported here 
// import { connect } from "react-redux/es/exports";

// use state importation
import { useState } from "react";

// addingNewTodo is being imported here
// import { addingNewTodo } from "../store/thunks/Thunk";

// const TodoForm = ({todosAdded, filterText}) => {
    const TodoForm = () => {


    // setting the state for input values
    const [inputValue, setInputValues] = useState("");

    // converting input value to lower case and triming of space 
    const inputValueToLowerCase = inputValue.toLocaleLowerCase().trim()

    return (
      
        <div className="mt-4 mb-6 sm:p-3 p-4 rounded-lg text-center mx-auto sm:mx-auto lg:w-2/5 lg:block sm:w-11/12" id="customshadow">
            

            {/* <label className="font-bold space-x-2.5 sm:text-sm lg:text-base">New Task</label> */}
            <label className="font-bold sm:text-sm lg:text-base">New Task</label>


            <input type="text" className="sm:w-5/12 lg:w-2/4 text-base font-medium p-2 rounded-lg my-0 mx-2.5 outline-none  border-solid border-b-2 border-#ddd-100" autoComplete="off"
                
            value={inputValueToLowerCase} onChange={e => setInputValues(e.target.value)} />
        
            <button className="sm:text-sm lg:text-base bg-pink-700 p-2 sm:p-1.5 text-white rounded-md"
                
                onClick={() => {

                        // if the input value is empty it should return null
                        if (!inputValueToLowerCase) {
                        
                            return null;

                        }
                        // else {

                        //     // comparing the already added text to the one which will be added 
                        //     // the some is used to prevent duplicate 
                        //     const dulicateText = filterText.some(todo => todo.text === inputValueToLowerCase);

                        //     if (dulicateText) {
                                
                        //         alert(inputValueToLowerCase + ' has been added already')
                                
                        //     } else {

                        //         todosAdded(inputValueToLowerCase)

                        //         setInputValues("")
                                
                        //     }


                        // };
                        
                        // todosAdded(inputValueToLowerCase)

                        //         setInputValues("")

                    
                }}> Add Task </button>
            

        </div>

   
    )
    
};

// const mapStateToProps = state => ({

//     filterText: state.todoReducer

// });

// const mapStateToProps = state => ({

//     filterText: state.loaderAndTodoReducer.todoData

// });

// const mapDispatchToProps = dispatch => ({

//     todosAdded: text => dispatch(addingNewTodo(text))

// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
export default TodoForm;

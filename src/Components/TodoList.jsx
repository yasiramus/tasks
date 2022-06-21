// todo list component
import { connect } from "react-redux";

// importation of the deletingTodoData, updateTodoStatus fun from the thunk 
import { deletingTodoData, updateTodoStatus } from "../store/thunks/Thunk";

// the tasks has been passed as a prop from the todo home component 
const TodoList = ({ tasks, todoDeleted, statusUpdate }) => {

    return (

        <div className=" mt-0  mb-3 py-4 px-4 rounded-lg flex justify-between items-center md:mx-auto md:max-w-2xl animate__animated animate__fadeInTopRight" id="customshadow"
            
        style = {
            
            tasks.isCompleted === true ?

            // changing of bankground color and text 

                { backgroundColor: '#af066e', color: '#fff' }

                : { backgroundColor: '#fff', color: '#000' }
            }
            >

            <h3 className="font-base font-semibold"
                
                style={
                    
                    tasks.isCompleted === true ?

                        // adding a line trhrough the text when is completed is true                     
                        { textDecoration: "line-through" }

                        : { textDecoration: "none" }
                    
            }>{tasks.text}</h3>

            {/* this div fior all the 2 btn  */}
            <div className="flex gap-x-4">

                {/* update btn  */}
                {
                    tasks.isCompleted === true ? ( 

                    <button className="text-center font-sm text-white rounded-md py-1 px-2 sm:p-1.5 bg-white text-black"  onClick={() => (statusUpdate(tasks.id))}>Done</button>) :

                    (<button className="text-center font-sm text-white rounded-md py-1 px-2 sm:p-1.5" id="btnbgcolor" onClick={() => (statusUpdate(tasks.id))}>Pending</button>)
                    
                }

                {/* delete btn  */}
                <button className=" text-white font-sm rounded-md py-1 px-2 sm:p-1.5" id="btnbgcolo" onClick={() => (todoDeleted(tasks.id))} >Delete</button>

            </div>

        </div>
        
    )
};

// mapDispatchToProps variable 
const mapDispatchToProps = dispatch => ({

    // updateTodoStatus dispatch 
    statusUpdate: status => dispatch(updateTodoStatus(status)),

    // deletingTodoData dispatch 
    todoDeleted: todoId => dispatch(deletingTodoData(todoId))

});

export default connect(null, mapDispatchToProps) (TodoList);
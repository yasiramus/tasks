// todo list component
import { connect } from "react-redux";

import { deletingTodoData, updateTodoStatus } from "../store/thunks/Thunk";

// const TodoList = ({ tasks, todoDeleted, statusUpdate }) => {
    const TodoList = ({tasks,}) => {
    console.log(tasks)
    return (

        <div  className=" my-0 py-4 px-4 rounded-lg flex justify-between items-center md:mx-auto md:max-w-2xl animate__animated animate__fadeInTopRight" id="customshadow">

            <h3 className="font-base font-semibold">{tasks.text}</h3>

            <div className="flex gap-x-4">

                {/* {
                    tasks.isCompleted === true ? ( 

                    <button className="text-center font-sm bg-pink-700 text-white rounded-md py-1 px-2 sm:p-1.5" onClick={() => (statusUpdate(tasks.id))}>Done</button>):

                    (<button className="text-center font-sm bg-pink-700 text-white rounded-md py-1 px-2 sm:p-1.5" onClick={() => (statusUpdate(tasks.id))}>Pending</button>)
                    
                } */}

                {/* <button className="bg-red-700 text-black font-sm rounded-md py-1 px-2 sm:p-1.5" onClick={() => (todoDeleted(tasks.id))} >Delete</button> */}

            </div>

        </div>
        
    )
};

const mapDispatchToProps = dispatch => ({

    statusUpdate: status => dispatch(updateTodoStatus(status)),

    todoDeleted: todoId => dispatch(deletingTodoData(todoId))

});

export default connect(null, mapDispatchToProps) (TodoList);
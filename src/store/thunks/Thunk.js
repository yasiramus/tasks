// importation of action creators from the acton folder file 
import { addTodo, fetchTodo, completeTodo, deleteTodo } from "../actions/Actions";

// axios importation for creud operations 
import axios from "axios";

// importation of action creators from the acton folder file 
import { loadTodoRequest, loadTodoSuccess, loadTodoFailure} from "../actions/Actions";

// adding a new todo fun 
export const addingNewTodo = textt =>

    async dispatch => {

        try {
            
            // load request dispatch 
            dispatch(loadTodoRequest())

            const newTodo = await axios.post(`http://localhost:5000/todoApi/`, { text: textt })
        
            const { data } = newTodo;

            // dispatching the data which the user is adding 
            dispatch(addTodo(data))

            // success dispatch 
            dispatch(loadTodoSuccess())
            
        } catch (error) {
        
            console.log(error.response)

            // error dispatch 
            dispatch(loadTodoFailure())

        }
        
    };


// fetching todos request 
export const fetchingTodoData = () =>

    async dispatch => {

        try {
        
            // const getTodo = await axios.get(`http://localhost:5000/todoApi/`);

            const getTodo = await axios.get(`http://localhost:5000/todo/`);

            const { data } = getTodo;

            // data dispatch 
            dispatch(fetchTodo(data))
           
        } catch (error) {
        
            console.log(error.response)

        }
        
    }; 


// complete todo request 
export const updateTodoStatus = ID =>

    async dispatch => {

        try {
        
            const updateTodo = await axios.put(`http://localhost:5000/todoApi/${ID}`);
        
            const { data } = updateTodo;

            // dispatch complete todo data 
            dispatch(completeTodo(data))
           
        } catch (error) {
        
            console.log(error.response)

        }
        
    };   

    
// delete todo request 
export const deletingTodoData = ID =>

    async dispatch => {

        try {
        
            const todoDeleted = await axios.delete(`http://localhost:5000/todoApi/${ID}`);
        
            const { data } = todoDeleted;

            // delete dispatch data 
            dispatch(deleteTodo(data))
           
        } catch (error) {
        
            console.log(error.response)

        }
        
    };     
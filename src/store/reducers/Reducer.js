// importation of action types from the actio folder 
import { ADD_TO_DO, FETCH_TO_DO, COMPLETE_TODO, DELETE_TODO } from "../actions/Actions";

// importation of action types from the actio folder 
import { LOAD_TO_DO_REQUEST, LOAD_TO_DO_SUCCESS, LOAD_TO_DO_FAILURE } from "../actions/Actions";

// here the state was an array
// export const todoReducer = (state = [], action) => {
    
//     switch (action.type) {

//         // add todo case
//         case ADD_TO_DO: {
            
//             return [...state, action.payload.ID].reverse();

//         }

//             // fetch todo case
//         case FETCH_TO_DO: {

//             return action.payload.data.reverse();

//         }
        
//         // complete todo case
//         case COMPLETE_TODO: {

//             return state.map(status => {

//                 return (

//                     // comparing ids
//                     (status.id === action.payload.statusId.id) ?

//                         // if id matches change isComplete to true and vice versa
//                     { ...status, isCompleted: !status.isCompleted } :

//                         // else return the default
//                     { ...status }
                
//                 )
                
//             })

//         }
           
//             // delete todo case
//         case DELETE_TODO: {
            
//             return state.filter(todo => todo.id !== action.payload.deleteTodoId.id)

//         }
                
//         default:

//         // return the default state
//         return state;
        
//     }

// }

// loader reducer
// export const todoloader = (loader = false, action) => {

//     switch (action.type) {
        
//         case LOAD_TO_DO_REQUEST: {
//             // console.log(loader)

//             return true
//         }
            
//         case LOAD_TO_DO_SUCCESS: {
//             // console.log(loader,'success')

//             return false
//         }
        
//         case LOAD_TO_DO_FAILURE: {
//             // console.log(loader,'failure')
//             return false
//         }
    
//         default:
        
//             return loader;
        
//     }

// };


// combining the loader reducer into the todo reducer joining them to be one reducer instead of two reducer
// now the state here has been change to an object 
export const loaderAndTodoReducer = (stateObject = { todoData:[], loader:false }, action) => {
    
    switch (action.type) {

        //add todo case 
        case ADD_TO_DO: {

            return {

                ...stateObject,

                todoData: [...stateObject.todoData, action.payload.ID].reverse()

            }

        }

        // fetch todo case 
        case FETCH_TO_DO: {

            return {

                ...stateObject,

                // loader: false,
                
                todoData: action.payload.data.reverse()
                
            }

        }
         
        // LOAD_TO_DO_REQUEST case 
        case LOAD_TO_DO_REQUEST: {
            
            return {

                ...stateObject,

                // changing the value from falue to true 
                 loader: true
            }        
        }

        // LOAD_TO_DO_SUCCESS case 
        case LOAD_TO_DO_SUCCESS: {

            return {

                ...stateObject,

                // changing the loader value back to false after it been changed to true 
                loader: false

            }

        }
        
        //LOAD_TO_DO_FAILURE
        case LOAD_TO_DO_FAILURE: {

            return {

                ...stateObject,

                loader: false
            }
            
        }
        
        // complete todo case
        case COMPLETE_TODO: {

            return {

                ...stateObject,

                todoData: stateObject.todoData.map(status => {
                    
                    return (
    
                        // comparing ids 
                        (status.id === action.payload.statusId.id) ?
    
                            // if id matches change isComplete to true and vice versa 
                            { ...status, isCompleted: !status.isCompleted } :
    
                            // else return the default 
                            { ...status }
                    
                    )
                    
                })
    
            }
           
        }
           
        // delete todo case 
        case DELETE_TODO: {

            return {

                ...stateObject,

                todoData: stateObject.todoData.filter(todo => todo.id !== action.payload.deleteTodoId.id)
                
            }       

        }
                
        default:

            // return the default state 
            return stateObject;
        
    }

}; 
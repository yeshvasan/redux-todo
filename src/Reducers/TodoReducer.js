import {AddTodo, RemoveTodo, ToggleTodo} from '../Actions/ActionTypes';

const INITIAL_DATA =[]

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case AddTodo:
            return [
                ...state,{
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
            case ToggleTodo:
                return state.map(todo=> (todo.id===action.id)?{...todo, completed:!todo.completed}:todo)
                case RemoveTodo:
                    const numIndex = parseInt(action.id)
                    return state.filter(todo=> todo.id !== numIndex);
                
                    default:
                        return state 
    }

}

export default TodoReducer;
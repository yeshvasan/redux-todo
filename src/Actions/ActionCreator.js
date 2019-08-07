import {AddTodo, RemoveTodo, ToggleTodo, SetVisibilityFilter, EditTodo} from './ActionTypes';

let TodoId = 1

export const addTodo = text => ({
    type:AddTodo,
    id:TodoId++,
    text
})

export const deleteTodo = (id) => ({
    type:RemoveTodo,
    id:id
})

export const toggleTodo = (id) => ({
    type:ToggleTodo,
    id:id
})

export const setVisibilityFilter = filter => ({
    type:SetVisibilityFilter,
    filter
})


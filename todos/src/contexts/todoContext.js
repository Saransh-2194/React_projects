import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (title) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, title) => {},
})

export const useTodo = () => {
    return useContext(TodoContext); 
}

export const TodoProvider = TodoContext.Provider;
import { useState, useReducer } from 'react'
import { ACTION_TYPES } from './TodoActionTypes'
import { useDispatch, useSelector } from 'react-redux'
import { INITIAL_STATE, todoReducer } from './TodoReducer'
import { addTodo, removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todo)
    // console.log(todo)
    // const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE)
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(name))
        // const newTodo = {
        //     id: Date.now(),
        //     name,
        //     completed: false
        // }
        // dispatch({ type: ACTION_TYPES.ADD_TODO, payload: newTodo })
        setName('')
    }

    const TodoTitle = ({ todo, dispatch }) => {
        return (
            <>
                <p style={{ color: todo.completed ? "green" : "black" }}>{todo.name}</p>
                <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                <button type="button" onClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_TODO, payload: todo.id })}>toggle</button>
                {/* <button type="button" onClick={() => dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: todo.id })}>delete</button>
                <button type="button" onClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_TODO, payload: todo.id })}>toggle</button> */}
            </>
        )
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" id="name" />
                <button type="submit">add todo</button>
                {/* {state.todos?.map((todo) => {
                    return (
                        <TodoTitle key={todo.id} todo={todo} dispatch={dispatch} />
                    )
                })} */}
                {todo.todos?.map((todo) => {
                    return (
                        <TodoTitle key={todo.id} todo={todo} dispatch={dispatch} />
                    )
                })}
            </form>

        </>
    )
}

export default Todo


import { ACTION_TYPES } from './TodoActionTypes'

export const INITIAL_STATE = {
  todos: [],
}

export const todoReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case ACTION_TYPES.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed }
          }
          return todo
        }),
      }

    default:
      return state
  }
}

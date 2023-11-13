import { ACTION_TYPES } from './postActionTypes'

export const INITIAL_STATE = {
  loading: false,
  posts: [],
  error: false,
}

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case ACTION_TYPES.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      }
    default:
      return state
  }
}

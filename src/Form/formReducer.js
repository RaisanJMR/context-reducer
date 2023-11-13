import { FORM_ACTIONS } from './formActionTypes'

export const INITIAL_STATE = {
  title: '',
  desc: '',
  price: 0,
  category: '',
  tags: [],
  images: {
    sm: '',
    md: '',
    lg: '',
  },
  quantity: 0,
  loading: false,
  error: null,
  userData: null,
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case FORM_ACTIONS.GET_STATE:
      return {
        ...state,
      }
    case FORM_ACTIONS.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FORM_ACTIONS.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      }
    case FORM_ACTIONS.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

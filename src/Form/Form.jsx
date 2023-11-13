import { useReducer } from 'react'
import { INITIAL_STATE, formReducer } from './formReducer'
import { FORM_ACTIONS } from './formActionTypes'

const Form = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)
    const { loading } = state
    const handleChange = (e) => {
        dispatch({ type: FORM_ACTIONS.CHANGE_INPUT, payload: { name: e.target.name, value: e.target.value } })
    }

    const handleClick = () => {
        dispatch({ type: FORM_ACTIONS.GET_STATE })
    }
    
    const handlePost = async () => {
        dispatch({ type: FORM_ACTIONS.CREATE_USER_REQUEST })
        try {
            const res = await fetch("https://reqres.in/api/users", {
                method: 'POST',
                body: JSON.stringify({
                    name: "cathy",
                    job: "pacefic"
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const data = await res.json()
            dispatch({ type: FORM_ACTIONS.CREATE_USER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: FORM_ACTIONS.CREATE_USER_FAILURE, payload: error })
        }
    }

    return (
        <div>
            <input type="text" name="title" id="title" onChange={handleChange} placeholder='title' />
            <input type="text" name="desc" id="description" onChange={handleChange} placeholder='description' />
            <input type="text" name="price" id="price" onChange={handleChange} placeholder='price' />
            <p>Category:</p>
            {loading && <h1>Loading</h1>}
            <select onChange={handleChange} name="category">
                <option value="sneakers">Sneakers</option>
                <option value="tshirts">T-shirts</option>
                <option value="jeans">Jeans</option>
            </select>
            <button type='button' onClick={handleClick}>get state</button>
            <button type='button' onClick={handlePost}>{loading ? "creating..." : "create user"}</button>
        </div>
    )
}

export default Form
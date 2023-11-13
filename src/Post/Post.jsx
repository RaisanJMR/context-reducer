import { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from './postReducer'
import { ACTION_TYPES } from './postActionTypes'

const Post = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)

    const fetchPost = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            if (!res.ok) {
                throw new Error("Network response not ok!")
            }
            return res.json()
        } catch (error) {
            throw error
        }
    }

    // FETCH DATA
    const handleFetch = async () => {
        dispatch({ type: ACTION_TYPES.FETCH_START })
        try {
            const data = await fetchPost()
            dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: ACTION_TYPES.FETCH_ERROR })
        }
    }

    // POST TITLE COMPONENT
    const PostTitle = ({ post }) => {
        return (
            <p onClick={() => dispatch({ type: ACTION_TYPES.DELETE_POST, payload: post.id })}>{post.title}</p>
        )
    }

    // ERROR COMPONENT
    const Error = ({ message }) => {
        return <span>{message}</span>
    }

    return (
        <div>
            <button onClick={handleFetch}>
                {state.loading ? "Wait..." : "Fetch the post"}
            </button>
            <div>{state.posts?.map((post) => {
                return <PostTitle key={post.id} post={post} dispatch={dispatch} />

            })}</div>
            <p>{state.error && <Error message="somenthing went wrong!!" />}</p>
        </div>
    )
}

export default Post
import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
// import Form from './Form/Form'
import Post from './Post/Post'
import Todo from './Todo/Todo'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <Post /> */}
        <Todo />
        {/* <Form /> */}
      </div>
    </Provider>
  )
}

export default App

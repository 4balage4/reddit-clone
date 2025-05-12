import './App.css'
import Button from './components/Button'
import { increment, decrement } from './features/counterSlice'
import {useSelector, useDispatch} from 'react-redux'

// function getData() {
//   fetch('https://www.reddit.com/r/popular.json')
//     .then(response => response.json())
//     .then(data => console.log(data))

// }









function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='app'>
    <h1>{count}</h1>
      <Button onClick={() => dispatch(increment())}>+</Button>

      <Button onClick={() => dispatch(decrement())}>-</Button>
      </div>

  )
}

export default App

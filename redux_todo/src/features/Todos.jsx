import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, deleteTodo } from './todoSlice'

const Todos = () => {
  const state = useSelector(state => state.todo)
  const dispatch = useDispatch()
  console.log(state);
  return (
    <div>
      <ul>
        {state && state.map((e) => (
          <li key={e.id}>
            <h1>{e.title}</h1>
            {e.isComplete ? <h4>Done</h4> : <h4>not done</h4>}
            <button onClick={() => dispatch(deleteTodo(e.id))}>Delete</button>
            <button onClick={() => dispatch(completeTodo(e.id))}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Todos
import React, { useRef } from 'react'
import { useDispatch} from 'react-redux'
import { addTodo, removeAll } from './todoSlice'

const Input = () => {
    const todoRef = useRef()
    const dispatch = useDispatch()

    const addTask=(e)=>{
        e.preventDefault();
        dispatch(addTodo({
            title:todoRef.current.value,
            id:Date.now(),
            isCompeted:false 

        }))
        todoRef.current.value="";

    }
   
    return (
        <>
            <div>
                <form onSubmit={(e)=>dispatch(addTask(e))}>
                <input type="text" ref={todoRef} />
                <button>Add</button>
                <button onClick={()=>dispatch(removeAll())}>Remove All</button>
                </form>
                
            </div>
        </>
    )
}

export default Input
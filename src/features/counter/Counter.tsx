import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { RootState } from '../../app/store'

const Counter = () => {
  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
import React from 'react';

import { useDispatch,useSelector } from 'react-redux'
import { incNum , decNum ,reset} from './Actions/index'
export default function App() {
  const myfirstState = useSelector((state)=>state.incDec);
  const dispatch = useDispatch();
    
  return (
    <div className='container my-3'>
      <h1>Counter Application in React And Redux</h1>
      <div className="row">
        <div className="col-md-4 mt-5">
              <button className='btn btn-primary mr-2' onClick={e => dispatch(decNum())}>-</button>
                <input type="text" value={myfirstState}  />
              <button className='btn btn-primary ml-2' onClick={e => dispatch(incNum())}>+</button> <br />
              <button className='btn btn-danger mt-2' onClick={e => dispatch(reset())}>Reset</button>

        </div>
      </div>
    </div>
  )
}

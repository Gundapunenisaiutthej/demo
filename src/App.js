import React from 'react'
import {connect} from 'react-redux';
import { IncAction } from './actions';
import { DecAction } from './actions';


export const App = ({local_varaiable,IncAction,DecAction}) => {
  return (
    <div>
    <center>
      <h1>{local_varaiable}</h1> <br />
      <button onClick={() => IncAction(1)}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
    </center>
    </div>
  )
}
const mapStateToProps = state=> ({
  local_varaiable : state
})
export default connect(mapStateToProps,{IncAction, DecAction}) (App);
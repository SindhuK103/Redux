import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add,sub,accessRTS} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const accessRights = useSelector(state => state.accessRights);
  const dispath = useDispatch();


  return (
    <div className="Container">
    <h1>Totalvalue: {counter}</h1>
    <button onClick={() => dispath(add(3))}> Addition </button>{' '}
    <button onClick={() => dispath(sub(2))}> Subtraction </button>
    {accessRights ? <div><h3> Processing </h3>{' '} <button onClick={() => dispath(accessRTS(false))}>Disable</button> </div>
     : <div> <h3> Not processing </h3>{' '} <button onClick={() => dispath(accessRTS(true))}>Enable</button> </div>}
  
    </div>

  );

}

export default App;

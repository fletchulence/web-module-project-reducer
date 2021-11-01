import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

//! import actions
import { addOne, applyNumber, changeOperation, clearAll, setMem, applyMem, clearMem } from './actions'

function App() {
  //? setting state as dispatch
  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log(state)

  //setting event handlers
  const handleApplyNum = (e) =>{
    console.log(e)
    dispatch(applyNumber(e))
  }

  const handleChangeOperation = (e) =>{
    dispatch(changeOperation(e))
  }

  const handleClear = () =>{
    dispatch(clearAll())
  }

  const handleSetMem =(e)=>{
    dispatch(setMem(e))
  }

  const handleApplyMem =(e)=>{
    dispatch(applyMem(e))
  }

  const handleClearMem =(e)=>{
    dispatch(clearMem(e))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick={()=>handleSetMem()} value={"M+"}/>
              <CalcButton onClick={()=>handleApplyMem()} value={"MR"}/>
              <CalcButton onClick={()=>handleClearMem()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleApplyNum(1)} value={1}/>
              <CalcButton onClick={()=>handleApplyNum(2)} value={2}/>
              <CalcButton onClick={()=>handleApplyNum(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleApplyNum(4)} value={4}/>
              <CalcButton onClick={()=>handleApplyNum(5)} value={5}/>
              <CalcButton onClick={()=>handleApplyNum(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleApplyNum(7)} value={7}/>
              <CalcButton onClick={()=>handleApplyNum(8)} value={8}/>
              <CalcButton onClick={()=>handleApplyNum(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleChangeOperation('+')} value={"+"}/>
              <CalcButton onClick={()=>handleChangeOperation('*')} value={"*"}/>
              <CalcButton onClick={()=>handleChangeOperation('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={()=>handleClear()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

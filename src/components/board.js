import {Square} from './square'
import {useState} from 'react';
function Board(){
    const initialValue=[
        null,null,null,
        null,null,null,
        null,null,null
    ]
    const [values,setValue]=useState(initialValue);
    const status = 'Next player: X';
    function handleClick(i){
        let valuesCopy=values.slice();
        valuesCopy[i]='x';
        setValue(valuesCopy)
    }
    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={values[0]} onClick={()=>{
                handleClick(0)
            }}/>
            <Square value={values[1]}/>
            <Square value={values[2]}/>
        </div>
        <div className="board-row">
            <Square value={values[3]}/>
            <Square value={values[4]}/>
            <Square value={values[5]}/>
            
          
        </div>
        <div className="board-row">
            <Square value={values[6]}/>
            <Square value={values[7]}/>
            <Square value={values[8]}/>
          
        </div>
      </div>
    )
}
export {Board}
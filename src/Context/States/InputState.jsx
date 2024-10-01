import React,{useState} from 'react';
import InputContext from '../InputContext';
export const InputState = (props) => {
    const [inputState, setInputState] = useState({
       
    });
  return (
    <>
    <InputContext.Provider value={{inputState,setInputState}}>
    {props.children}
    </InputContext.Provider>
    </>
  )
}


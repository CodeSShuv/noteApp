import React,{useState} from 'react'
import BankContext from '../BankContext'
const BankState = (props) => {
    const [bankState,setBankState] = useState({
        isAddingANote: false,
        isEditingNote:false,
        editingKey:"",
        key:"",
        inputState:{heading: "",
        description: "",
        category: "All"},
        currentCategory:{
          all:true,
          personal:false,
          work:false
        }

    })
  return (
    <BankContext.Provider value={{bankState,setBankState}}>
        {props.children}
    </BankContext.Provider>
  )
}

export default BankState
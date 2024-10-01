import React, { useContext } from 'react';
import BankContext from '../Context/BankContext';
import './Css/Navbar.css'
const Navbar = () => {
  //This context includes all the states of input and state of editing or adding a note
  const bankStates = useContext(BankContext)

  const handelAddANote = () => {
    //This function is for add anote btn 
    // Here it changes the state of adding a note or editing a note
    if (bankStates.bankState.isAddingANote) {
      bankStates.setBankState({
        ...bankStates.bankState, isAddingANote: bankStates.bankState.isAddingANote ? false : true,

      });
    }

    else if (bankStates.bankState.isEditingNote) {
      bankStates.setBankState({
        ...bankStates.bankState, isEditingNote: bankStates.bankState.isEditingNote ? false : true,

      });
    } else {

      bankStates.setBankState({
        ...bankStates.bankState, isAddingANote: bankStates.bankState.isAddingANote ? false : true,
      });
    }


  }
  const changeCategory = (e) => {

    //This is to display the notes according to the category
    if (e.target.dataset.value === "Personal") {
      bankStates.setBankState({
        ...bankStates.bankState,
        currentCategory: {
          ...bankStates.bankState,
          personal:true
        }
      })
    } else if (e.target.dataset.value === "All") {
      bankStates.setBankState({
        ...bankStates.bankState,
        currentCategory: {
          ...bankStates.bankState,
          all:true
        }
      })
    } else if (e.target.dataset.value === "Work") {
      
      bankStates.setBankState({
        ...bankStates.bankState,
        currentCategory: {
          ...bankStates.bankState,
          work: true
        }
      })
    }

  }
  return (
    <nav className='Navbar' id='dockNav'>
      <ul>
        {// used  anchor tag as btn for classifying the note's category
        }
        <li ><button className="nav-links" onClick={changeCategory} data-value = {"All"}>All</button></li>
        <li ><button className="nav-links" onClick={changeCategory} data-value = {"Personal"}>Personal</button></li>
        <li onClick={changeCategory}><button className="nav-links" onClick={changeCategory} data-value = {"Work"}>Work</button></li>
        <li ><button className='btn nav-btn' onClick={handelAddANote}>{bankStates.bankState.isAddingANote || bankStates.bankState.isEditingNote ? "Close" : "Add a Note"} </button></li>
      </ul>
    </nav>
  )
}

export default Navbar
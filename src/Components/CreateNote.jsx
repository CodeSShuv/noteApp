import React, { useContext, useState } from 'react'
import BankContext from '../Context/BankContext';
import "./Css/CreateNote.css"
import NoteContext from '../Context/NoteContext';
import modalCreator from '../Extra Js/modal';
// import bankState from '../Context/bankState';

const CreateNote = () => {
    const bankState = useContext(BankContext);
    const notesState = useContext(NoteContext);


    //  for the submission of the form 
    // the object modal was created by using modal creator function
    const formSubmit = (e) => {
        e.preventDefault();
        if (bankState.bankState.isAddingANote) {
            const createdModal = modalCreator(bankState.bankState.inputState.heading, bankState.bankState.inputState.description, bankState.bankState.inputState.category);
            console.log(createdModal);
            notesState.setNotes([...notesState.notes, createdModal]);
        }

        else if (bankState.bankState.isEditingNote) {
            const updatedNotes = notesState.notes.map((note) => {
                if (bankState.bankState.editingKey === note.key) {
                    return {
                        ...note,
                        heading: bankState.bankState.inputState.heading,
                        description: bankState.bankState.inputState.description,
                        category: bankState.bankState.inputState.category
                    };
                }



                return note;
            });

            notesState.setNotes(updatedNotes);

        }
        bankState.setBankState({
            ...bankState.bankState, isEditingNote: false, inputState: {
                heading: "",
                description: "",
                category: "All"
            }
        });
    }
    //This is suppossed to change the inputstate of the notes
    const inputChange = (e) => {
        const value = e.target.value;

        switch (e.target.id) {
            case "heading":
                bankState.setBankState({ ...bankState.bankState, inputState: { ...bankState.bankState.inputState, heading: value } });

                break
            case "description":
                bankState.setBankState({ ...bankState.bankState, inputState: { ...bankState.bankState.inputState, description: value } });
                break
            case "category":
                bankState.setBankState({ ...bankState.bankState, inputState: { ...bankState.bankState.inputState, category: value } });
                break
        }
    }

    return (
        <div className='createNote' style={{ display: `${bankState.bankState.isAddingANote || bankState.bankState.isEditingNote ? "flex" : "none"}` }}>
            <form className='form-area' onSubmit={formSubmit}>
                <div className="input-holder" id="heading-Input">
                    <input className='inputs' onChange={inputChange} type="text" id='heading' value={bankState.bankState.inputState.heading} required />
                    <label htmlFor="heading">Heading</label>
                </div>
                <div className='input-holder'>
                    <label htmlFor="category" id='category-label'>Category:</label>

                    <select id="category" value={bankState.bankState.inputState.category} onChange={inputChange}>
                        <option value="All">All</option>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>

                    </select>
                </div>
                <div className="input-holder" id='description-Input'>
                    <textarea className='inputs' id='description' rows="5" cols="33" required onChange={inputChange} value={bankState.bankState.inputState.description}></textarea>
                    <label htmlFor="description">Description</label>
                </div>
                <div className='input-holder' id='btn-holder'>
                    <button className='btn' id='note-submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateNote;
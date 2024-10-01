import React, { useContext } from 'react'
import "./Css/card.css"
import NoteContext from '../Context/NoteContext';
import BankContext from '../Context/BankContext';

const Card = ({ title = "untitled", description = 'Blank', category, id }) => {
    const notes = useContext(NoteContext);
    const bankState = useContext(BankContext);


    const removeTheNote = (element) => {
        const newNoteArray = notes.notes.filter((note) => {

            if (note.key != element.target.dataset.key) {
                return note;
            }
        });
        notes.setNotes(newNoteArray);
    }
    const editTheNote = (element) => {
        notes.notes.map((note) => {
            if (element.target.dataset.key === note.key) {
                bankState.setBankState({
                    ...bankState.bankState, isEditingNote: true,
                    editingKey: note.key,
                    inputState: {
                        heading: note.heading,
                        description: note.description,
                        category: note.category
                    }
                })
            }
        })


    }



    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{title.length > 30 ? title.slice(0, 30).concat("...") : title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category.concat("*")}</h6>
                <p className="card-text">{description.length > 80 ? description.slice(0, 80).concat("...") : description}</p>
            </div>
            <div className="mani-option-container">
                <div className="btn-container">


                    <button className="card-link mani-option" title="Delete" data-key={id} onClick={removeTheNote} >
                        <img src="./thick-cross-mark.png" data-key={id} /></button>
                    <button className="card-link mani-option" data-key={id} title="Update" onClick={editTheNote}>
                        <img src="./edit.png" data-key={id} /></button>
                </div>
            </div>
            <div className="headingOnly">{title}</div>
        </div>
    )
}

export default Card
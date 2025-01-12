import React, { useState } from 'react'
import NoteContext from '../NoteContext'
const NoteState = (props) => {
    const [notes, setNotes] = useState([
       

    ])
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
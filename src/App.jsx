import React, { useContext, useEffect } from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import CreateNote from './Components/CreateNote'
import Card from './Components/Card'
import NoteContext from './Context/NoteContext'
import BankContext from './Context/BankContext'

const App = () => {
  const notes = useContext(NoteContext);
  useEffect(() => {

  }, []);
  const bankState = useContext(BankContext)
  return (



    <div className='App'>
      <Navbar />
      <div className='notes-container'>
        {
          notes.notes.length == 0 ? "No notes available" : notes.notes.map((note) => {
            if (bankState.bankState.currentCategory.all) {
              return <div className='cols'><Card id={note.key} title={note.heading} description={note.description} category={note.category} /></div>
            } else if (bankState.bankState.currentCategory.personal) {
              if (note.category === "Personal") {
                return <div className='cols'><Card id={note.key} title={note.heading} description={note.description} category={note.category} /></div>
              }
            } else if (bankState.bankState.currentCategory.work) {
              if (note.category === "Work") {
                return <div className='cols'><Card id={note.key} title={note.heading} description={note.description} category={note.category} /></div>
              }
            }

          })
        }
      </div>
      <CreateNote />
    </div>




  )
}

export default App
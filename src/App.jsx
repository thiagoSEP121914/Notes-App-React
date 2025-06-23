import './App.css'
import Header from "./components/Header.jsx"
import Card from './components/Card.jsx'
import InputBox from "./components/InputBox.jsx"
import { useState } from 'react'

function App() {

  const[listOfNote, setListOfNote] = useState([]); 

  function addNote(note) {
      setListOfNote((previous) =>[...previous, note])
      console.log(note);
  }

  function deleteCard(id) {
     setListOfNote((previous) => {
        return previous.filter((note, index) => {
          return index != id;
        });
     })
  }

  return (
    <>
    <div className='app-container'>
        <header>
          <Header/>
        </header>
         <main className='input'>
            <InputBox
              onAdd = {addNote}
            />
         </main>
         <section className='h-container'>
            {listOfNote.map((note, index) => {
                return (
                  <Card
                    key = {index}
                    id = {index}
                    title = {note.title}
                    content = {note.content}
                    onDelete = {deleteCard}
                  />
                )
            })}
         </section>
         
    </div>
    </>
  )
}

export default App

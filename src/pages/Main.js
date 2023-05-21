import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Main() 
{
   const [notes, setNotes] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      fetch('http://127.0.0.1:8000/')
         .then((response) => response.json())
         .then((data) => setNotes(data))
         .catch((err) => console.log(err.message));
   }, []);

   function deleteNote(id) {
      fetch(`http://127.0.0.1:8000/note/delete/${id}/`, {
            method: 'DELETE'
      })
       .then(response => {
         if (response.status === 200) {
            setNotes(
                  notes.filter((notes) => {
                     return notes.id !== id;
                  })
               )
         } 
         else {
            return;
         }
      })
   }

   var myNotes = notes.map(note => {
      return (
         <div key={note.id}  className='note'>
            <h2>{note.id}</h2>
            <p>{note.content}</p>
            <button onClick={() =>  navigate(`/update/${note.id}/`)}>Update</button>
            <button onClick={() =>  deleteNote(note.id)}>Delete</button>
         </div>
      )
   })

    return (
        <div>
            {myNotes}
            <button onClick={() => navigate('/add')}>Add note</button>
        </div>
        
    )
}
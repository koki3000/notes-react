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

   function toAdd() {
      return navigate('/add')
   }
   
   var myNotes = notes.map(note => {
      return (
      <div key={note.id}>
         <h1>{note.id}</h1>
         <div>{note.content}</div>
      </div>        
      )
   })

    return (
        <div>
            {myNotes}
            <button onClick={toAdd}>Add note</button>
        </div>
        
    )
}
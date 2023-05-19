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

   var myNotes = notes.map(note => {
      return (
         <div key={note.id}>
            <h1>{note.id}</h1>
            <div>{note.content}</div>
            <button onClick={() =>  navigate(`/update/${note.id}/`)}>Update</button>
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
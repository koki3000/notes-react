import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';


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
         <div key={note.id}  className='note'>
            <div onClick={() => navigate(`/note/${note.id}/`)}>
               <h2>{note.title}</h2>
               <p>{note.content}</p>
            </div>            
            <button onClick={() =>  navigate(`/update/${note.id}/`)}>Update</button>
            <DeleteButton 
            id={note.id}
            allNotes={notes}
            removeNote={setNotes}
            navigation={() => navigate('/')}/>
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
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import { ReactComponent as Add } from '../assets/add.svg'


export default function Main() 
{
   const [notes, setNotes] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      fetch('https://notes-production-a8a8.up.railway.app/api/')
         .then((response) => response.json())
         .then((data) => setNotes(data))
         .catch((err) => console.log(err.message));

   }, []);

   var myNotes = notes.map(note => {
      return (
         <div key={note.id}  className='note'>
            <div className='single-note' onClick={() => navigate(`/note/${note.id}/`)}>
               <h2>{note.title}</h2>
               <p>{note.content}</p>
            </div>
            <div className="delete">
               <DeleteButton                 
                  id={note.id}
                  allNotes={notes}
                  removeNote={setNotes}
                  navigation={() => navigate('/')}
               />
            </div>            
         </div>
      )
   })

   return (
      <div>
         <Add className='add-button' onClick={() => navigate('/note/new/')} />
         {myNotes}
      </div>
      
   )
}


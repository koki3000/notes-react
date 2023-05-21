import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

export default function Note () {
    const {id} = useParams()
    const [note, setNote] = useState({})    
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/note/${id}/`)
         .then((response) => response.json())
         .then((data) => setNote(data))
         .catch((err) => console.log(err.message));
    }, [id]);
    
    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            <button onClick={() =>  navigate(`/update/${note.id}/`)}>Update</button>
            <DeleteButton 
                id={note.id} 
                navigation={() => navigate('/')}
            />
            <div className='note'>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
            </div>
        </div>
        
    )
}
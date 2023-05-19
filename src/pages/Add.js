import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Add() {

    const [note, setNote] = useState("")
    const navigate = useNavigate()

    function handleChange(event) {
        setNote(event.target.value)
    }

    const addNote = async () => {
        await fetch('http://127.0.0.1:8000/note/add/', {
           method: 'POST',
           body: JSON.stringify({
              content: note,
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((response) => response.json())
     };

    function handleSubmit () {
        addNote()
        return navigate("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div> Add note </div>
            <input 
                type='textfield'
                placeholder='Your note'
                onChange={handleChange}
                value={note}
            />
            <div>
                <button type='submit'> Add </button>
            </div>
            
        </form>
    
        )
}
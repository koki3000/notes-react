import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Add() {

    const [note, setNote] = useState("")
    const navigate = useNavigate()

    function handleChange(event) {
        setNote(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await fetch('http://127.0.0.1:8000/note/add/', {
            method: 'POST',
            body: JSON.stringify({
                   content: note,
                }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         })
        navigate("/")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div> Add note </div>
                <textarea 
                    placeholder='Your note'
                    onChange={handleChange}
                    value={note}>
                </textarea>
                
                <div>
                    <button type='submit'> Add </button>
                </div>            
            </form>
        </div>
        
        )
}

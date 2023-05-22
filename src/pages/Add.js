import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Add() {

    const [note, setNote] = useState({title: "", content: ""})
    const navigate = useNavigate()

    function handleChange(event) {
        const {name, value} = event.target
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        })
        )
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await fetch('http://127.0.0.1:8000/note/add/', {
            method: 'POST',
            body: JSON.stringify({
                    title: note.title,
                    content: note.content
                }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         })
        navigate("/")
    }
    return (
        <div>
            <h2> Add note </h2>
            <form onSubmit={handleSubmit}>
                <div>                
                    <input
                        className='note'
                        placeholder='Title'
                        onChange={handleChange}
                        name='title'
                        value={note.title}>
                    </input>
                </div>
                <div>
                    <textarea
                        className='note'
                        placeholder='Your note'
                        onChange={handleChange}
                        name='content'
                        value={note.content}>
                    </textarea>  
                </div>                              
                <div>
                    <button type='submit'> Add </button>
                </div>            
            </form>
        </div>
        
        )
}

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';

export default function Update({ route, navigation }) {
    const { id } = useParams();
    const [note, setNote] = useState("")
    const navigate = useNavigate()

    useEffect( () => {
        fetch(`http://127.0.0.1:8000/note/${id}/`)
         .then((response) => response.json())
         .then((data) => setNote(data.content))
         .catch((err) => console.log(err.message));
    }, [id])

    function handleChange(event) {
        setNote(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await fetch(`http://127.0.0.1:8000/note/update/${id}/`, {
            method: 'PUT',
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
        <form onSubmit={handleSubmit}>
            <div> Update note </div>
            <textarea 
                type='textfield'
                onChange={handleChange}
                value={note}>
            </textarea>
            <div>
                <button type='submit'> Update </button>
            </div>            
        </form>

    )
}
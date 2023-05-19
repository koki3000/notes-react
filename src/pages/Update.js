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
    }, [])

    function handleChange(event) {
        setNote(event.target.value)
    }

    function handleSubmit() {
        fetch(`http://127.0.0.1:8000/note/update/${id}/`, {
            method: 'PUT',
            body: JSON.stringify({
                content: note,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
         .then((response) => response.json())

        return navigate("/")
    }

    console.log(note)
    return (
        <form onSubmit={handleSubmit}>
            <div> Update note </div>
            <input 
                type='textfield'
                onChange={handleChange}
                value={note}
            />
            <div>
                <button type='submit'> Update </button>
            </div>
            
        </form>

    )
}
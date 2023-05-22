import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';

export default function Update({ route, navigation }) {
    const { id } = useParams()
    const [note, setNote] = useState({})
    const navigate = useNavigate()

    useEffect( () => {
        fetch(`http://127.0.0.1:8000/note/${id}/`)
         .then((response) => response.json())
         .then((data) => setNote(data))
         .catch((err) => console.log(err.message));
    }, [id])

    function handleChange(event) {
        const {name, value} = event.target
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await fetch(`http://127.0.0.1:8000/note/update/${id}/`, {
            method: 'PUT',
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
            <h2> Update note </h2>
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
                        <button type='submit'> Update </button>
                    </div>            
                </form>
        </div>
    )
}
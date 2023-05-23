import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import BackButton from '../components/BackButton'

export default function Update({ route, navigation }) {
    const { id } = useParams()
    const [note, setNote] = useState({})
    const navigate = useNavigate()

    useEffect( () => {
        fetch(`https://notes-production-a8a8.up.railway.app/api/note/${id}/`)
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
        await fetch(`https://notes-production-a8a8.up.railway.app/api/note/update/${id}/`, {
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
            <BackButton
                note={note}
                navigation={() => navigate('/')}
            />
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
            </form>
        </div>
    )
}
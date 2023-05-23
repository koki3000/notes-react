import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import BackButton from '../components/BackButton'
import DeleteButton from '../components/DeleteButton'

export default function SingleNotePage({ route, navigation }) {
    const { id } = useParams()
    const [note, setNote] = useState({})
    const navigate = useNavigate()
    let deleteShow = null;

    useEffect( () => {
        if (id !== 'new') {
            fetch(`https://notes-production-a8a8.up.railway.app/api/note/${id}/`)
            .then((response) => response.json())
            .then((data) => setNote(data))
            .catch((err) => console.log(err.message));
        }
        
    }, [id])

    function handleChange(event) {
        const {name, value} = event.target
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }))
    }

    if (id !== 'new') {
        deleteShow = (
            <DeleteButton
                id={note.id}
                navigation={() => navigate('/')}
            />
        )
    }

    return (
        <div>
            <div className='buttons'>
                <BackButton
                    note={note}
                    isNew={id === 'new' ? true : false}
                    navigation={() => navigate('/')}
                />
                {deleteShow}
            </div>
            <div>               
                <input
                    className='note' 
                    placeholder='Title'
                    onChange={handleChange}
                    name='title'
                    value={note.title ? note.title : ""}>
                </input>
            </div>
            <div>
                <textarea
                    className='note' 
                    placeholder='Your note'
                    onChange={handleChange}
                    name='content'
                    value={note.content ? note.content : ""}>
                </textarea>
            </div>
        </div>
    )
}
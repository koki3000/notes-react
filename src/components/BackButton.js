import { ReactComponent as BackArrow } from '../assets/back-arrow.svg'

export default function BackButton (props) {
    const {note, isNew, navigation} = props
    const id = note.id

    async function handleClick(event) {
        event.preventDefault()
        if (note.content || note.title) {
            if (isNew) {
                await fetch('https://notes-production-a8a8.up.railway.app/api/note/add/', {
                    method: 'POST',
                    body: JSON.stringify({
                            title: note.title,
                            content: note.content
                        }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                })
            }
            else {
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
            }
        } 
        else {
            if (!isNew) {
                await fetch(`https://notes-production-a8a8.up.railway.app/api/note/delete/${id}/`, {
                    method: 'DELETE'
                })
            }
        }
        
        navigation()
    }

    return (
        <div onClick={handleClick}>
            <BackArrow className='button' />            
        </div>
    )
}
import { ReactComponent as Delete } from '../assets/delete.svg'

export default function DeleteButton (props) {
    const {id, allNotes, removeNote, navigation} = props

    async function handleClick(event) {
        event.preventDefault()
        await fetch(`https://notes-production-a8a8.up.railway.app/api/note/delete/${id}/`, {
              method: 'DELETE'
        })
        if (allNotes !== undefined) {
        removeNote(
                allNotes.filter((note) => {
                    return note.id !== id;
                })
            )
        } 
        navigation()
    }

    return (        
        <Delete className='button' onClick={handleClick}/>
    )
}
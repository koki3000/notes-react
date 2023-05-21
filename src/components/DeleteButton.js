export default function DeleteButton (props) {
    const {id, allNotes, removeNote, navigation} = props

    async function handleClick(event) {
        event.preventDefault()
        await fetch(`http://127.0.0.1:8000/note/delete/${id}/`, {
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
        <button name='delete' onClick={handleClick}>Delete</button>
    )
}
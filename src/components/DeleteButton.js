export default function DeleteButton (props) {
    const {id, allNotes, removeNote, navigation} = props

    async function handleClick(event) {
        event.preventDefault()
        await fetch(`http://127.0.0.1:8000/api/note/delete/${id}/`, {
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
        <p name='delete' className="delete" onClick={handleClick}><b>Delete note</b></p>
    )
}
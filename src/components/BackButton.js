export default function DeleteButton (props) {
    const {note, navigation} = props
    const id = note.id

    async function handleClick(event) {
        event.preventDefault()
        if (note.content || note.title) {
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
        else {
            await fetch(`https://notes-production-a8a8.up.railway.app/api/note/delete/${id}/`, {
                method: 'DELETE'
            })
        }
        navigation()
    }

    return (
        <button name='delete' onClick={handleClick}>Back</button>
    )
}
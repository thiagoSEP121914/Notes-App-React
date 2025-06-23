import { useState } from "react";
import "../style/inputBox.css"
import AddIcon from '@mui/icons-material/Add';

function InputBox(props) {

    const [note, setNote] = useState({
         title: "",
         content: ""
    });

    function noteHandler(event) {
        const {name, value} = event.target;
        setNote((previousNote) => ({
            ...previousNote,
             [name]: value   
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (note.title.trim() !== "" && note.content.trim() !== "") {
            props.onAdd(note)
            setNote({
                title:"",
                content:""}
            )
        }
    }

    return (
    <form className="input-container">
        <input id="title" placeholder="Title"
            name="title"
            onChange={noteHandler}
            value={note.title}
        />
        <textarea id="content" placeholder="Content" 
             name="content"
            onChange={noteHandler}
            value={note.content}
        />
        <button onClick={submitHandler}>
            <AddIcon/>
        </button>
    </form>
    );
}

export default InputBox;

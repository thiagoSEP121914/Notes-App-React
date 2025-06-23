import "../style/card.css"
import DeleteIcon from '@mui/icons-material/Delete';

function Card(props) {
    return (
        <div className="card-container">
            <span>{props.title}</span>
            <p>{props.content}</p>
            <button onClick={() => {
                props.onDelete(props.id);
            }}>
                <DeleteIcon/>
            </button>
        </div>
    );
}

export default Card;
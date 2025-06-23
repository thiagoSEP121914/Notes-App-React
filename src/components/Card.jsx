import "../style/card.css"

function Card(props) {
    return (
        <div className="card-container">
            <span>{props.title}</span>
            <p>{props.content}</p>
            <button onClick={() => {
                props.onDelete(props.id);
            }}>delete</button>
        </div>
    );
}

export default Card;
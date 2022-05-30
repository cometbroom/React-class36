import "./itemCard.css";


function Item(props) {
    return (
        <div>
            <img src={props.image} alt={props.title}></img>
            <span>{props.title}</span>
        </div>
    )
}

export default Item;
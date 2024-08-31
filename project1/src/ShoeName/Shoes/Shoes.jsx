import './Shoes.css';

export default function(props) {
    return(
        <div className='Shoes'>
            <p>Name: {props.Name}</p>
            <p>Price: Rs. {props.Price}</p>
            <p>Colour : {props.Color}</p>
        </div>
    );
}
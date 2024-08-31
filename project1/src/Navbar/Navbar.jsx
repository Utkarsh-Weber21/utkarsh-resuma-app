import './Navbar.css';
import nike from '../assets/nike.jpg';

export default function(){
    return(
        <div className='Nav'>
            <div className='logo'>
                <img src={nike} alt="logo" />
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button>Log In</button>
        </div>
    )
}
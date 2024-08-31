import Welcome from "./welcome.jsx";

function WelcomeMessage(){
    return(
        <div>
            <Welcome isLoggedin = {false} username = "Utkarsh Raj"/>
        </div>
    )
}

export default WelcomeMessage;
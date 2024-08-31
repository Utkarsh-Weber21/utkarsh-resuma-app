import './welcome.css';

export default function(props){
    if(props.isLoggedin){
        return(
            <h2 className='login'>Welcome..! props.username</h2>
        )
    }
    else{
        return(
            <h2 className='PleaseLogin'>Please login to continue</h2>
        )
    }
}
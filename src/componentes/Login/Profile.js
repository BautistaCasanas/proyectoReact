
import { useAuth0 } from '@auth0/auth0-react';
import "./Profile.css"


const Profile=()=> {
   const {user, isAuthenticated, isLoading}= useAuth0();

    if(isLoading){
        return <p>Loading..</p>
    }

    return(<>
        {isAuthenticated && ( 
            <div className='nameProfile'>
            <b>{user.name}</b>
            </div>)}
       </>)
}

export default Profile;

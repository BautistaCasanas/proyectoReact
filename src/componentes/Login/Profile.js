
import { useAuth0 } from '@auth0/auth0-react';
import "./Profile.css"


const Profile=()=> {
   const {user, isAuthenticated, isLoading}= useAuth0();

    if(isLoading){
        return <p>Loading..</p>
    }
    return(<>
        {isAuthenticated && ( 
            <div className='containerProfile'>

            <div><img src={user.picture} width="40px" alt="LogoProfile"/></div>

            <div className='nameProfileContainer'>
            <b className='nameProfile'>{user.given_name}</b>
                <b className='nameProfile'>{user.family_name}</b>
            </div>

            </div>)}
       </>)
}

export default Profile;

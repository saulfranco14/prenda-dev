import clientAxios  from './axios';

const authToken = ( token ) =>{
    if( token ){
        clientAxios.defaults.headers.common['x-auth-token'] = token ;
    }else{
        console.log("delete token");
        delete clientAxios.defaults.headers.common['x-auth-token'];
    }
}

export default authToken;
import getUser from '../user';

const isAuth = () => {

    try{
        return getUser() ? true : false
    }catch{
        return false;
    }
   
    
}

export default isAuth
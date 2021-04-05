import { getLocalStorage } from '../../';



const User = () => {

   // console.log("the is the user",getLocalStorage('user'))
    try{
        return  getLocalStorage('user')
    }catch{
        return null
    }
   

}

export default User;

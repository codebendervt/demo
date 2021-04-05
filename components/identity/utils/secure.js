import {getLocalStorage,CreateToken} from 'components'

const SecureStore = async( ) => {

    let identity = {}
    let _secureIdentity = {}

    try{

        if(getLocalStorage('identity')){
            identity = getLocalStorage('identity')
            //console.log("the data to encrpt", identity)
            _secureIdentity = await CreateToken(identity)

    
        }else{
            identity = {}
        }

        //console.log('encrypted identity',_secureIdentity)
        return _secureIdentity

    }catch(e){

        console.log('error',e.message)
        return false
    }



}

export default SecureStore;

//the begining of a new store state

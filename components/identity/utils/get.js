import {getLocalStorage} from 'components'

const GetIdentity = ( ) => {

    let store = {}

    try{

        if(getLocalStorage('identity')){
            store = getLocalStorage('identity')
    
    
        }else{
            store = false
        }

        return store

    }catch{

        return false
    }



}

export default GetIdentity;

//the begining of a new store state

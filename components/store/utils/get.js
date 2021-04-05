import {$getLocalStorage,ReadToken} from 'components'

const GetStore = async ( ) => {

    let store = {}

    try{

        if($getLocalStorage('cart')){
            store = await ReadToken($getLocalStorage('cart'))
            store = store.data
          
    
        }else{
            store = {}
        }

        return store

    }catch{

        return false
    }



}

export default GetStore;

//the begining of a new store state

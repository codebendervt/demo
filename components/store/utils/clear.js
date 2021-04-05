import {$deleteStorage} from 'components'

const DeleteStore = ( ) => {

    try{

        $deleteStorage('cart')


        return true

    }catch{

        return false
    }



}

export default DeleteStore;

//the begining of a new store state

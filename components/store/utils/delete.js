import {$setLocalStorage,$getLocalStorage} from 'components'

const DeleteInStore = async ( id ) => {

    try{

        if($getLocalStorage('cart')){
            let _storage = await ReadToken($getLocalStorage('cart'))
            let _cart = []
    
            console.log('there is something in the cart', _storage.data)
            _storage.data.cart.map((i) => {

                if(i.id == id){
                    console.log('item wants to be deleted')
                }else{
                    _cart.push(i)
                }
            })
            _storage.data.cart = _cart
            $setLocalStorage('cart', await CreateToken(_storage.data))
            console.log('after', _storage)
    
        }else{

            console.log("what are you trying to delete")
        }

        return true

    }catch{

        return false
    }



}

export default DeleteInStore;

//the begining of a new store state

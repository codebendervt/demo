import {$setLocalStorage,$getLocalStorage,CreateToken,ReadToken} from 'components'

const AddToStore = async ( item ) => {

    try{

        if($getLocalStorage('cart')){
            let _storage = await ReadToken($getLocalStorage('cart'))
    
            //console.log('there is something in the cart', _storage.data)
            item.id = _storage.data.cart.length
            _storage.data.cart.push(item)
            $setLocalStorage('cart', await CreateToken(_storage.data))
            //console.log('after', _storage.data)
    
        }else{
            let cart = []
            item.id = 0
            cart.push(item)
            let _data = {cart: cart}
            $setLocalStorage('cart',await CreateToken(_data))

           // console.log('storing in teh cart',cart)
        }

        return true

    }catch{

        return false
    }



}

export default AddToStore;

//the begining of a new store state

import { $getLocalStorage, CreateToken,ReadToken } from 'components'

const SecureStore = async (isCheckout = true) => {

    let store = {}
    let _secureStore = undefined

    try {

        if ($getLocalStorage('cart')) {
            store = await ReadToken($getLocalStorage('cart'))

            if (isCheckout) {

                store.data.order = "new"
                store.data.payment = "pending"
            }

            _secureStore = await CreateToken(store.data)

            //console.log("encrypted store",_secureStore)

        } else {
            store = {}
        }


        return _secureStore

    } catch (e) {

        console.log('error', e.message)
        //return false
    }



}

export default SecureStore;

//the begining of a new store state

import { setLocalStorage, getLocalStorage } from 'components'

const CreateIdentity = (item) => {

    try {

        // if(getLocalStorage('identity')){
        //     let _storage = getLocalStorage('identity')

        //     console.log('there is alreay and idenity', _storage)


        // }else{
        //     let _identity = {}
        //         _identity.name = item.name
        //         _identity.contact = item.contact
        //         _identity.location = item.location


        //     let _data = {idenity: item}
        //     setLocalStorage('identity',_data)
        // }

        let _identity = {}
        _identity.name = item.name
        _identity.contact = item.contact
        _identity.location = item.location


        let _data =  _identity 
        setLocalStorage('identity', _data)

        return true

    } catch {

        return false
    }



}

export default CreateIdentity;

//the begining of a new store state

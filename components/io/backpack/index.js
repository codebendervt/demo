import { RequestAPI, APIEndpoint, PushAPI } from '../../models/utils'
import { setLocalStorage } from '../../';


const BackpackIdentity = async (id) => {

    let data = {
        id: id
    }
    return await RequestAPI(APIEndpoint.bacpackIdentity, data)
}

const UpdateLocalBackpack = async (email, newdevice = false) => {

    try{

        let data = await BackpackIdentity(email)
        let _data = {}
        _data.data = data.data;
        let _devices = _data.data.devices;
        if (_data.data.devices && newdevice) {
            _data.data.devices = _devices + 1
        }
        _data.id = data.ref["@ref"].id;
        setLocalStorage('user', _data)
    
        return _data
    }catch(e){
        console.log("unable to update local".e.message)
        return null;
    }

}

const UpdateCloudBackpack = async (id, data) => {

    let _data = {
        id: id,
        data: {
            data: data
        }
    }

    console.log("data to update on backpack", _data)
    let response = await PushAPI(APIEndpoint.backpack, _data)

    console.log("response to update", response)
    _data.data = response.data
    setLocalStorage('user', _data)
    return _data;
}


export { BackpackIdentity, UpdateLocalBackpack, UpdateCloudBackpack }
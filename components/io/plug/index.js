import { getLocalStorage, setLocalStorage, getUser, UpdateCloudBackpack } from 'components';
import { RecieveAPI, APIEndpoint, PushAPI, RemoveAPI } from '../../models/utils'

const UpdateCloudPlug = async (id, data) => {

    try{
        let _data = {
            id: id,
            data: {
                data: data
            }
        }
    
        const localPlug = getPlug();
    
        //console.log("data to update on plug", _data)
        let response = await PushAPI(APIEndpoint.plug, _data)
    
        //console.log("response to update", response)
    
        localPlug.products.map((i) => {
            if (i.id == id) {
                i.data = response.data
            }
            setLocalStorage('plug', localPlug)
        })
    
    
        return localPlug;
    }catch{
        return false
    }

  
}

const DeletePlug = async (id) => {

    let localPlug = getPlug();
    const newPlug = []
    const user = getUser();

    let _data = {
        id: id,
    }


    let response = await RemoveAPI(APIEndpoint.plug, _data)

    console.log("deleting plug",response)

    localPlug.products.map((i, k) => {
        if (i.id == id) {
            localPlug.products.splice(k, 1)
            console.log("removed");
        } else {
            newPlug.push(i.id)
        }
       
        setLocalStorage('plug', localPlug)
    })

    let plug = {
        plug: newPlug
    }

    const backpackResponse = await UpdateCloudBackpack(user.id, plug)
    console.log("what is the new backpack", backpackResponse)
    return localPlug

}

const UpdateLocalPlug = async () => {

    const localPlug = getPlug();
  

    try {
        localPlug.products.map(async (i) => {
            let data = await PlugProduct(i.id)
            
            //console.info("the data to update", data)
            if (i.id == data.ref["@ref"].id) {
                i.data = data.data
                console.log('syncing plug')
            }
            setLocalStorage('plug', localPlug)
            //console.info("current product", localPlug)
            return localPlug
        })
    } catch {
        console.info("the plug has nothing", localPlug)
    }

    console.info("the plug now", localPlug)
    return localPlug
}

const PlugProduct = async (id) => {


    let data = {
        id: id
    }
    return await RecieveAPI(APIEndpoint.plug, data)
}

const GetCloudPlug = (brand) => {

}

const getPlug = () => {
    try {
        return getLocalStorage('plug')
    } catch {
        return null
    }

}

export { UpdateCloudPlug, getPlug, UpdateLocalPlug,DeletePlug,GetCloudPlug,PlugProduct }

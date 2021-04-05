
import { getLocalStorage,setLocalStorage } from '../../';
import { RequestAPI, APIEndpoint, PushAPI, RemoveAPI } from '../../models/utils'


const getBrand = () => {
    try {
        return getLocalStorage('genus')
    } catch {
        return null
    }


}

const UpdateLocalGenus = async (id) => {

    let _genus = {}

    try {
        let data = await GenusBrand(id)
        _genus.data = data.data
        _genus.id = data.ref["@ref"].id

        setLocalStorage('genus', _genus)

    } catch(e) {
        console.info("the genus has nothing", e.message)
    }

    console.info("the genus now", _genus)
    return _genus
}

const GenusBrand = async (id) => {


    let data = {
        id: id
    }
    return await RequestAPI(APIEndpoint.genusIdentity, data)
}

export { getBrand,UpdateLocalGenus};

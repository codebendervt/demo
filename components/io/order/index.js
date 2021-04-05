import { RecieveAPI, APIEndpoint, RequestAPI, PushAPI } from '../../models/utils'


const GetBanks = async () => {

    const result = await RecieveAPI(APIEndpoint.bank)
    return result.data;
}


const CreateOrder = async (data) => {

    try {
        let _data = {
            data: data
        };
        const init = await RequestAPI(APIEndpoint.order, _data)
        //console.log("order is",init)
        return init
    } catch (e) {
        console.log("unable to create order".e.message)
    }



}

const GetOrder = async (id) => {

    try {
   
        let data = {
            id: id
        }

        const result = await RecieveAPI(APIEndpoint.order, data)
        return result

       
    } catch (e) {
        console.log("unable to create order".e.message)
    }



}

const UpdateCloudOrder = async (id, data) => {

    let _data = {
        id: id,
        data: {
            data: data
        }
    }

    //manage local orders
    //const localPlug = getPlug();

    //onsole.log("data to update on plug", _data)
    const response = await PushAPI(APIEndpoint.order, _data)

    //console.log("response to update", response)

    // localPlug.products.map((i) => {
    //     if (i.id == id) {
    //         i.data = response.data
    //     }
    //     setLocalStorage('plug', localPlug)
    // })


    return response;
}


export { CreateOrder,GetOrder,UpdateCloudOrder };
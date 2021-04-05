import transact from '../../../core/technical/core/fetch/fetch';


const RequestAPI = async (url,data) => {

    return await transact(url,"POST",false,data)
}

const PushAPI = async (url,data) => {

    return await transact(url,"PUT",false,data)
}

const RecieveAPI = async (url,data = null) => {
    return await transact(url,"GET",false,data)
}

const RemoveAPI = async (url,data) => {

    return await transact(url,"DELETE",false,data)
}


export {RequestAPI, PushAPI, RecieveAPI, RemoveAPI};
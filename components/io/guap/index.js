import account from 'components/models/guap/account';
import { getLocalStorage, setLocalStorage,CreateToken } from 'components';
import { RecieveAPI, APIEndpoint, RequestAPI, RemoveAPI } from '../../models/utils'


const url = "https://oldguard.sauveur.cloud/io/status/confirm"
const devUrl = "http://localhost:3000/io/status/confirm"
const GetBanks = async () => {

    const result = await RecieveAPI(APIEndpoint.bank)
    return result.data;
}


const CreateGuap = async (data, brand) => {
    let result = {};
    const init = await RequestAPI(APIEndpoint.subaccount, data)

    //console.log("initialize",init)

    if (init.status) {
        let _data = {
            data: {
                id: init.data.id,
                code: init.data.subaccount_code,
                brand: brand
            }
        }
        const account = await RequestAPI(APIEndpoint.guap, _data)
        //console.log("guap account",account)
        result = account;
    }

    return result
}

const GetGuap = async (brand) => {

    let _data = {id:brand}
    const {data}  = await RequestAPI(APIEndpoint.getGuap, _data)

    return data

}

const InitTransaction = async (payload, brand, id) => {

    console.log(payload)

    let _data = { id: brand }
    const { data } = await RequestAPI(APIEndpoint.getGuap, _data)
    let total = 0

    payload.cart.map((i) => {
        total += i.cost
    })

    let custom_fields = {
        custom_fields: [{ display_name: brand }]
    }

    const createTransaction = {
        email: `${payload.customer.contact}@${brand}.xyz`,
        amount: total * 100,
        callback_url: `${url}?id=${id}`,
        subaccount: data.code,
        metadata: JSON.stringify(custom_fields)
    }

    //console.log('curent data', createTransaction)

     const transaction = await RequestAPI(APIEndpoint.transaction, await CreateToken(createTransaction))



    //console.log('curent data', transaction)

    return transaction
}

const InitSimpleTransaction = async (payload, brand, id) => {

    console.log(payload)

    let custom_fields = {
        custom_fields: [{ display_name: brand }]
    }

    const createTransaction = {
        email: `${payload.contact}@${brand}.xyz`,
        amount: payload.amount * 100,
        callback_url: `${url}?id=${id}`,
        subaccount: payload.code,
        metadata: JSON.stringify(custom_fields)
    }

    console.log('curent data', createTransaction)

    const transaction = await RequestAPI(APIEndpoint.transaction, await CreateToken(createTransaction))

    return transaction
}

const VerifyTransaction = async (ref) => {

    let _data = { referance: ref }
    //console.log("data to verify",_data)
    const { data } = await RequestAPI(APIEndpoint.verifyTransact, _data)

    return data

}

const hasAccount = () => {

    try{
        const result = getLocalStorage('guap')
        return result
    }catch{

        const err = false
        return(err)
    }

}

export { GetBanks, CreateGuap, InitTransaction, VerifyTransaction,hasAccount,InitSimpleTransaction,GetGuap };

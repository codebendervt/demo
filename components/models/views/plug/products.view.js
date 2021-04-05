import { useEffect, useState } from 'react'
import Modals from 'components/models'
import { setLocalStorage } from 'sauveur_core/utility';
import models from 'components/models';
import Status from 'components/design/status'
import { RequestAPI, APIEndpoint } from '../../utils'
import { getUser, getPlug, getBrand, UpdateCloudBackpack, UpdateCloudPlug, CreateIssue, CommentOnIssue } from 'components/io';

export default function ProductView({ data }) {

    const [stateText, setStateText] = useState('One Moment Please')
    const [state, setState] = useState(false)
    //const [body, setBody] = useState(null)
    const [res, setRes] = useState(false)
    const [user] = useState(getUser())
    const [_thePlug, setThePlug] = useState(getPlug())
    const [_brand, setTheBrand] = useState(getBrand())


    useEffect(() => {

        // create a check to see if in dev or prod to send request
        if (data && _brand) {
            if (data.mode == "create") {
                console.log(data)
                ProductCreate()
            } else {

                // let builtIn = JSON.parse(data.data);
                ProductUpdate()
            }

        }

        return () => {
            cleanup
        }

    }, [])

    const convertData = () => {
        let stock = parseInt(data.stock);
        let price = parseInt(data.price) * 100;
        let limited = stock > 0

        return {
            name: data.name,
            description: data.desc,
            price: price,
            currency: "ZAR",
            limited: limited,
            quantity: stock,
            brand: _brand.data.name,
            cat: data.cat,
            type : data.model
        };
    }

    const ProductCreate = async () => {


        try {
            let _body = convertData();

            //#region get pay stack response
            // const response = await RequestAPI(APIEndpoint.createProduct, _body)
            //#endregion

            // console.log("paystack response", response)
            // _body.id = response.data.id;

            let _plug = {
                data: _body
            }
            if (data.image) {
                _plug.data.image = getImage(data.name)
            }
            const plugResponse = await RequestAPI(APIEndpoint.plug, _plug)
            console.log("plug response", plugResponse)


            //convert into a faundadb response handler
            if (plugResponse.msg) {
                if (plugResponse.msg.name == "BadRequest") {

                }
                setStateText("Error Creating Product")
            } else {

                let _data = {
                    id: plugResponse.ref["@ref"].id,
                    data: plugResponse.data
                }


                ProductInit(_data)

            }

        } catch (e) {
            console.log(e)
            CommentOnIssue(16, e.message)
            setStateText("Error Creating Product")
        }


    }

    const ProductUpdate = async () => {

        try {
            let _body = convertData();

            //update the paystack plug here

            console.log(data)
            if (data.image) {
                _body.image = getImage(data.name)
            }


            UpdateCloudPlug(data.dataID, _body)


            console.log("updated product")
            setStateText("Product Updated")
            setState(true)
        } catch (e) {
            console.log(e)
            CommentOnIssue(20, e.message)
            setStateText("Error Updating Product")
        }

    }


    const ProductInit = async (_data) => {
        try {
            let result = {};
            let plug = {}
            let localPlug = {}

            if (user.data.plug) {
                user.data.plug.push(_data.id)
                plug = {
                    plug: user.data.plug
                }
                console.log("something is up here", _thePlug)
                localPlug = _thePlug.products.push(_data)

                result = await BackpackUpdate(plug)
                setLocalStorage('plug', _thePlug)

            } else {
                plug = {
                    plug: [_data.id]
                }
                localPlug = {
                    products: [_data]
                }
                result = await BackpackUpdate(plug)
                setLocalStorage('plug', localPlug)

            }


            console.log("created product")
            setStateText("Product Created")
            setState(true)
        } catch (e) {
            console.log(e)
            CreateIssue("Initializing Product", e.message)
            setStateText("Error Creating Product")

        }

    }

    const BackpackUpdate = async (_data) => {

        try {
            const backpackResponse = await UpdateCloudBackpack(user.id, _data)

            //console.log("updated backpack", backpackResponse)
            return backpackResponse;
        } catch (e) {
            console.log(e)
            CreateIssue("Updating Backpack", e.message)
            setStateText("Error Updating Bacpack ")
        }



    }

    const cleanup = () => {
        console.log("leaving status page")
    }

    const getImage = (name) => {

        let ext = data.image.split(".")[1]
        let logo = `${name}-${_brand.data.name}.${ext}`
        let imgUrl = `https://sauveurstore.blob.core.windows.net/datas/${logo}`

        return imgUrl;

    }


    return (

        <Status url="/toolbox/plug/" state={state} text={stateText} title="Product Update" />

    )
}




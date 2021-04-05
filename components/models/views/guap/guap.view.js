import { useEffect, useState } from 'react'
import Head from 'components/head'
import { setLocalStorage } from 'sauveur_core/utility';
import models from 'components/models';
import Status from 'components/design/status'
import { getUser, getBrand } from 'components/io';
import { useRouter } from 'next/router'
import GuapViews from './views'


export default function ProductView({ data }) {

    const [stateText, setStateText] = useState('One Moment Please')
    const [state, setState] = useState(false)
    //const [body, setBody] = useState(null)
    const router = useRouter();
    const [user] = useState(getUser())
    const [_brand, setTheBrand] = useState(getBrand())
    const [view, setView] = useState();


    useEffect(() => {

        // create a check to see if in dev or prod to send request
        if (data && _brand) {
           let custom = JSON.parse(data.custom)
           initView(custom)
        }

        return () => {
            cleanup
        }

    }, [])


    const initView = (init) => {

        let _data = {};

        data.code = init.code
        data.user = user
        data.brand = _brand

        _data.type = init.type
        _data.data = data

        setView(_data)

    }

    const cleanup = () => {
        console.log('cleaning up')
    }

    return (

        <>
        <Head title="Account Create" />
        {/* // <Status url="/toolbox/plug/products" state={state} text={stateText} title="Account Created Update" /> */}

        {view ? GuapViews(view) : <>loading</>}
        </>
    )
}




import Head from 'components/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Modals from 'components/models'
import { setLocalStorage } from 'sauveur_core/utility';
import getData from 'sauveur_core/fetch/fetch'
import { useRouter } from 'next/router'
import { CreateIssue, CommentOnIssue } from 'components/io';



export default function BrandView({ data, id }) {
    const router = useRouter()
    const [stateText, setStateText] = useState('One Moment Please')
    const [btnText, setbtnText] = useState('')
    const [btnErr, setbtnErr] = useState('')
    const [state, setState] = useState(false)
    //const [body, setBody] = useState(null)
    const [res, setRes] = useState(JSON.parse(data.data))

    useEffect(() => {

        console.log("this is the brand ", data)
        brandSetUp()


        return () => {
            cleanup
        }

    }, [])

    const cleanup = () => {
        console.log("leaving status page")
    }

    const brandSetUp = async () => {

        try {

            let response = {}
            let body = {}
            if (data.mode == "create") {
                let logo = ""
                if (data.logo) {
                    logo = getImage(data.name)
                }
                body = {
                    id: id,
                    data: {
                        email: data.id,
                        name: data.name.trim(),
                        links: [],
                        logo: logo
                    }
                }
                response = await getData("/api/storage/genus", "POST", false, body)

            } else {
                console.log("original data", data)
                body.id = res.id
                body.data = {
                    data: {
                        name: data.name.trim(),
                        logo: getImage(data.name)
                    }
                }

                response = await getData("/api/storage/genus", "PUT", false, body)
            }





            console.log(response.requestResult)
            if (response.msg) {
                if (response.msg.requestResult.statusCode == 400) {
                    console.log("not unique")
                    if (data.mode == "create") {
                        setStateText("You Already Have A Brand Registered")
                        setbtnText("Go Home")
                        setbtnErr('Contact Developer')
                        //need to support multiple accounts
                        //await createBrand();
                    } else {

                    }
                }

            } else {
                setBrand(response)
            }

        }
        catch {
            setStateText("Unable to update brand")
            CreateIssue("Unable to update brand", e.message)
            setbtnErr('Contact Developer')
            //console.log("unable to update link",e.message)
        }


    }

    const setBrand = (response) => {
        let _data = {
            id: response.ref["@ref"].id,
            data: response.data
        }
        console.log("created brand", _data)
        setLocalStorage('genus', _data)
        if (data.mode == "create") {
            setStateText("Brand Created")
        } else {
            setStateText("Brand Updated")
        }

        setbtnText('Go Home')
        setState(true)
    }

    // const createBrand = async () => {
    //     let _data ={}
    //     _data.id = data.data.email;
    //     const identity = await getData("/api/storage/backpack/identity", "POST", false, data)
    //     console.log('your identity is ', _data)
    //     if (identity.data.model = "founder") {
    //         _data.data = identity.data
    //         const brand = await getData("/api/storage/genus/identity", "POST", false, _data)
    //         setBrand(brand)
    //     }else{
    //         setStateText("Brand Exisits")  
    //     }
    // }
    // const updateBrand = () => {

    // }


    const getImage = (brand) => {
        let ext = data.logo.split(".")[1]
        let logo = `${brand}.${ext}`
        let imgUrl = `https://sauveurstore.blob.core.windows.net/datas/${logo}`

        return imgUrl;


    }

    const ErrorButtons = () => {

        return (
            <div className="w-full flex justify-center animated fadeIn">

                <div className="m-4 text-xl font-default-accent cursor-emoji" onClick={() => router.push("/kraft/genus")} >{btnText}</div>  <a href="https://api.whatsapp.com/send?text=Error%20Brand&phone=15551234567" className="m-4 text-xl font-default-accent cursor-emoji">{btnErr}</a>

            </div>
        )
    }


    return (
        <div className={"w-full h-screen flex justify-center items-center"}>
            <Head title="Brand Setup" />

            <div className={"text-3xl md:text-5xl font-default-title text-white capitalize text-center flex-col max-w-lg " + (state ? "" : " ")}>
                <h1 className="animate-pulse">
                    {stateText}
                </h1>

                {
                    (state ? <div className="text-xl font-default-accent cursor-emoji" onClick={() => router.push("/kraft/genus")} >{btnText}</div> : <ErrorButtons />)
                }



            </div>



        </div>
    )
}



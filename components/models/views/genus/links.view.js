import Head from 'components/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Modals from 'components/models'
import { setLocalStorage } from 'sauveur_core/utility';
import getData from 'sauveur_core/fetch/fetch'
import { useRouter } from 'next/router'
import { CreateIssue, CommentOnIssue } from 'components/io';


export default function LinkView({ data, id }) {
    const router = useRouter()
    const [stateText, setStateText] = useState('One Moment Please')
    const [state, setState] = useState(false)
    const [btnText, setbtnText] = useState('')
    const [btnErr, setbtnErr] = useState('')
    const [res, setRes] = useState(false)

    useEffect(() => {

        if (data) {
            console.log("data passed here is", data)
            let builtIn = JSON.parse(data.data);
            brandUpdate(builtIn.links)
        }


        return () => {
            cleanup
        }

    }, [])

    const cleanup = () => {
        console.log("leaving status page")
    }

    const brandUpdate = async (links) => {

        try{
            
        let link = {
            id: links.length.toString(),
            name: data.name,
            link: data.link
        };

        console.log("the mode is", data.mode)
        if (data.mode == "create") {
            links.push(link)
            console.log("data has been added", links)
        } else {
            links.map((i) => {
                if (i.id == data.dataID) {
                    i.name = data.name;
                    i.link = data.link;
                }
            })
            console.log("the link to update", links)
            //links = link
        }


        let body = {
            id: id.toString(),
            data: {
                data: {
                    links: links
                }
            }
        }

        console.log("we are updating the brand with", body)
        const response = await getData("/api/storage/genus", "PUT", false, body)
        console.log(response)
        // setRes(response)
        if (response.msg) {
            if (response.msg.name == "BadRequest") {

            }

            setStateText("Unable to update Link")
        } else {
            let _data = {
                id: response.ref["@ref"].id,
                data: response.data
            }
            console.log("created brand")
            setLocalStorage('genus', _data)
            setStateText("Link Updated")
            setbtnText('Go Home')
            setState(true)
        }

        }catch(e){
            
            setStateText("Unable to update link")
            CreateIssue("Unable to update link",e.message)
            setbtnText("Retry")
            setbtnErr("Contact Developer")
            //console.log("unable to update link",e.message)
        }


    }

    
    const ErrorButtons = () => {

        return (
            <div className="w-full flex justify-center">

                <div className="m-4 text-xl font-default-accent cursor-emoji" onClick={() => router.push("/kraft/genus")} >{btnText}</div>  <a href="https://api.whatsapp.com/send?text=Error%20Brand&phone=15551234567" className="m-4 text-xl font-default-accent cursor-emoji">{btnErr}</a>

            </div>
        )
    }


    return (
        <div className={"w-full h-screen flex justify-center items-center"}>
            <Head title="Brand Update" />

            <h1 className={"text-3xl md:text-5xl font-default-title text-white capitalize text-center flex-col " + (state ? "" : " animate-pulse")}>
                <div>
                    {stateText}
                </div>

                {
                    (state ? <div className="text-xl font-default-accent cursor-emoji" onClick={() => router.push("/kraft/genus")} >{btnText}</div> : <ErrorButtons/>)
                }

            </h1>

        </div>
    )
}



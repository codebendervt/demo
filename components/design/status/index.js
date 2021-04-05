import Link from 'next/link'
import Head from 'components/head'
import { useRouter } from 'next/router'


export default function Status({ text, state, title,btnErr="Contact Developer",btnText="Go Back", url="/dashboard" }) {
    const router = useRouter()

    const ErrorButtons = () => {

        return (
            <div className="w-full flex justify-center animated fadeIn">

                <div className="m-4 text-xl font-default-accent cursor-emoji" onClick={() => router.push(url)} >{btnText}</div>  <a href="https://api.whatsapp.com/send?text=Error%20Brand&phone=15551234567" className="m-4 text-xl font-default-accent cursor-emoji">{btnErr}</a>

            </div>
        )
    }

    return (
        <div className={"w-full h-screen flex justify-center items-center"}>
            <Head title={title} />

            <div className={"text-3xl md:text-5xl font-default-title text-white capitalize text-center flex-col max-w-lg " + (state ? "" : " animate-pulse")}>
                <h1>
                    {text}
                </h1>

                {state ? 
                <ErrorButtons/> : <></>}



            </div>

        </div>
    )
}

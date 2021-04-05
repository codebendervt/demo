import { useRouter } from 'next/router'

export default function Toolbar(props) {
    const router = useRouter()

    return (


        <div className="w-full h-12 flex-row">
            <span className="font-default-accent text-xl cursor-emoji" onClick={() => router.back()}>Back</span>

            {props.children}
        </div>

    )
}

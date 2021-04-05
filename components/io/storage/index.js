
import { getLocalStorage, setLocalStorage, useEffect, useState, useRouter } from 'components'


export default function Storage({ data }) {

    const [_storage, setStorage] = useState()
    const [updated, setUpdated] = useState(false)
    const [text, setText] = useState("creating")

    const router = useRouter();


    useEffect(() => {
        console.log(data)

        if (data) {

            setStorage(getLocalStorage(data.model))

        }


        return () => {
        }
    }, [])

    useEffect(() => {
        console.log(_storage)

        if (data) {
            if (_storage) {
                updateData(_storage)

            } else {

                let _data = {}
                _data.data = []
                updateData(_data)
            }
        }




        return () => {
        }
    }, [_storage])


    const updateData = (n) => {

        n.data.push(data)
        setLocalStorage(data.model, n)
        setUpdated(true)
        setText('updated')

    }


    return (
        <>

            <h1 className="animate-pulse text-3xl">{text}</h1>

            {updated ? <>
                <div className="text-xl cursor-emoji font-default-accent" onClick={() => router.push("/toolbox")}>go home</div>
            </> : <></>}

        </>
    )
}

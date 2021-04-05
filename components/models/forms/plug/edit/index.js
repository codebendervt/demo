import { useEffect, useState } from 'components'
import Options from './options'
import styles from 'sauveur_style'


export default function EditPlug({ type, name, label, value, func, mode, image, uploaded, model }) {

    const [msg, setMsg] = useState('Upload product image')
    const [animation, setAnimation] = useState('')

    useEffect(() => {

        //console.log(value)
        document.getElementById('image').addEventListener('click', () => {
            setMsg("Uploading image")
            setAnimation("animate-pulse")
        })
        return () => {

        }
    }, [])



    return (
        type == "options" && mode == "create" ? <></> :
            <div id={name} className={`col-span-${colByType(name)} h-${heightByName(name, mode)} bg-gray-800  rounded items-center flex relative flex-col items-center`}>



                <RenderControl name={name} value={value} type={type} func={func} label={label} image={image} uploaded={uploaded} msg={msg} animation={animation} model={model} />


            </div>
    )


}

//#region control


const RenderControl = ({ name, value, type, func, label, image, uploaded, msg, animation, model }) => {

    if (type == "options") {
        return (
            <div className="w-full h-full flex items-center justify-center">

                <Options data={value} id={model} />
            </div>
        )
    } else if (type == "file") {
        //console.log(uploaded)
        return (<>

            <input className="opacity-0 w-full h-full absolute cursor-emoji" name={name} id="fileInput" type="file" onChange={func} />
            {image == null ? (uploaded ? <Notice text="Image is uploaded" /> : <Notice text={msg} animation={animation} />) : <img className="h-72 w-full" src={image} />}

        </>)
    } else if (name == "desc") {
        return (<textarea className={styles.input} rows="3" cols="50" name={name} value={value} onChange={func} />)
    } else {
        return (
            <>
                <div className="w-full  px-2">{label}</div>
                <input className={styles.input} type={type} name={name} value={value} onChange={func} />
            </>
        )

    }

}


const Notice = ({ text, animation }) => {
    return (

        <div className={"text-lg font-default-accent  cursor-emoji flex items-center h-full " + animation}>
            <p>{text}</p>
        </div>

    )

}

//#endregion




//#region configuration
const colByType = (type) => {

    switch (type) {
        case "desc":
            return 3
        case "name":
            return 2
        case "stock":
            return 1
        case "price":
            return 1
        case "image":
            return 3
        default:
            return 2;
    }

}


const colStartByname = (type) => {

    switch (type) {
        case "name":
            return 1
        default:
            return 0
    }

}

const colRowByname = (type) => {

    switch (type) {
        case "desc":
            return 2
        default:
            return 0
    }

}

const heightByName = (type, mode) => {
    switch (type) {
        case "desc":
            return 40
        case "image":
            return mode == "create" ? 20 : 72
        default:
            return 20
    }
}

//#endregion
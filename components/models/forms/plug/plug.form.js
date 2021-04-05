import Head from 'components/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modals from 'components/models'
import EditModal from 'components/models/plug/product/edit'
import styles from 'sauveur_style'
import { $lg } from 'sauveur_core/utility'
import uploadFileToBlob from '../utils/azureUpload.ts';
import HiddenField from '../utils/hidden';
import { target } from 'core/styles/dev.tailwind.config'
import { getBrand, getUser } from 'components/io';
import IsAuth from 'components/status/isAuth'
import EditPlug from './edit';


export default function PlugForm({ mode, type, id, data, initData, length, modal, dataId,cat }) {
    const [_data, setData] = useState(initData)
    const [state, setState] = useState(0);
    //const [modal] = useState(Modals(type).data);
    const [_dataId, setDataId] = useState(dataId);
    const [isUpload, setIsUpload] = useState(false)
    const [brand, setBrand] = useState()
    const [isBrand, setIsBrand] = useState(true)
    const [user, setUser] = useState()
    const [productName, setProductName] = useState()
    const [productImage, setProducImage] = useState()
    const [isMode, setMode] = useState(mode == "create")


    useEffect(() => {


        //console.log(EditModal)
        setUser(getUser().data)
        try {
            setBrand(getBrand().data)


        } catch {
            //console.log('there is no brand')
            modal = Modals("brand").data
            setIsBrand(false)
        }

        setData(initData)
        setProducImage(initData['image'])


        if (mode == "edit") {
            setProductName({name:initData['name']})
        }
        // console.log("this is the brand", brand)
        // console.log("this is the data", _data)


        return () => {

        }
    }, [modal, initData])


    const renderForm = (thedata) => {

        return (

            isMode || !(state == length) ?
                modal.map((i, k) => {
                    return (
                        <div id={k} key={k} className={"w-full " + (state == k ? "animated fadeIn" : formState("hidden"))} >
                            <div className={"p-4"}>
                                <h1 className={styles.title}>{i.name}</h1>

                                <div className={styles.input_border}>
                                    {renderInput(i)}

                                    {

                                        isUpload && i.type == "file" ? <p className="mx-2">image has been uploaded</p> : <div className="w-32" id={i.name}>required</div>
                                    }
                                </div>
                            </div>

                        </div>


                    )
                }) : EditModal.data.map((i, k) => {


                    return (
                        <EditPlug key={i.name + k} type={i.type} name={i.name} value={thedata[i.name]} mode={mode} func={editData} label={i.label} image={productImage} uploaded={isUpload} model={dataId} />
                    )
                })
        )

    }

    const CheckRequired = (e) => {
        let result = e.target.validity.valid ? "Thank you" : "Required";

        return result;

    }

    const configureInput = (type, name, func) => {
        if (name == 'desc') {
            return (
                <textarea className={styles.input} rows="3" cols="50" name={name} onChange={func} required />
            )

        } else {
            return (
                <input placeholder={name} className={styles.input + fileDesign(type)} onChange={func} type={type} name={name} required></input>
            )

        }

    }

    const configureEditInput = (type, name, label, func) => {

        return (

            EditPlug(type, name, label, _data[name], func)
        )
        // if (name == 'desc') {
        //     return (
        //         <textarea className={styles.input} rows="3" cols="50" name={name} value={_data[name]} onChange={func} />
        //     )

        // } else {
        //     return (
        //         <input placeholder={name} className={styles.input + fileDesign(type)} onChange={func} value={_data[name]} type={type} name={name}></input>
        //     )

        // }

    }


    const renderInput = ({ type, name }) => (configureInput(type, name, createData));


    const fileDesign = (type) => {

        if (type == "file") {
            return (
                isUpload ? " hidden" : ""
            )
        } else {
            return ""
        }
    }

    const fileUpload = async (e) => {
        let file = e.target.files[0];
        let ext = file.name.split(".")[1];
        let result = await uploadFileToBlob(file, `${productName.name}-${brand.name}.${ext}`);
        // console.log("file upload ",result)
        setIsUpload(result);

    }

    const createData = (e) => {
        try {
            if (e.target.type == "file") {
                // console.log('uploading file')
                fileUpload(e)

            } else {

                if (e.target.name == 'name') {
                    setProductName({ [e.target.name]: e.target.value })
                    setData({ [e.target.name]: e.target.value })
                } else {
                    let _value = Object.assign(_data, { [e.target.name]: e.target.value })
                    setData(_value)
                }


                // if (e.target.name == 'name') {
                //     setData({ [e.target.name]: e.target.value })
                // }

            }
            let elmText = document.getElementById(e.target.name);
            elmText.innerText = CheckRequired(e);

        } catch (e) {
            console.error("unable to edit form", e)
        }
    }


    const editData = async (e) => {
        try {
            if (e.target.type == "file") {
                fileUpload(e)

            } else {
                if (e.target.name == 'name') {
                    setProductName({ [e.target.name]: e.target.value })
                    setData({ [e.target.name]: e.target.value })
                } else {

                    setData({ [e.target.name]: e.target.value })
                }
            }
        } catch (e) {
            console.error("unable to edit form", e)
        }


    }

    const formState = (states) => (state == length ? "" : states);


    const getUrl = () => {
        return {
            pathname: '/io/form/[mode]',
            query: { mode: "create", type: "brand", id: user.email }
        }
    }

    const changeState = () => {
        setState(state + 1)

        if (state == (length - 1)) {
            console.log("in edit mode")
            setMode(false)
        }
    }
    return (


        isBrand ? <>
            <Head title="The Plug" />

            <div className="flex flex-col w-full h-full lg:w-screen lg:h-screen realtive">

                <div className="flex-grow w-full">
                    <div className={(isMode ? "w-full flex flex-grow h-auto lg:flex-col" : "grid grid-cols-3 flex flex-col flex-grow grid-flow-row-dense gap-2 max-w-lg p-2")}>

                        {renderForm(_data)}


                    </div>
                </div>



                <div className="w-full h-12 sticky inset-x-0 bottom-0 flex p-2 border-t border-double border-black shadow-2xl lg:shadow-none transition duration-500 ease-in-out hover:bg-black">
                    {
                        state < length ? (<a href={"#" + state} className={styles.form_button} onClick={() => changeState()}>next</a>) : (

                            <div className={styles.form_submit}><button type="submit">
                                {mode == "create" ? "submit" : "update"}

                            </button></div>)
                    }

                </div>

            </div>



            <HiddenField type={type} id={id} dataId={_dataId} mode={mode} data={data} cat={cat} />



        </> : <IsAuth auth={false} url={`/io/form/create?type=brand&id=${user.email}`} message={"You Do not have a brand signed up, create one below"} btn="Create Brand" />



    )
}

//`/io/form/create?type=brand&id=${user.email}
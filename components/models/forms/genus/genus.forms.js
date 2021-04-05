import Head from 'components/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modals from 'components/models'
import styles from 'sauveur_style'
import { $lg } from 'sauveur_core/utility';
import uploadFileToBlob from './parts/azureUpload.ts'


export default function GenusForm({ mode, type, id, data, initData, length, modal, dataId }) {
    const [_data, setData] = useState(initData)
    const [state, setState] = useState(0);
    //const [modal] = useState(Modals(type).data);
    const [_dataId, setDataId] = useState(dataId);
    const [isUpload, setIsUpload] = useState(false)


    useEffect(() => {


        if (mode == "edit" ) {
            // console.log("edit mode")
            //setData(initData)
             console.log("local data", _data)
             console.log("init data", initData)
             setData(initData)
            // setLength(0)
            // data.map((i) => {
            //     if(i.id == dataId){
            //         setData(i)
            //     }
            // });

        }



        return () => {

        }
    }, [initData])


    const renderForm = () => {

        return (
            modal.map((i, k) => {
                return (
                    <div id={k} key={k} className={"w-full" + formState("h-screen")} className={state == k ? "animated fadeIn" : formState("hidden")} >
                        <div className="p-4">
                            <h1 className={styles.title}>{i.name}</h1>
                            <div className={styles.input_border}>
                                {mode == "create" ? renderInput(i) : renderEdit(i)}

                                {
                                    isUpload && i.type == "file" ? <p className="mx-2">image has been uploaded</p> : <div className>required</div>
                                }

                            </div>
                        </div>

                    </div>
                )
            })
        )

    }

    const renderInput = ({ type, name }) => (<input placeholder={name} className={styles.input + fileDesign(type)} type={type} name={name} onChange={editData} required></input>)

    const renderEdit = ({ type, name }) => (<input placeholder={name} className={styles.input + fileDesign(type)} type={type} name={name} value={_data[name]} required onChange={editData}></input>)

    const fileDesign = (type) => {

        if (type == "file") {
            return (
                isUpload ? " hidden" : ""
            )
        }
    }

    const editData = async (e) => {

        if (e.target.type == "file") {
            let reader = new FileReader();
            let file = e.target.files[0];
            let ext = file.name.split(".")[1];
            setIsUpload(uploadFileToBlob(file, `${_data.name}.${ext}`));

        } else {

            setData({ [e.target.name]: e.target.value })

        }

    }

    // const getHeaders = (type, length) => {
    //     return {
    //         'Content-Type': type,
    //         'Content-Length': length,
    //         'x-ms-version': "2019-12-12",
    //         'x-ms-blob-type': "BlockBlob",
    //         "Origin": "https://.sauveur.cloud"
    //     }

    // }

    // const uploadImage =  async (files) => {

    //     try {
    //         const promises = [];
    //         for (const file of files) {
    //             const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    //             promises.push(blockBlobClient.uploadBrowserData(file));
    //         }
    //         await Promise.all(promises);
    //         alert('Done.',promises);
    //     }
    //     catch (error) {
    //         console.log(error.message);
    //     }


    // console.log("uploading file...")
    // let status = await getData(`https://sauveurstore.blob.core.windows.net/images/${_data.name}??sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-12-31T20:10:36Z&st=2020-12-30T12:10:36Z&spr=https,http&sig=qZksgXp27LcreQ8kvZ9roYZ2wKthl41KuYCHn6JmcV0%3D`, "PUT", true, false, false, options)

    // console.log(status)
    //}

    const formState = (states) => (state == length ? "" : states);


    return (
        <>

            <div className="w-full flex-grow  overflow-hidden">

                {

                    renderForm()
                }

            </div>


            <div className="w-full h-16 lg:h-24 flex items-end justify-end px-4">
                {
                    state < length ? (<a href={"#" + state} className={styles.form_button} onClick={() => setState(state + 1)}>next</a>) : (<button className={styles.form_button} type="submit">submit</button>)
                }

            </div>

            <input hidden type="text" defaultValue={type} name="model" hidden ></input>
            <input hidden type="text" defaultValue={id} name="id" hidden ></input>
            <input hidden type="text" defaultValue={_dataId} name="dataID" hidden ></input>
            <input hidden type="text" defaultValue={mode} name="mode" hidden ></input>
            <input hidden type="text" defaultValue={JSON.stringify(data)} name="data" hidden ></input>

        </>
    )
}


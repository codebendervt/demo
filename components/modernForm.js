import Head from 'components/head'
import FormModel from 'components/models/forms'
import EditData from 'components/models/forms/edit'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modals from 'components/models'
import styles from 'sauveur_style'
import { $lg } from 'sauveur_core/utility';
import { CreateIssue } from 'components/io';
import Toolbar from 'components/elements/onboarding/node_modules/sauveur_design/toolbar';

export default function ModernForm({ type, mode, id, data, dataId = null,cat }) {
    // _data is the edited data
    //data is the original unformated data 
    const router = useRouter();
    const [_data, setData] = useState({})
    const [state, setState] = useState(0);
    const [modal, setModal] = useState(Modals(type).data);
    const [length, setLength] = useState(Modals(type).data.length);

    useEffect(() => {
        setModal(Modals(type).data);
        setLength(Modals(type).data.length);
        try {

            if (mode == "edit") {
                //console.log("edit mode")
                setLength(0)
                //console.log("this is the data", data)
                if (type == "link") {
                    data.data.links.map((i) => {
                      
                        if (i.id == dataId) {
                            setData(i)
                        }
                    });
                } else {
                    //will have to move this to its own place for models, functions wise

                    setData(EditData(type, data, dataId))

                }


            } else {
                setData({})
                //console.log("this is the data", data)
            }
        } catch (e) {
            CreateIssue("Modern Form", e.message)
        }




        return () => {

        }
    }, [type])



    return (
        <>
            <Head title="Sauveur Form" />
            <div className="relative text-white p-2 lg:p-0">
                <Toolbar />
            </div>

            <form action="/io/status/submit" method="GET" className="w-full h-full flex flex-col text-white py-8">

                {
                    _data ? <FormModel type={type} modal={modal} length={length} data={data} _data={_data} id={id} mode={mode} dataId={dataId} cat={cat} /> : ""
                }


            </form>
        </>
    )
}


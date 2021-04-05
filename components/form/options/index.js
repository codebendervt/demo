import { useEffect, useState, Card } from '../../'


export default function Options({ func, name, model,modal }) {

    const [value, setValue] = useState(false)

    useEffect(() => {


        return () => {
            cleanup
        }
    }, [])




    const cleanup = () => {
        // location(value)
        // console.log("location figured", value)
    }

    const renderOptions = (m) => {

        return (
            m.options.map((i,k) => {
                return (

                    <Card>
                        <div className="w-full h-full cursor-emoji text-black" key={i} onClick={() => setOptions(i,k)}>

                            <div>{i}</div>
                        </div>

                    </Card>

                )
            })
        )

    }

    const setOptions = (term,index) => {

        setValue(term)

        if(modal == "plug"){
            func({ [name]: model.values[index] })
        }else{

            func({ [name]: term })
        }

    }



    return (

        <div className="w-full flex flex-wrap">

            {
                model && !value ? renderOptions(model) : <></>
            }

            {
                value ? <p>you have selected {value}</p> : <></>
            }
        </div>
    )
}

import { useEffect, useState, Link, useRouter } from 'components'


export default function PlugOptions({ id, data }) {
    const router = useRouter()

    useEffect(() => {

        //console.log(router.query)
        //console.log(id)
        //console.log("current data",data)
        return () => {

        }
    }, [router])


    return (

        <>

            <div className="w-full h-full flex items-center justify-center absolute">
                <Link href={`/toolbox/plug/options/${data ? "edit" : "create"}?id=${id}`}>
                    <a className="w-full h-full">{data ? " " : "Add options"} </a>
                </Link>
            </div>

            <div className="w-full h-full flex p-2 justify-center">
                {data ? data.map((i, k) => {
                    if (k < 2) {
                        return (
                            <div key={k} className="m-1 p-2 w-1/3 text-center bg-gray-600 text-xl rounded">{i.name}</div>
                        )
                    } else if (k == 2) {
                        return (
                            <div key={k} className="m-1 p-2 w-1/3 text-center bg-gray-600 text-xl rounded">+{data.length -2}</div>
                        )
                    }

                }) : ""}

            </div>


        </>
    )
}

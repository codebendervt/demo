import {useState} from 'react'

export default function Li({ q, name, id, func,brand }) {

    const [animation, setAnimation] = useState()
    const [url] = useState('https://theoldguard.vercel.app/theplug/')

    const updateList = (id) => {
        setAnimation("animate-pulse")
        func(id)
    }
    return (



        <div className={"flex px-2 my-4 lg:px-12 p-2 h-20"  + animation}>
            <div className="lg:w-96 h-20 bg-gray-700 shadow flex p-2 rounded items-center">
                <div className="flex rounded w-16 h-full bg-gray-600 text-3xl items-center justify-center font-default-title">
                    {q}
                </div>

                <p className="w-auto flex-grow p-2 text-xl font-default-sub-title">{name}</p>

                <div className="flex  flex-col w-32 justify-end h-full ">

                    <div className="flex flex-grow justify-end " >
                        <div className="font-default-accent px-2 cursor-emoji" onClick={() =>updateList(id) }>Delete</div>

                    </div>

                    <div className="flex items-end">
                        <a href={`${url}/${brand.data.name}/${id}`} className="font-default-accent px-2">
                            Preview
                    </a>

                        <a href={`/io/form/edit?type=product&dataId=${id}`} className="font-default-accent px-2">
                            Edit
                    </a>
                    </div>


                </div>
            </div>
        </div>



    )
}

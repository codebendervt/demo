

export default function Card(props) {


    return (

        <div onClick={() => props.onClick()} className="group w-full h-52 lg:w-96 lg:h-56 p-2 cursor-emoji relative">
            <div className="w-full h-full rounded shadow-md lg:shadow hover:shadow-none bg-gray-700 group-hover:bg-gray-800 flex-col  p-4 text-gray-600 group-hover:text-white">
                {props.children}
            </div>

        </div>

    )
}

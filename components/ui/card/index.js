

export default function Card({ width = "2", height = 32, children }) {

    return (
        <div className={`p-4 w-1/${width}`}>
            <div className={`bg-gray-100 w-full h-${height} rounded flex relative animated fadeIn`}>
                <div className="w-full h-full flex flex-col p-2 relative">
                    {children}
                </div>
            </div>
        </div>


    )
}


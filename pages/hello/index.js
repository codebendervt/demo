import { Container, App } from 'components'

export default function Index() {


    const a = () => {
        return (
            <div className="w-full h-full p-2 flex-col">
                <div className="w-full flex">
                    <div className="w-5/6">
                        <h1>Hi Rawk</h1>
                    </div>
                    <div className="w-1/6 flex">
                        <div className="w-8 h-8 bg-white rounded-full">

                        </div>
                    </div>
                </div>
                <div className="w-full flex">
                    <p>Keep track of your subscriptions efficiently</p>
                </div>

                <div className="p-1 flex  flex-col">
                    <div className="flex-row">

                        <div className="w-64 rounded h-36 bg-gray-700"></div>
                    </div>


                    <div className="flex p-1 justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                    </div>
                </div>

                <div className="flex flex-col w-full p-2">
                    <h1 className="my-2">
                        My Subscriotions
                    </h1>

                    <div className="flex flex-row bg-gray-400 rounded-md">
                        <div className="w-1/3 p-2 rounded-md bg-blue-500 text-center ">All</div>
                        <div className="w-1/3 p-2 rounded-md text-center ">upcoming</div>
                    </div>
                </div>

                <div className="h-96 p-2">

                    <div className="h-24 w-full border-b border-b-white p-2 flex items-center">
                        <div className="w-1/2 flex">
                            <div className="w-12 h-12 bg-gray-100 rounded mr-2 "></div>
                            <div className="flex flex-col ">
                               <p className="font-bold">Netflix</p>
                               <p className="text-xs">Monthly</p>
                           </div>
                           
                        </div>
                        <div className="w-1/2 flex justify-end">
                           
                           <div className="flex flex-col ">
                               <p className="font-bold">N 1000</p>
                               <p className="text-xs">Due Today</p>
                           </div>
                           
                        </div>
                    </div>





                </div>

                {/* 
                <div className="h-64"></div>
                <div className="h-64"></div>
                <div className="h-32"></div> */}

            </div>
        )

    }

    const b = () => {
        return (
            <div className="h-full">2</div>
        )
    }

    const app = { home: a, content: b }
    return app
}

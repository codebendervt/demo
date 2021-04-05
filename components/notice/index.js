
import { useEffect, Link, useState } from 'components'


export default function Notice({ message, url, func }) {

    const [animation, setAnimation] = useState('animated fadeInUp delay-1s')
    const [secondAnimation, setsecondAnimation] = useState(' z-30 animated fadeInUp')

    useEffect(() => {
        setTimeout(() =>{
            console.log("help")
            
            setAnimation('animated fadeOutDown')
            setsecondAnimation('animated fadeOutDown delay-1s z-0')
            
        }, 3000);
        return () => {
            console.log('leave')
            func(false)
            //setAnimation('animated fadeOutDown')
        }
    }, [])

    return (



        <div className={`absolute w-screen h-screen flex items-end lg:justify-end lg:p-4  ${secondAnimation}`}>


            <div className={`max-h-80 max-w-md  rounded rounded-t-xl bg-trueGray-900 relative flex z-10  ${animation}`}>

                <div className="w-screen h-full flex-grow p-8 lg:p-6 text-white flex flex-col relative">

                    <div className="w-full flex justify-end">
                        <Link href={url}>
                            <a className="flex justify-end -my-4 font-default-accent z-10 mr-3">home</a>
                        </Link>

                        <div onClick={() => func(false)} className=" flex justify-end -my-4 font-default-accent z-10 ml-3 cursor-emoji">close</div>
                    </div>


                    <h1 className="w-full text-left font-default-title text-3xl">Notice</h1>
                    {/* <h2 className="w-full text-center font-default-sub-title text-xl">FYI will live here</h2> */}

                    <div className="w-full flex justify-center">
                        <p className="w-auto text-right font-default-paragraph text-lg">{message}</p>
                    </div>

                    {/* <div className="w-full flex justify-center ">
                        <div className="font-default-accent mx-8 text-lg">
                            True
                        </div>
                        <div className="font-default-accent mx-8 text-lg">
                            False
                        </div>
                    </div> */}




                </div>

            </div>
        </div>

    )
}

import { Splash, useRouter } from 'components'


export default function PE(props) {

    const router = useRouter()

    const divStyle = (url) => ({
        color: '',
        backgroundImage: `url(${url})`,
    });

    return (

        <>
            <div className="long-space h-12 bg-blue-800 z-10 sticky top-0 p-2">
                <div className="long-space justify-center">
                    <a href="/pe">
                        <img className="w-32 " src='/images/pelogo.svg'></img>
                    </a>

                </div>
            </div>
            <div className="long-space flex-col relative h-screen">

                <Splash />
                <div className="long-space flex-grow z-10  flex-col justify-end py-20 p-8 lg:p-16">
                    <div className="text-4xl max-w-md">
                        Perspective Entertainment
                </div>
                    <div className="text-xl max-w-md">
                        Some Catchy Slogan
                </div>
                </div>
            </div>

            <div className="long-space h-full flex-col bg-white ">
                <div className="long-space flex-col lg:flex-row">
                    <div className="long-space lg:w-1/2 h-96">
                        <div className="long-space h-full bg-cover bg-center" style={divStyle("https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg")}></div>
                    </div>
                    <div className="long-space lg:w-1/2 h-96 bg-gray-200 flex-col p-6 lg:p-12">

                        <h1 className="text-2xl lg:text-4xl font-bold underline">
                            Title of the show
                        </h1>
                        <h2 className="text-xl lg:text-2xl px-1">
                            with Director <span className="font-bold">Name</span>
                        </h2>
                        <div className="my-2 lg:p-1 border-2 border-black  w-32 text-center font-bold cursor-pointer hover:bg-black hover:text-white" onClick={() => router.push('/pe/show')}>
                            Watch Now
                        </div>

                        <p className="my-2 text-lg lg:text-xl max-w-2xl">Fighting the law, rogue managers, and bad boyfriends, three women on the periphery of Pakistani society risk everything to make a living dancing on stage.</p>

                    </div>
                </div>

                <div className="long-space flex-wrap flex-grow">
                    <div className="long-space flex-col lg:w-1/4">
                        <div className="h-64">
                            <div className="w-full h-full bg-cover bg-center" style={divStyle("https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg")}></div>
                        </div>

                        <div className="long-space h-80 bg-gray-100 flex-col p-6">

                            <h1 className="text-2xl lg:text-4xl font-bold underline">
                                Title of the show
                        </h1>
                            <h2 className="text-xl lg:text-2xl px-1">
                                with Director <span className="font-bold">Name</span>
                            </h2>
                            <div className="my-2 lg:p-1 border-2 border-black  w-32 text-center font-bold cursor-pointer">
                                Watch Now
                        </div>

                            <p className="my-2 text-lg lg:text-xl max-w-2xl">Fighting the law, rogue managers, and bad boyfriends, three women on the periphery of Pakistani society risk everything to make a living dancing on stage.</p>
                        </div>

                    </div>
                    {/* <div className="w-full lg:w-1/4 h-96">

                    </div>
                    <div className="w-full lg:w-1/4 h-96">

                    </div>
                    <div className="w-full lg:w-1/4 h-96">

                    </div> */}
                </div>
            </div>
        </>

    )
}

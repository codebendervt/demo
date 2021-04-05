

export default function Show(props) {


    return (

        <div className="flex flex-col">
            <div className="long-space h-12 bg-blue-800 z-10 sticky top-0 p-2">
                <div className="long-space justify-center">
                    <a href="/pe">
                        <img className="w-32 " src='/images/pelogo.svg'></img>
                    </a>

                </div>
            </div>

            <div className="w-full h-screen flex flex-col p-6 lg:px-16">
                <div className="sub-heading my-4">Title of the show</div>
                <div className="w-full h-full relative bg-gray-200">
                    <div className="long-space absolute  z-10 bg-transparent  h-full items-end">
                        <div className="w-44 bg-black h-12 p-2 text-white">
                            1:0:0
                        </div>
                    </div>
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/K2Pky_5ynb0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>

            <div className="w-full h-full flex-col  px-6 lg:px-16">
                <div>2020</div>
                <div className="heading">The title of the show</div>
                <div className="sub-heading px-2">with director name surname</div>

                <div className="long-space flex-col lg:flex-row">

                    <div className="long-space lg:w-1/2  flex-col">
                        <div className="long-space">
                            <div className="flex flex-col my-4">
                                <div className="w-40 h-24 bg-gray-200"></div>
                                <div className="font-bold">Mini Title</div>
                            </div>

                        </div>

                        <div className="w-full flex max-w-3xl">
                            <p>

                                The Great East Japan Earthquake of 2011 triggered a tsunami, nuclear meltdown and mass evacuations in Fukushima Prefecture. Today, as part of a Government push to encourage resettlement, local hunters have been enlisted to dispose of radiated Wild Boars that now roam the abandoned streets and buildings.

                                This short film follows a lone hunter into an isolated and changed landscape. Along the way, other citizens who still live near the reactor share their perspectives on the aftermath. "The Toxic Pigs of Fukushima" was inspired by the photographs of co-producers Toru Hanai and Yuki Iwanami. The original score was written and performed by renowned ambient artist Midori Takada.
                                </p>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col lg:flex-row my-2">

                        <div className="w-full lg:w-1/2 flex flex-wrap lg:flex-col">
                            <div className="p-2">
                                <div className="sub-heading">Name Surname</div>
                                <div className="">Part</div></div>
                            <div className="p-2">
                                <div className="sub-heading">Name Surname</div>
                                <div className="">Part</div></div>

                        </div>

                        <div className="w-full lg:w-1/2 flex-col">
                            <div className="w-80 h-96 bg-gray-100"></div>
                        </div>

                    </div>



                </div>

                <div className="long-space flex-col">
                    <div>Images from the film</div>
                    <div className="flex flex-wrap">
                        <div className="w-96 h-64 bg-gray-100"></div>
                    </div>
                </div>

                <div className="long-space h-40 items-end p-4">
                    <div className="w-1/2 flex">
                        <div className="flex-col flex items-start">
                            <p className="text-left">Previous Episode</p>
                            <p className="text-left">Tile of next episode</p>
                            <div className="btn my-2 hover:bg-black hover:text-white">
                                Watch Now
                        </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div className="flex-col flex items-end">
                            <p className="text-right">Next Episode</p>
                            <p className="text-right">Tile of next episode</p>
                            <div className="btn my-2 hover:bg-black hover:text-white ">
                                Watch Now
                        </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

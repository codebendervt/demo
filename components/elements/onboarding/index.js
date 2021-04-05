import Head from 'sauveur_design/head'
import Toolbar from 'sauveur_design/toolbar';
import Card from 'components/design/card';
import { useState, useEffect } from 'components'

export default function Onboarding({ content }) {


    const [page, setPage] = useState(0)
    const [maxPages] = useState(content.length)



    useEffect(() => {

        let timeoutID = window.setTimeout(() => {
            let _location = location.href

            if (_location.includes("#")) {
                location.href = _location.split("#")[0] + "#" + page
            } else {

                location.href = _location + "#" + page
            }
        }, 1000)



        return () => {
            window.clearTimeout(timeoutID);

        }
    }, [page])


    const handleNext = () => {
        setPage(page + 1)
    }

    const handleBack = () => {
        setPage(page - 1)
    }


    const OnboardPage = ({ id, page, maxPages, children }) => {

        return (
            <div id={id} className="w-screen  h-screen bg-white text-black flex">

                <div className="w-full lg:w-1/2 p-4">
                    <div className={"w-full h-full h-full " + (page == id ? " animated fadeInLeft delay-1s" : "animated fadeOut")}>
                        {children}

                        {
                            maxPages > page ? <div className="font-default-accent cursor-emoji" onClick={handleNext}>next</div> : <></>
                        }

                        {
                            maxPages <= page ? <div className="font-default-accent cursor-emoji" onClick={handleBack}>back</div> : <></>
                        }

                        {
                            maxPages == page ? <div className="font-default-accent cursor-emoji" onClick={handleBack}>submit</div> : <></>
                        }



                    </div>

                </div>

                <div className="w-0 lg:w-1/2 h-full bg-black">
                </div>

            </div>
        )
    }


    return (
        <div className={"w-full h-screen overflow-hidden"}>

            <OnboardPage page={page} maxPages={maxPages} id={0}>
                <h1>Hello World</h1>
            </OnboardPage>
            <OnboardPage page={page} maxPages={maxPages} id={1}>
                <h1>Hello World Again</h1>
            </OnboardPage>





        </div>
    )
}

//if no backpack reroute
//here is where you set the link to go somewhere
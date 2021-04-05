
import { Link, useState } from 'components'
export default function Section({ section, url="" }) {

    const [animation, setAnimation] = useState('animated fadeIn')

    const loading = () => {
        setAnimation('animate-pulse')
    }

    return (
        <Link href={url}>
            <a onClick={() => loading()} className={`w-1/2 h-64 p-2  ${animation}`}>
                <div className="bg-gray-200 w-full h-full flex items-end text-black p-2 rounded">
                    <p>  {section}</p>
                </div>
            </a>
        </Link>




    )
}


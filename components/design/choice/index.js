
import { Link,useState } from 'components'
export default function Choice({ choice,url }) {

    const [animation, setAnimation] = useState('animated fadeIn')

    const loading = () => {
        setAnimation('animate-pulse')
    }

    return (
        <Link href={url}>

            <a onClick={() => loading()} className={`w-64 h-52  p-2 ${animation}`}>
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                    {choice}
                </div>

            </a>
        </Link>


    )
}


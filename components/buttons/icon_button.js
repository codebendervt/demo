import icons from '../icons'

export default function IconButton(props) {


    return (
        <>


    <div onClick={() => props.action()} className="font-default-accent text-xl lg:text-2xl cursor-emoji flex items-center justify-center"><span className="mx-2 font-icon text-3xl lg:text-3xl flex h-auto items-center">{icon(props.icon)}</span>{props.name}</div>



        </>
    )
}


const icon = (name) => {

    switch (name) {
        case 'book':
         return icons.book
        case 'folder':
            return icons.folder
        case "side-clip":
            return icons.side_clip
        case "edit":
            return icons.edit
        case "upload":
            return icons.upload
        default:
            console.log(`Sorry there is no icon ${name}.`);
    }
}
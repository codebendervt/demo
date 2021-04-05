import Account from './account'

export default (data) => {

    switch (data.type) {
        case "account":
            return <Account data={data.data}/>
        default:
            break;
    }
}


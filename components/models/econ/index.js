import bill from './bill'

const EconModels = (model) => {

    switch (model) {
        case "bill":
            return bill
        default:
            break;
    }
}

export default EconModels; 


import Add from './product/add'
import Variant from './product/variants'

const PlugModels = (model) => {

    switch (model) {
        case "add":
            return Add
        case "variant":
            return Variant
        default:
            break;
    }
}

export default PlugModels; 

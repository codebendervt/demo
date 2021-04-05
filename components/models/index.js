import linkModel from './genus/links'
import brand from './genus/brand'
import product from './plug/product';


 const models = (model) => {

    switch (model) {
        case "link":
            return linkModel
        case "brand":
            return  brand
        case "product":
            return  product 
        case "service":
                return  product 
        default:
            break;
    }
}

export default models; 


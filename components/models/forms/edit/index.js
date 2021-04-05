import product from './plug/product';
import brand from './genus/brand'

 const EditData = (type,data,id) => {

    switch (type) {
        // case "link":
        //     return linkModel
        case "brand":
            return  brand(data)
        case "product":
            return  product(data,id) 
        default:
            break;
    }
}

export default EditData; 


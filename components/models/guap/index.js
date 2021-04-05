import SubAccount from './account'
import Transaction from './transaction'

const GuapModels = (model) => {

    switch (model) {
        case "account":
            return SubAccount
        case "transaction":
                return Transaction
        default:
            break;
    }
}

export default GuapModels; 


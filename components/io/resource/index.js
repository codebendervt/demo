import { RequestAPI, APIEndpoint, PushAPI } from '../../models/utils'

const CreateIssue = async (title,message) => {

    let data = {
        title: title,
        msg : message
    }
    return await RequestAPI(APIEndpoint.issue, data)
}


const CommentOnIssue = async (id,message) => {

    let data = {
        id: id,
        msg : message
    }
    return await RequestAPI(APIEndpoint.comment, data)
}



export {CreateIssue,CommentOnIssue}
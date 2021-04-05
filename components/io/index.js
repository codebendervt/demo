import getUser from './user'
import isAuth from './auth'
import {getPlug,UpdateCloudPlug,UpdateLocalPlug,DeletePlug,GetCloudPlug,PlugProduct} from './plug'
import {getBrand,UpdateLocalGenus} from './genus'
import {GetBanks, CreateGuap,InitTransaction,VerifyTransaction,hasAccount,InitSimpleTransaction,GetGuap } from './guap'
import {CreateOrder,GetOrder,UpdateCloudOrder } from './order'
import {BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack} from './backpack'

import {CreateIssue,CommentOnIssue} from './resource';
 import {CreateToken,ReadToken} from './security/token';
import MenuConfig from './menu'
import Storage from './storage'

export {getUser,isAuth,BackpackIdentity,UpdateLocalBackpack,UpdateCloudBackpack,getPlug,getBrand, UpdateCloudPlug,UpdateLocalPlug,DeletePlug,CreateIssue,CommentOnIssue,GetBanks,CreateGuap,InitTransaction,CreateOrder,VerifyTransaction,GetOrder,UpdateCloudOrder,hasAccount,InitSimpleTransaction,UpdateLocalGenus,GetGuap,MenuConfig,Storage,GetCloudPlug,PlugProduct,CreateToken,ReadToken}

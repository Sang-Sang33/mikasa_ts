import "./index"
import axios from "axios"
import { UserID } from "@/utils/interfaceData"
/**
 * @description 用户注册
 * @param {username,password}
 */
export const createUser = (params: UserID) => axios.post('/createUser', params); 
/**
 * @description 用户登录验证
 * @param {username,password} 
 */
export const loginCheck = (params: UserID) => axios.post('/loginCheck', params); 
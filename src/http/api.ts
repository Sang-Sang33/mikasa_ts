import "./index";
import axios from "axios";
import { UserID, UpdateUrl, UpdatePwd } from "@/type";
/**
 * @description 用户注册
 * @param {username,password}
 */
export const createUser = (params: UserID) => axios.post("/createUser", params);
/**
 * @description 用户登录验证
 * @param {username,password}
 */
export const loginCheck = (params: UserID) => axios.post("/loginCheck", params);
/**
 *@description 上传头像
 */
export const uploadAvator = (params: FormData) =>
  axios.post("/aliossUpload", params);
/**
 *@description 修改用户头像与昵称
 */
export const updateUserInfo = (params: UpdateUrl) =>
  axios.post("/updateUserInfo", params);
/**
 * @description 修改用户密码
 */
export const updatePwd = (params: UpdatePwd) =>
  axios.post("/updatePassword", params);

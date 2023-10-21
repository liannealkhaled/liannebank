import instance from ".";
import jwt_decode from "jwt-decode";

// userinfo = username, passward, image

// login
const login = async (userInfo) => {
  const res = await instance.post("/mini-project/api/auth/login", userInfo);
  storeToken(res.data?.token);
  return res.data;
};

// register
const register = async (userInfo) => {
  const formData = new formData();
  for (let key in userInfo) {
    formData.append(key, userInfo(key));
  }
  const res = await instance.post("/mini-project/api/auth/login", formData);
  storeToken(res.data?.token);
  return res.data;
};

// save token
const storeToken = (token) => {
  localStorage.setItem("token", token);
};

// check token
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

//
// const getProfile = async () => {
//   const res = await instance.get("/mini-project/api/auth/me");

//   return res.data;
// };
export { register, login, storeToken, checkToken, getProfile };

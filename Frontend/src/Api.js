import axios from "axios";

// Config
// const data = localStorage.getItem("token");
// axios.defaults.headers.common["Authorization"] = TOKEN;
const Token = "1234566";
// {
//   data && data !== "null" && data !== ""
//     ? ((axios.defaults.headers.common["Authorization"] = data),
//     : ((axios.defaults.headers.common["Authorization"] = Token),
// }
// if (data && data !== "null" && data !== "") {
//   axios.defaults.headers.common["Authorization"] = data;
// } else {
//   axios.defaults.headers.common["Authorization"] = Token;
// }
// const header = {
//   headers: {
//     Authorization: `${TOKEN}`,
//   },
// };

// const API_URL = "http://localhost:4000/";
// const API_URL = "http://f9a4-210-18-139-25.in.ngrok.io/";
// const API_URL = "http://13.126.221.233:3000/";
const API_URL = `${process.env.REACT_APP_DEV_BASE_URL}/`;

const Api = axios.create({
  baseURL: API_URL,
  // header,
});

export default Api;

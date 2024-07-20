import axios from "axios";
export const getLanguageList = setLanguageList => {
  axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/languages/getAll`)
    .then(res => {
      setLanguageList(res.data);
    });
};

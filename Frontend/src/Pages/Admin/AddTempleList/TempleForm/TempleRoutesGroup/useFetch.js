import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (key, url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cancelToken = new axios.CancelToken.source();

    if (key) {
      axios
        .get(`${process.env.REACT_APP_DEV_BASE_URL}/${url}`, {
          cancelToken: cancelToken.token,
        })
        .then(res => {
          setData(res.data);
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            console.log("Cancelled");
          } else {
            console.log("handle cancelled requests");
          }
        });
    }

    return () => {
      cancelToken.cancel();
    };
  }, [key]);

  return [data, setData];
};

export default useFetch;

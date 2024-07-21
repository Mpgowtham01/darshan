import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../components/Redux_Toolkit/allTempleSlice";

export default function useInfiniteScrolling(start, end, params = {}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const dispatch = useDispatch();
  const filterValues = useSelector(state => state.allTemples.filterValues);
  const isItFromSearchModal = useSelector(state => state.allTemples.isItSearchModal);


  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      url: `${process.env.REACT_APP_DEV_BASE_URL}/home/getAllTemples`,
      params: { start, end, ...isItFromSearchModal ? params : filterValues },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        if (res.data.status === "Success") {
          if (res.data.result.length) {
            dispatch(addData(res.data.result));
          }
          setHasMore(res.data.result.length > 0);
          setLoading(false);
        }
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [start, end, filterValues, isItFromSearchModal]);

  return { loading, error, hasMore };
}

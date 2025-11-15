import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchState, setRefetchState] = useState([]);

  const refetch = () => {
    setRefetchState(!refetchState)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${endpoint}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [refetchState]);
  return {data , loading , error , refetch}
};

export default useFetch;

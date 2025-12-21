
import { useEffect, useState } from "react";
import axiosPublic from "../config/axiosPublic";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchState, setRefetchState] = useState([]);

  const refetch = () => {
    setRefetchState(!refetchState)
  }

  useEffect(() => {
   axiosPublic
      .get(`/${endpoint}`)
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

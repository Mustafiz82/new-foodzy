import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext';
import useFetch from './useFetch';
import axiosPublic from '../config/axiosPublic';

const useAdmin = () => {


    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)



    useEffect(() => {
        if (user.email) {
            axiosPublic.get(`isAdmin/${user.email}`)
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.data.isAdmin)
                    setLoading(false)
                })
        }

    }, [user.email])


    return [isAdmin, loading]
};

export default useAdmin;
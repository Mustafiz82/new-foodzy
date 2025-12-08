import React, { useContext, useEffect } from 'react';
import useFetch from '../../hook/useFetch';
import { AuthContext } from '../../context/Authcontext';

const MyOrder = () => {

    const {user} = useContext(AuthContext)

    const {data : orderData , refetch} = useFetch(`orders/${user.email}`)

    console.log(orderData);
    useEffect(() => {
        refetch()
    } , [user])


    return (
        <div>
           <h2 className='text-2xl font-semibold'> My orders</h2>
        </div>
    );
};

export default MyOrder;
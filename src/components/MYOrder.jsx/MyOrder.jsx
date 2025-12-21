import React, { useContext, useEffect } from 'react';
import useFetch from '../../hook/useFetch';
import { AuthContext } from '../../context/Authcontext';

const MyOrder = () => {

    const { user } = useContext(AuthContext)

    const { data: orderData, refetch } = useFetch(`my-orders/${user.email}`)

    console.log(orderData);
    useEffect(() => {
        refetch()
    }, [user])


    return (
        <div>
            <h2 className='text-2xl font-semibold'> My orders</h2>



            {
                orderData?.map(item => <div className='my-10  border-2 p-5 border-gray-600'>
                    <div className='flex justify-between'>
                        <div>
                             <h2 className='text-lg '><span className='font-semibold'> Order ID :</span> {item?._id}</h2>
                             <h2 className='text-lg '><span className='font-semibold'> Payment Method :</span> {item?.paymentMethod}</h2>
                             <h2 className='text-lg '><span className='font-semibold'> Order Date :</span> {new Date (item?.orderDate).toDateString()}</h2>

                        </div>

                        <div>
                            <p className='bg-gray-200 p-2  px-5 rounded-full'>{item?.orderStatus} </p>
                        </div>
                    </div>

                    <div className='border-2 space-y-5 border-gray-600 p-5 mt-5 '>

                        {
                            item.products.map(item => <div className='flex justify-between' >
                            <div className="flex gap-3">
                                <img src={item.imageUrls[0]} className='w-20 object-cover  h-20' alt="" />

                                <div>
                                    <h2 className='text-xl mb-2 font-semibold '>{item.title} </h2>
                                    <p>Quantity : {item.quantity}</p>
                                </div>

                            </div>



                            <div>
                                <span className="font-bold text-primary text-[28px]"> ${item.buyingPrice} </span>
                            </div>

                        </div> )
                        }
                        
              
                    </div>
                </div>
                )
            }


        </div>
    );
};

export default MyOrder;
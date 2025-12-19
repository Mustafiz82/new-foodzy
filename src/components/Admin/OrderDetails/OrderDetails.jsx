import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useFetch from '../../../hook/useFetch';

const OrderDetails = () => {

    const { id } = useParams()
    const { data, refetch } = useFetch(`all-order/${id}`)

    useEffect(() => {
        refetch()
    }, [id])

    console.log(data);
    return (
        <div className='p-5' >
            <h2 className='text-xl font-semibold'>Order details</h2>

            <div className='grid grid-cols-2 gap-10 mt-5 '>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>buying Price</th>
                                <th>Quantity </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}


                            {
                                data?.products?.map((item, index) => <tr className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td className="flex h-full  items-center gap-2">
                                        <img className="w-10 h-10 " src={item.imageUrls?.[0]}></img>{" "}
                                        {item.title}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.buyingPrice}</td>
                                    <td>{item.quantity}</td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>


                <div className='grid mt-10 grid-cols-[150px_1fr]'>
                        <p className='font-semibold'>First Name : </p>
                        <span>{data.first_name}</span>
                        <p className='font-semibold'>Last Name : </p>
                        <span>{data.last_name}</span>
                        <p className='font-semibold'>Address : </p>
                        <span>{data.address}</span>
                        <p className='font-semibold'>Email : </p>
                        <span>{data.email}</span>
                        <p className='font-semibold'>City : </p>
                        <span>{data.city}</span>
                        <p className='font-semibold'>Post Code : </p>
                        <span>{data.post_code}</span>
                        <p className='font-semibold'>country : </p>
                        <span>{data.country}</span>
                        <p className='font-semibold'>Payment Method : </p>
                        <span>{data.paymentMethod}</span>
                        <p className='font-semibold'>Payment Status : </p>
                        <span>{data.paymentStatus}</span>
                        <p className='font-semibold'>Order ID : </p>
                        <span>{data._id}</span>
                        <p className='font-semibold'>Order Date : </p>
                        <span>{new Date(data?.orderDate).toLocaleDateString()}</span>
                </div>
            </div>


        </div>
    );
};

export default OrderDetails;
import React from 'react';
import useFetch from '../../../hook/useFetch';
import { Link } from 'react-router';

const ManageOrder = () => {


    const {data , loading } = useFetch("all-orders")

    console.log(data);


    const calculateTotalPrice  = (products) => {
        console.log(products[0].buyingPrice);
        return products.reduce((acc , cv) => acc + parseFloat(cv.buyingPrice) , 0)
    }

    return (
        <div className='p-5'>
            <h2 className="text-xl font-semibold">Manage Order</h2>


            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order date</th>
                            <th>Order ID</th>
                            <th>Customer Name </th>
                            <th>Customer email</th>
                            <th>Product count</th>
                            <th>Total Price </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            data.map((item , i) =>  <tr className="bg-base-200">
                            <th>{i + 1}</th>
                            <th>{new Date (item?.orderDate).toDateString()}</th>
                            <td>{item._id}</td>
                            <td> {item.first_name} {item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.products.length}</td>
                            <td>${calculateTotalPrice(item.products)}</td>
                            <td><Link to={`${item._id}`} className='btn btn-primary'>View Details</Link></td>
                        </tr>)
                        }

                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;
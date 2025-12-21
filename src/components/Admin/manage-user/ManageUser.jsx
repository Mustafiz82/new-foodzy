import React from 'react';
import useFetch from '../../../hook/useFetch';
import { Link } from 'react-router';
import axios from 'axios';
import axiosPublic from '../../../config/axiosPublic';

const ManageUser = () => {


    const {data  , refetch } = useFetch("user")

    console.log(data);


    const handleMakeAdmin = (email) => {
        axiosPublic.patch(`/user/make-admin/${email}`)
        .then(res => {
            console.log(res.data)
            refetch()
        })
    }

 

    return (
        <div className='p-5'>
            <h2 className="text-xl font-semibold">Manage User</h2>


            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th>Action</th>
        
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            data.map((item , i) =>  <tr className="bg-base-200">
                            <th>{i + 1}</th>
                            <th>{item?.name}</th>
                            <td>{item?.email}</td>
                            <td> {item?.role || "user"}</td>
                        
                            <td>{ item.role == "admin" ? "admin" : <button onClick={() => handleMakeAdmin(item.email)} className='btn btn-primary'>Make Admin</button> }</td>
                        </tr>)
                        }

                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
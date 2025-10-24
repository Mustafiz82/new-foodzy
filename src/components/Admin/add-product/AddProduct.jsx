import React from 'react';
import Editor, { SimpleToolbar } from './Editor';
import EditorComponent from './Editor';

const AddProduct = () => {
    return (
        <div className='p-5'>
           <h2 className='text-xl font-semibold'>Add New Product</h2>
            <form >
                <div className='flex w-full justify-between gap-5 '>
                    <div className='mt-5 w-3/5'>
                        <input placeholder='Product Name' type="text" className='input input-bordered w-full  focus:outline-0' />

                       {/* <EditorComponent/> */}
                       <SimpleToolbar/>

                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;
import React from 'react'
import { useForm } from 'react-hook-form'

function RHF() {

    let { register, handleSubmit, reset, formState: { errors } } = useForm();
    let formdata = (data) => {
        console.log(data);
        reset();
    }

    // console.log(data);

    return (
        <div className='flex flex-col w-80 gap-4 bg-white p-4 rounded-md'>
            <form onSubmit={handleSubmit(formdata)} className='flex flex-col gap-4'>
                <input
                    {...register("productName", { required: true })}
                    className='p-2 border border-gray-400 rounded' type="text" placeholder='Product name' />
                <input
                    {...register("procuctPrice", { required: true })}
                    className='p-2 border border-gray-400 rounded' type="text" placeholder='Product price' />
                <span>Select Category</span>
                <select
                    {...register("procuctCatg", { required: true })}
                    className='p-2 border border-gray-400 rounded'>
                    <option value="MENS">Mens</option>
                    <option value="WOMENS">Women</option>
                    <option value="KIDS">Kids</option>
                </select>
                <input
                    {...register("procuctImage", { required: true })}
                    className='p-2 border border-gray-400 rounded' text="text" placeholder='Image url' />
                <button className='bg-blue-600 text-white p-2 rounded'>Create</button>
            </form>
        </div>
    )
}

export default RHF
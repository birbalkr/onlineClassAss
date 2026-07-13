import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from "nanoid"

function Form({ setTogggle, setUserData, users, updatedData }) {
    let { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: updatedData
    })

    console.log("update -> ", users);

    const handleForm = (data) => {
        if (updatedData) {
            // update code 
            setUserData((prev) => {
                return prev.map((val) => {
                    return val.id === updatedData.id ? { ...data, id: updatedData.id } : val
                })
            })

        }
        else {
            let arr = [...users, { ...data, id: nanoid() }];
            setUserData(arr);
            localStorage.setItem("users", JSON.stringify(arr));
        }
        reset()
        setTogggle((prev) => !prev)
    }

    return (
        <div className='flex flex-col p-4 border rounded-xl shadow-md w-82 gap-4 m-5'>
            <h1 className='text-3xl'>Create user</h1>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(handleForm)}>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                <input
                    {...register("name", { required: "Name is required", })}
                    type="text" placeholder='Name' className='border p-2 rounded-xl' />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                <input
                    {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })}
                    type="email" placeholder='Email' className='border p-2 rounded-xl' />
                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                <input
                    {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
                    type="number" placeholder='Phone' className='border p-2 rounded-xl' />
                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                <input
                    {...register("image", { required: "Image is required", pattern: { value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, message: "Invalid URL" } })}
                    type="url" placeholder='Image' className='border p-2 rounded-xl' />
                <button className='py-2 px-3 bg-blue-600 rounded-xl'>Submit</button>
            </form>
        </div>
    )
}

export default Form
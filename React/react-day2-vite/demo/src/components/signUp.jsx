import { useState } from 'react'

function SignUp({ setUsers }) {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        image: ''
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData
            , [name]: value
        })

        console.log([name], "**", value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev, formData]);

        setFormData({
            username: '',
            email: '',
            image: ''
        });


    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col w-80 border p-4 gap-2 rounded-2xl'>
                <label htmlFor="username">Username:</label>
                <input value={formData.username} onChange={handleChange} type="text" name="username" required className='border' />

                <label htmlFor="email">Email:</label>
                <input value={formData.email} onChange={handleChange} type="text" name="email" required className='border' />

                <label htmlFor="image">Profile Image:</label>
                <input value={formData.image} onChange={handleChange} id="image" name="image" className='border' />

                <button type="submit" className='bg-blue-500 text-white p-2 rounded-lg'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
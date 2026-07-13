import React from 'react'

function UserCard({ users, del, setUpdatedData, setTogggle }) {


    return (

        <div className='flex flex-col p-2 border rounded-xl shadow-md w-64 gap-4 mt-4'>
            <div className='w-full flex justify-center'>
                <img className='rounded-xl w-full h-44' src={users.image} alt="image" />
            </div>
            <div className='flex flex-col gap-1'>
                <h1>Name : {users.name}</h1>
                <p>Email : {users.email}</p>
                <p>Phone : {users.phone}</p>
            </div>
            <div className='flex gap-2 justify-end'>
                <button className='py-2 px-3 bg-blue-600 rounded-xl' onClick={() => { setUpdatedData(users); setTogggle((prve) => !prve) }}>Update</button>
                <button className='py-2 px-3 bg-blue-600 rounded-xl' onClick={() => del(users.id)
                }>Delete</button>
            </div>

        </div>
    )
}

export default UserCard
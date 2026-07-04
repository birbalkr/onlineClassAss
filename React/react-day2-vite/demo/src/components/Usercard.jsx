
function Usercard({user}) {
    return (
        <div className='flex flex-col w-80 border p-4 gap-2 rounded-2xl'>
            <div className="text-2xl text-center">Usercard</div>
            <div>
                <img src={user.image} alt="imgae" />
                <div className="text-xl">Username: {user.username}</div>
                <div className="text-xl">Email: {user.email}</div>
            </div>

        </div>
    )
}

export default Usercard
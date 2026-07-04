
function Usercard({user}) {
    return (
        <div className='flex flex-col w-80 border p-4 gap-2 rounded-2xl'>
            <div className="text-2xl text-center">Usercard</div>
            <div>
                <img src={user.image} alt="imgae" />
            </div>

        </div>
    )
}

export default Usercard
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/SearchSlice';

function SearchBar() {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
    };

    const dispatch = useDispatch()

    return (
        <div>
            <form className='flex p-6 gap-5' onSubmit={(e) => { handleSubmit(e) }}>
                <input
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                    required
                    className='w-full border-2 px-4 py-2 text-xl rounded outline-none' type="text" placeholder='Search anything......' />
                <button className='cursor-pointer active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar

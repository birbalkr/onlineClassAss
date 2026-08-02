import React from 'react'


function Filters() {


    return (
        <div className="w-full bg-black py-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">

                <input
                    
                    type="text"
                    placeholder="Search Product..."
                    className="flex-1 px-4 py-3 bg-zinc-900 text-white border border-zinc-700 rounded-lg outline-none focus:border-blue-500 placeholder:text-zinc-500"
                />

                <select className="px-4 py-3 bg-zinc-900 text-white border border-zinc-700 rounded-lg outline-none focus:border-blue-500">
                    <option value="">All Categories</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="groceries">Groceries</option>
                </select>

                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Search
                </button>

            </div>
        </div>
    )
}

export default Filters
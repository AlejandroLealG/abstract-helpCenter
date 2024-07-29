import React from 'react';

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className='w-full flex flex-col items-center bg-[#dadbf1] pb-24'>
            <h2 className='text-center text-7xl font-semibold mb-4 mt-12 pb-8'>How can we help?</h2>
            <input
                className='flex-grow border p-2 rounded-l flex w-2/3 mb-4 border-1 border-black hover:border-blue-700'
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search"
            />
        </div>
    );
};

export default SearchBar;

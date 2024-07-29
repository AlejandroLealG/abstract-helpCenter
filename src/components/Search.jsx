import { data } from '../lib/data';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = () => {
    const [search, setSearch] = useState('');

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(search.toString().toLowerCase())
    );

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} />
            <SearchResults filteredData={filteredData} />
        </div>
    );
};

export default Search;


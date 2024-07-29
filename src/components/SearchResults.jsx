import React from 'react';

const SearchResults = ({ filteredData }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 bg-white px-20 py-32'>
            {filteredData.map((item) => (
                <article className="flex flex-col md:flex-row gap-6 p-8 px-6" key={item.id}>
                    <div className='flex-shrink-0'>
                        <picture>
                            <img src={item.imagen} className="h-24 w-24 object-contain" />
                        </picture>
                    </div>
                    <div>
                        <div>
                            <h4 className="font-bold text-2xl">{item.title}</h4>
                            <p className='text-lg'>{item.description}</p>
                            <a href={item.more} className="text-blue-700 mt-2 inline-block">Learn more...</a>
                        </div>     
                    </div>
                </article>
            ))}
        </div>
    );
};

export default SearchResults;

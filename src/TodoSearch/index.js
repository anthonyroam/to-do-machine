import React from 'react';

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
  
    return( 
    <input 
        className='py-2 px-4 rounded-md ring- bg-Very-Dark-Desaturated-Blue text-Light-Grayish-Blue focus:ring-Light-Grayish-Blue-hover shadow-xl'
        placeholder={loading ? `` :`Search for todo...`}
        value={searchValue} 
        onChange={onSearchValueChange}
        disabled={loading}
    />
    )
}

export { TodoSearch };
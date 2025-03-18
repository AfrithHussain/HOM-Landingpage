import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Debounce function
  const debounce = (fuc, delay)=>{
   let timeArugument;
   return(...args)=>{
    clearTimeout(timeArugument);
    timeArugument = setTimeout(()=>fuc(...args), delay);
   }
  }

   const debounceHandler = debounce(onSearch, 600);

   const  handleInputCahnge = (e) =>{
     let val = e.target.value;
     setQuery(val);
     debounceHandler(val);
   }
  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={handleInputCahnge}
        className="w-[60%]  border-neutral-100 ring-neutral-300 ring-3 outline-none p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
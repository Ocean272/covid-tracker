import React, { useState, useEffect } from 'react'
import Alex from "./componentsTwo/AlexTwo";

function AlexContainer() {
  const [query, setQuery] = useState ("");

  const keys = ["count_of_case", "vaccination_status", "as_of_date", "clinicalstatus"]
  const search = (icu)=>{
    return icu.filter(
      (item) =>
      keys.some(key=>item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className= "app">
      <input type="text" 
      placeholder="Search..." 
      className="search" 
      onChange={e=> setQuery(e.target.value)} 
      />
      <Alex data={search(Alex)} />
    </div>
  )
}

export default AlexContainer;
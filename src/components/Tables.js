import React from 'react';

function Tables({ data }) {
 
  
  const info = data?.data?.['bat-rank']?.rank; 
 
  
 

  return (

    <div class="border border-gray-500 mx-5 w-[300px] rounded">
        <div className='font-bold ps-[220px]'>
    {data?.data?.['bat-rank']?.['rank-type']}</div>
    <div class="flex justify-between items-center py-1 border-b border-slate-1000">
    <div class="w-10 px-1">Rank</div>
        <div class="w-1/2">Country</div>
        <div class="w-1/4">Rating</div></div>
    {info && info.map((item, index) => (
      <div key={index} class="flex justify-between items-center py-2 border-b border-slate-1000">
        <div class="w-10 px-1">{index+1}</div>
        <div class="w-1/2">{item.Country}</div>
        <div class="w-1/4">{item.Rating}</div>
      </div>
    ))}
  </div>
  
  

  );
}

export default Tables;

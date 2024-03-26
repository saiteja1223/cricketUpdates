import React from 'react'

function WAllRounder({data}) {
    const info = data?.data?.['bat-rank']?.rank; 
   //console.log(info);
  return (
    <div class="border border-gray-500 mx-5 w-[300px] rounded">
    <div className='font-bold ps-[220px]'>
{data?.data?.['bat-rank']?.['rank-type']}</div>
<div class="flex justify-between items-center py-1 border-b border-slate-1000">
<div class="w-10 px-1">Rank</div>
    <div class="w-1/2">Name</div>
    <div class="w-1/4">Rating</div></div>
{info && info.map((item, index) => (
  <div key={index} class="flex justify-between items-center py-2 border-b border-slate-1000">
    <div class="w-10 px-1">{item.no}</div>
    <div class="w-1/2">{item['Player-name']}</div>
    <div class="w-1/4">{item.Points}</div>
  </div>
))}
</div>



);
}
export default WAllRounder
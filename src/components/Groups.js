import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Groups() {
  const navigate = useNavigate();
  const { category } = useParams(); // Destructure the category parameter from useParams
  console.log(category, "category");

  function handleGroups(val) {
    navigate(`/ranking/${category}/${val}`);
    console.log(category);
    console.log(`/ranking/${category}/${val}`, "groups");
  }

  return (
    <div className='flex py-3 px-7 gap-5'>
        <button className='border bg-gray-200 rounded px-1' onClick={() => handleGroups('team')}>Team</button>
        <button className='border bg-gray-200 rounded px-1' onClick={() => handleGroups('batter')}>Batter</button>
        <button className='border bg-gray-200 rounded px-1' onClick={() => handleGroups('bowler')}>Bowler</button>
        <button className='border bg-gray-200 rounded px-1' onClick={() => handleGroups('allRounder')}>All Rounder </button>
    </div>
  );
}

export default Groups;

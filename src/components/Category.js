import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Category() {
  const navigate=useNavigate()
  const{group}=useParams()
  console.log(group,"group")
  function handleCategory(val){
    navigate(`/ranking/${val}/${group}`)
    console.log(`/ranking/${val}/${group}`,"category")

  }
  return (
    <div className='w-full h-10 bg-black 100 flex text-white align-center px-10 '>
        <div className='text-l px-20' >Category </div>
        <div className='px-5 py-1'onClick={()=>handleCategory('mens')}>Men </div>
        <div className='px-2 py-1' onClick={()=>handleCategory('womens')}>Women</div>
    </div>
  )
}

export default Category
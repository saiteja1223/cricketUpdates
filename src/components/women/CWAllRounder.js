import React, { useEffect, useState } from 'react'

import axios from 'axios'


import WAllRounder from './WAllRounder'
import { wOdiAllRounder, wT20AllRounder } from '../../utils/Api'

function CWAllRounder() {
    
    const[odiAllRounder,setOdiAllRounder]=useState({})
    const[t20AllRounder,setT20AllRounder]=useState({})
    useEffect(()=>{
 
  getOdiAllRounder();
  getT20AllRounder();
    },[])
    
     async function getOdiAllRounder(){
        const responce =await axios.get(wOdiAllRounder);
        setOdiAllRounder(responce.data)
       
     }
     async function getT20AllRounder(){
        const responce =await axios.get(wT20AllRounder);
        setT20AllRounder(responce.data)
       
     }
  return (
    <div >
    <h1 className='p-4 px-6 font-bold text-xl	'> Women AllRounder Ranking</h1>
    <div className='flex justify-center' >
       
        <WAllRounder data={odiAllRounder}></WAllRounder>
        <WAllRounder data={t20AllRounder}></WAllRounder>
    </div>
    </div>
  )
}

export default CWAllRounder
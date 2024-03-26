import React, { useEffect, useState } from 'react'

import axios from 'axios'


import WTeam from './WTeam'
import { wOdiTeam, wt20Team } from '../../utils/Api'

function CWTeam() {
    
    const[odi,setOdi]=useState({})
    const[t20,setT20]=useState({})
    useEffect(()=>{
 
  getOdi();
  getT20();
    },[])
    
     async function getOdi(){
        const responce =await axios.get(wOdiTeam);
        setOdi(responce.data)
       
     }
     async function getT20(){
        const responce =await axios.get(wt20Team);
        setT20(responce.data)
       
     }
  return (
    <div >
    <h1 className='p-4 px-6 font-bold text-xl	'> Women Team  Ranking</h1>
    <div className='flex justify-center' >
       
        <WTeam data={odi}></WTeam>
        <WTeam data={t20}></WTeam>
    </div>
    </div>
  )
}

export default CWTeam
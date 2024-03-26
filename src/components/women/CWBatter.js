import React, { useEffect, useState } from 'react'

import axios from 'axios'


import WBatter from './WBatter'
import { wOdiBatter, wT20Batter } from '../../utils/Api'

function CWBatter() {
    
    const[odiBatter,setOdiBatter]=useState({})
    const[t20Batter,setT20Batter]=useState({})
    useEffect(()=>{
 
  getOdiBatter();
  getT20Batter();
    },[])
    
     async function getOdiBatter(){
        const responce =await axios.get(wOdiBatter);
        setOdiBatter(responce.data)
       
     }
     async function getT20Batter(){
        const responce =await axios.get(wT20Batter);
        setT20Batter(responce.data)
       
     }
  return (
    <div >
    <h1 className='p-4 px-6 font-bold text-xl	'> Women Batter Ranking</h1>
    <div className='flex justify-center' >
       
        <WBatter data={odiBatter}></WBatter>
        <WBatter data={t20Batter}></WBatter>
    </div>
    </div>
  )
}

export default CWBatter
import React, { useEffect, useState } from 'react'

import axios from 'axios'


import WBowler from './WBowler'
import { wOdiBowler, wT20Bowler } from '../../utils/Api'

function CWBowler() {
    
    const[odiBowler,setOdiBowler]=useState({})
    const[t20Bowler,setT20Bowler]=useState({})
    useEffect(()=>{
 
  getOdiBowler();
  getT20Bowler();
    },[])
    
     async function getOdiBowler(){
        const responce =await axios.get(wOdiBowler);
        setOdiBowler(responce.data)
       
     }
     async function getT20Bowler(){
        const responce =await axios.get(wT20Bowler);
        setT20Bowler(responce.data)
       
     }
  return (
    <div >
    <h1 className='p-4 px-6 font-bold text-xl	'> Women Bowler Ranking</h1>
    <div className='flex justify-center' >
       
        <WBowler data={odiBowler}></WBowler>
        <WBowler data={t20Bowler}></WBowler>
    </div>
    </div>
  )
}

export default CWBowler
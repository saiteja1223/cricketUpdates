import React, { useEffect, useState } from 'react'
import Batter from './Batter'
import axios from 'axios'
import { odiBatters, t20Batters, testBatters } from '../utils/Api'

function Cbatter() {
    const[testbatter,setTestbatter]=useState({})
    const[odibatter,setOdibatter]=useState({})
    const[t20batter,setT20batter]=useState({})
    useEffect(()=>{
  gettestbatsmen();
  getOdibatsmen();
  getT20batsmen();
    },[])
    async function gettestbatsmen(){
        const responce =await axios.get(testBatters);
        setTestbatter(responce.data)
        
     }
     async function getOdibatsmen(){
        const responce =await axios.get(odiBatters);
        setOdibatter(responce.data)
       
     }
     async function getT20batsmen(){
        const responce =await axios.get(t20Batters);
        setT20batter(responce.data)
       
     }
  return (
    <div >
    <h1 className='p-4 px-6 font-bold text-xl	'>  Mens Batter Ranking</h1>
    <div className='flex justify-center' >
        <Batter data={testbatter}></Batter>
        <Batter data={odibatter}></Batter>
        <Batter data={t20batter}></Batter>
    </div>
    </div>
  )
}

export default Cbatter
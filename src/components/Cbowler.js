import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { odiBowling, t20Bowling, testBowling } from '../utils/Api'
import Bowler from './Bowler'

function CBowler() {
    const[testBowler,setTestBowler]=useState({})
    const[odiBowler,setOdiBowler]=useState({})
    const[t20Bowler,setT20Bowler]=useState({})
    useEffect(()=>{
  gettestBowler();
  getOdiBowler();
  getT20Bowler();
    },[])
    async function gettestBowler(){
        const responce =await axios.get(testBowling);
        setTestBowler(responce.data)
        
     }
     async function getOdiBowler(){
        const responce =await axios.get(odiBowling);
        setOdiBowler(responce.data)
       
     }
     async function getT20Bowler(){
        const responce =await axios.get(t20Bowling);
        setT20Bowler(responce.data)
       
     }
  return (
    <div >
    <h1 className='p-4 px-6 font-bold text-xl	'>  Mens Bowler Ranking</h1>
    <div className='flex justify-center' >
        <Bowler data={testBowler}></Bowler>
        <Bowler data={odiBowler}></Bowler>
        <Bowler data={t20Bowler}></Bowler>
    </div>
    </div>
  )
}

export default CBowler
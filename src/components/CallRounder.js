import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { odiAllRounder, t20AllRounder, testAllRounder } from '../utils/Api'
import AllRounder from './AllRounder'


function CallRounder() {
    const[testAllRounder1,setTestAllRounder]=useState({})
    const[odiAllRounder1,setOdiAllRounder]=useState({})
    const[t20AllRounder1,setT20AllRounder]=useState({})
    useEffect(()=>{
  gettestAllRounder();
  getOdiAllRounder();
  getT20AllRounder();
    },[])
    async function gettestAllRounder(){
        const responce =await axios.get(testAllRounder);
        setTestAllRounder(responce.data)
        
     }
     async function getOdiAllRounder(){
        const responce =await axios.get(odiAllRounder);
        setOdiAllRounder(responce.data)
       
     }
     async function getT20AllRounder(){
        const responce =await axios.get(t20AllRounder);
        setT20AllRounder(responce.data)
       
     }
  return (
    <div >
    <h1 className='p-4 px-6 font-bold text-xl	'>  Mens AllRounder Ranking</h1>
    <div className='flex justify-center' >
        <AllRounder data={testAllRounder1}></AllRounder>
        <AllRounder data={odiAllRounder1}></AllRounder>
        <AllRounder data={t20AllRounder1}></AllRounder>
    </div>
    </div>
  )
}

export default CallRounder
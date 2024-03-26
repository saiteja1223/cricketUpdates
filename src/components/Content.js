import React, { useEffect, useState } from 'react';
import Tables from './Tables';
import axios, { Axios } from 'axios';
import { oditeam, t20team, testteam } from '../utils/Api';
import Cbatter from './Cbatter';
import CBowler from './Cbowler';
import CallRounder from './CallRounder';
import CWTeam from './women/CWTeam';
import CWBatter from './women/CWBatter';
import CWBowler from './women/CWBowler';
import CWAllRounder from './women/CWAllRounder';


function Content() {
   const[info,setInfo]=useState({})
   const[odi,setOdi]=useState({})
   const[t20,setT20]=useState({})
   useEffect(()=>{
      getData();
      getodiData()
      gett20Data();
   },[])
  async function getData(){
   const responce=await axios.get(testteam);
      setInfo(responce.data);
      // console.log(responce.data.data['bat-rank'].last_updated,"lastupdate")
     // console.log(responce.data.data['bat-rank'].rank[0].Country,"country")
     //   console.log("content")
   }
   async function getodiData(){
       const responce=await axios.get(oditeam)
       setOdi(responce.data)
   }
   async function gett20Data(){
      const responce=await axios.get(t20team)
      setT20(responce.data)
   }
  return (
     <div >
      <h1 className='p-4 px-6 font-bold text-xl	'>Mens team Ranking</h1>
      <div className='flex justify-center'>
        <Tables data={info}></Tables>
        <Tables data={odi}></Tables>
        <Tables data={t20}></Tables>
        </div>
        {/* <Cbatter></Cbatter>
        <CBowler></CBowler>
        <CallRounder></CallRounder>
        <CWTeam></CWTeam>
        <CWBatter></CWBatter>
        <CWBowler></CWBowler>
        <CWAllRounder></CWAllRounder> */}
     </div>
  )
}

export default Content
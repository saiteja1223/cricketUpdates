import React, { useState } from 'react'
import Category from './Category'
import Groups from './Groups'
import Content from './Content'
import { useParams } from 'react-router-dom'
import CWTeam from './women/CWTeam'
import Cbatter from './Cbatter'
import CWBatter from './women/CWBatter'
import CBowler from './Cbowler'
import CallRounder from './CallRounder'
import CWBowler from './women/CWBowler'
import CWAllRounder from './women/CWAllRounder'


function Body() {
    const {category,group}=useParams();
    
    console.log(category,group)
    let comp;
    if(category=='mens'){
      if(group=="team"){
       comp=<Content></Content>}
       else if(group=="batter"){
        comp=<Cbatter></Cbatter>
       }
       else if(group=='bowler'){
         comp=<CBowler></CBowler>
       }
       else if(group=='allRounder'){
        comp=<CallRounder></CallRounder>

       }
    }
    else if(category=='womens'){
      if(group=='team'){
      comp=<CWTeam></CWTeam>}
      else if(group=='batter')
      {
        comp=<CWBatter></CWBatter>
      }
      else if( group=='bowler'){
        comp=<CWBowler></CWBowler>

      }
      else if(group=='allRounder'){
          comp=<CWAllRounder></CWAllRounder>
      }
    }
   
  return (
     <>
       <Category></Category>
       <Groups></Groups>
      
       {comp}
    
     </>
  )
}

export default Body
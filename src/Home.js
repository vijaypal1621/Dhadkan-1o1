import React from "react";
import "./Home.css";
import Zone from './Zone.js';
import level0 from './level0.png';
import level2 from './level2.png';
import level3 from './level3.png';
import level4 from './level4.png';
import level5 from './level5.png';
import {useEffect,useState} from 'react';
// import firebase from '../src/firebase.js';
// import firebase from 'firebase';
// import db from './firebase';
// import firebase from './firebase';
// import firebase from 'firebase';
import {db} from './firebase';
import {onValue, ref} from 'firebase/database';



function rangeColor( pulseCount)
{
    if(pulseCount >= 150){
        return "#ff2052";
    }
    else if(pulseCount >= 100){
        return "#ed872d";
    }
    else if(pulseCount >= 70){
        return "#03c03c";
    }
    else if(pulseCount >= 50){
        return "#007fff";
    }
    else{
        return "grey";
    }
}

function Home(){

    const [pulseRate , setPulseRate] = useState("");
  
    useEffect(()=>{
      onValue(ref(db),(snapshot) =>{
        setPulseRate(snapshot.val().pulse);
        
        // console.log(pulseRate);
        // console.log(snapshot.val().pulse);
        // console.log(pulseRate);
      } );
  
    }, [pulseRate]);


    return (
        <>
        <div className="home row justify-content-center" style={{margin : "auto 0px"}} >
            <div className="left offset-3 offset-md-0 col-8 col-md-2">
                <div className="leftBox" style={{background : `${rangeColor(pulseRate)}`}}>
                    <h1 className="pulseCountDisplay">{pulseRate}</h1>
                    <p>BPM</p>
                </div>                
            </div>
            <div className="right mt-2 col-10 col-md-4">                
                <Zone level = "5" levelDesc = "High" 
                levelPercentage = "150+" 
                levelColor="#ff2052"
                    avtarImage =  {level5}
                />
                <Zone level = "4" levelDesc = "Exercising" 
                levelPercentage = "100-150" 
                levelColor="#ed872d"
                avtarImage =  {level4}
                />
                <Zone level = "3" levelDesc = "Normal" 
                levelPercentage = "70-100" 
                levelColor="#03c03c"
                avtarImage =  {level3}
                />
                <Zone level = "2" levelDesc = "Good" 
                levelPercentage = "50-70" 
                levelColor="#007fff"
                avtarImage =  {level2}
                />
                {/* <Zone level = "1" levelDesc = "Very Light" 
                levelPercentage = "50-60%" 
                levelColor="#a2a2d0"
                avtarImage =  {level2}
                /> */}
                <Zone level = "1" levelDesc = "Low" 
                levelPercentage = "0-50" 
                levelColor="grey"
                avtarImage =  {level0}
                />
            </div>
        </div>            
        </>
        
    )

};

export default Home;
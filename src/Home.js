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
import CircularSlider from '@fseehawer/react-circular-slider';
import Thermometer from 'react-thermometer-component'
import GaugeChart from 'react-gauge-chart'


  

// function rangeColor( pulseCount)
// {
//     if(pulseCount >= 160){
//         return "#ff2052";
//     }
//     else if(pulseCount >= 120){
//         return "#ed872d";
//     }
//     else if(pulseCount >= 90){
//         return "#03c03c";
//     }
//     else if(pulseCount >= 60){
//         return "#007fff";
//     }else if(pulseCount >= 50){
//         return "#a2a2d0";
//     }
//     else{
//         return "grey";
//     }
// }



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
        <div className="container">
        <div className="row">
            <div className="col-4">
            <CircularSlider label="Temperature"
                    labelColor="#005a58"
                    knobColor="#005a58"
                    progressColorFrom="#00bfbd"
                    progressColorTo="#009c9a"
                    progressSize={24}
                    trackColor="#eeeeee"
                    trackSize={24}
                    max={212}
                    min = {32}
                    dataIndex = {97}
                    appendToValue={"F"}
                    onChange={ value => { console.log(value); } }/>
            </div>
            <div className="col-4">
            <div>
                <CircularSlider label="Pulse"
                    labelColor="#005a58"
                    knobColor="#005a58"
                    progressColorFrom="#00bfbd"
                    progressColorTo="#009c9a"
                    progressSize={24}
                    trackColor="#eeeeee"
                    trackSize={24}
                    max={200}
                    dataIndex = {pulseRate}
                    appendToValue={"bpm"}
                    onChange={ value => { console.log(value); } }/>
                </div>
            </div>
            <div className="col-4">
            <div>
            <CircularSlider label="SpO2"
                    labelColor="#005a58"
                    knobColor="#005a58"
                    progressColorFrom="#00bfbd"
                    progressColorTo="#009c9a"
                    progressSize={24}
                    trackColor="#eeeeee"
                    trackSize={24}
                    max={100}
                    dataIndex = {80}
                    appendToValue={"%"}
                    onChange={ value => { console.log(value); } }/>
                </div>
            </div>
        </div>
        </div>
    )

};

export default Home;
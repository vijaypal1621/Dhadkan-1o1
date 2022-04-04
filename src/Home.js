import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
// import firebase from '../src/firebase.js';
// import firebase from 'firebase';
// import db from './firebase';
// import firebase from './firebase';
// import firebase from 'firebase';
import { db } from "./firebase";
import { onValue, ref } from "firebase/database";
import CircularSlider from "@fseehawer/react-circular-slider";
import Button from "@mui/material/Button";

function Home() {
  const [pulseRate, setPulseRate] = useState("");

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setPulseRate(snapshot.val().pulse);

      // console.log(pulseRate);
      // console.log(snapshot.val().pulse);
      // console.log(pulseRate);
    });
  }, [pulseRate]);

  return (
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-12 col-md-4">
          <CircularSlider
            label="Temperature"
            labelColor="#005a58"
            knobColor="#005a58"
            progressColorFrom="#00bfbd"
            progressColorTo="#009c9a"
            progressSize={24}
            trackColor="#eeeeee"
            trackSize={24}
            max={212}
            min={32}
            dataIndex={97}
            appendToValue={"F"}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </div>
        <div className="col-12 col-md-4">
          <div>
            <CircularSlider
              label="Pulse"
              labelColor="#005a58"
              knobColor="#005a58"
              progressColorFrom="#00bfbd"
              progressColorTo="#009c9a"
              progressSize={24}
              trackColor="#eeeeee"
              trackSize={24}
              max={200}
              dataIndex={pulseRate}
              appendToValue={"bpm"}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <CircularSlider
              label="SpO2"
              labelColor="#005a58"
              knobColor="#005a58"
              progressColorFrom="#00bfbd"
              progressColorTo="#009c9a"
              progressSize={24}
              trackColor="#eeeeee"
              trackSize={24}
              max={100}
              dataIndex={80}
              appendToValue={"%"}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
        </div>
        <div classname="row">
          <div className="col-12 text-center p-5">
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                alert("clicked");
              }}
              size="large"
            >
              Generate Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

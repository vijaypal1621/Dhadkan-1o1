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
//import GeneratePDF from "./PDF";
import {
  PDFDownloadLink,
  Document,
  View,
  Text,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";

function GeneratePDF(temperature, spO2, pulseRate) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{temperature}</Text>
        </View>
        <View style={styles.section}>
          <Text>{spO2}</Text>
        </View>
        <View style={styles.section}>
          <Text>{pulseRate}</Text>
        </View>
      </Page>
    </Document>
  );
}

function Home() {
  const [pulseRate, setPulseRate] = useState(0);
  const [spO2, setSpO2] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setPulseRate(snapshot.val().pulse);
      setSpO2(snapshot.val().spO2);
      setTemperature(snapshot.val().temperature);
      setPdf(GeneratePDF(temperature, spO2, pulseRate));
      // console.log(pulseRate);
      // console.log(snapshot.val().pulse);
      // console.log(pulseRate);
    });
  }, [pulseRate, spO2, temperature]);

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
            dataIndex={temperature}
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
              dataIndex={spO2}
              appendToValue={"%"}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
        </div>
        <div classname="row">
          <div className="col-12 text-center p-5">
            <Button variant="contained" color="warning" size="large">
              <PDFDownloadLink
                document={pdf}
                fileName="somename.pdf"
                style={{ color: "white", textDecoration: "none" }}
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download now!"
                }
              </PDFDownloadLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

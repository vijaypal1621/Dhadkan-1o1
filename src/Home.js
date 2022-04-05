import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import { realdb } from "./firebase";
import { onValue, ref } from "firebase/database";
import CircularSlider from "@fseehawer/react-circular-slider";
import Button from "@mui/material/Button";
import {
  PDFDownloadLink,
  Document,
  View,
  Text,
  Page,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

function GeneratePDF(temperature, spO2, pulseRate) {
  const styles = StyleSheet.create({
    image: {
      marginTop: "0px",
      height: "18%",
      width: "100%",
    },
    section: {
      border: "1px solid black",
      margin: 10,
      padding: 10,
    },
    header: {
      fontSize: 24,
      textAlign: "center",
      margin: 10,
    },
    info: {
      padding: "10px",
    },
  });

  return (
    <Document
      title="report"
      author="Dhadkan"
      subject="Report"
      language="English"
    >
      <Page size="A4" orientation="portrait">
        <Image src="./pdfHeader.jpg" style={styles.image} fixed />
        <Text style={{ marginLeft: "auto", marginRight: "10px" }}>
          {new Date().toString().split(" GMT")[0]}
        </Text>
        <View style={styles.section}>
          <Text style={styles.header}>Patient Details</Text>
          <Text style={styles.info}>Name: Aaryan</Text>
          <Text style={styles.info}>Age: 21</Text>
          <Text style={styles.info}>Sex: Male</Text>
          <Text style={styles.info}>Mobile Number: 9873634075</Text>
          <Text style={styles.info}>Email: aaryanrajsarda@gmail.com</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.info}>Temperature: {temperature}</Text>
          <Text style={styles.info}>SpO2: {spO2}</Text>
          <Text style={styles.info}>Pulse Rate: {pulseRate}</Text>
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
    onValue(ref(realdb), (snapshot) => {
      setPulseRate(snapshot.val().pulse);
      setSpO2(snapshot.val().spo2);
      setTemperature(snapshot.val().temperature);
      setPdf(GeneratePDF(temperature, spO2, pulseRate));
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
                fileName={`report_${new Date().toString()}.pdf`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Generate Report"
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

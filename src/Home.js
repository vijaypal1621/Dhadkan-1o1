import React, { useEffect, useState } from "react";
import { realdb, db, storage } from "./firebase";
import { useStateValue } from "./StateProvider";

import { onValue, ref as databaseReference } from "firebase/database";
import { ref as storageReference, uploadBytes,getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore"; 
import CircularSlider from "@fseehawer/react-circular-slider";
import Button from "@mui/material/Button";
// import {storage} from './firebase';
import { getStorage} from "firebase/storage";
// import reportUpload from './reportUpload';


import {
  collection,
  collectionGroup,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import ReactPDF, {
  PDFDownloadLink,
  Document,
  View,
  Text,
  Page,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";


// console.log(storage);
function GeneratePDF(temperature, spO2, pulseRate, details, user) {
  // console.log(details)
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
          <Text style={styles.info}>Name: {user?.displayName}</Text>
          <Text style={styles.info}>
            Age: {details === null ? "" : details?.age}
          </Text>
          <Text style={styles.info}>
            Gender: {details === null ? "" : details?.sex}
          </Text>
          <Text style={styles.info}>
            Mobile Number: {details === null ? "" : details?.mobile}
          </Text>
          <Text style={styles.info}>Email: {user?.email}</Text>
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

// const uploadReport = (blob)=>{
//   if(blob !== null){
//     // setBlobFile(blob);
//     console.log(blob);
// //     const storage = getStorage();

// // // Create a storage reference from our storage service
// // const storageRef = ref(storage);
    
//   }
  
// }

function Home() {
  const [pulseRate, setPulseRate] = useState(0);
  const [spO2, setSpO2] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [pdf, setPdf] = useState(null);
  const [details, setDetails] = useState(null);
  const [{ user }] = useStateValue();
  const [blobFile, setBlobFile] = useState(null);

  useEffect(() => {
    onSnapshot(doc(db, "users", user?.uid), (doc) => {
      setDetails(doc.data());
      // console.log(doc.data());
    });
    onValue(databaseReference(realdb), (snapshot) => {
      setPulseRate(snapshot.val().pulse);
      setSpO2(snapshot.val().spo2);
      setTemperature(snapshot.val().temperature);
      setPdf(GeneratePDF(temperature, spO2, pulseRate, details, user));
    });
  }, [pulseRate, spO2, temperature, user?.uid]);

  return (
    <div
      className="container-fluid"
      style={{
        //backgroundImage: `linear-gradient(to right, #f6d365 0%, #fda085 100%)`,
        backgroundImage: `url("https://www.sleepfoundation.org/wp-content/uploads/2021/06/Physical-Health.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "88vh"
      }}
    >
      <div className="row pt-5 pb-5 text-center">
        <div className="col-12 col-md-4">
          <strong>
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
              dataIndex={temperature - 32}
              appendToValue={"F"}
              onChange={(value) => {
                // console.log(value);
              }}
              labelFontSize={"1.5rem"}
            />
          </strong>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <strong>
              <CircularSlider
                label="Pulse"
                labelFontSize={"1.5rem"}
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
                  // console.log(value);
                }}
              />
            </strong>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <strong>
              <CircularSlider
                label="SpO2"
                labelFontSize={"1.5rem"}
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
                  // console.log(value);
                }}
              />
            </strong>
          </div>
        </div>
        <div classname="row">
          <div className="col-12 text-center p-5">
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                ReactPDF.pdf(pdf)
                  .toBlob()
                  .then((blobRes) => {
                    const storageRef = storageReference(
                      storage,
                      `reports/${user?.uid}/${new Date().toString()}`
                    );

                    uploadBytes(storageRef, blobRes).then((snapshot) => {
                      // console.log("Uploaded a blob or file!");
                      getDownloadURL(storageRef)
                      .then((url) => {
                        // `url` is the download URL for 'images/stars.jpg'
                          // console.log(url);
                        // This can be downloaded directly:
                        const path = `users/${user?.uid}/reports`;
                          addDoc(collection(db,path),{
                            file : url,
                            name : new Date().toString()
                          })

                        // Or inserted into an <img> element
                        
                      })
                      .catch((error) => {
                        // Handle any errors
                      });
                    });
                    // console.log(blobRes);
                  })
                  .catch((err) => {
                    // console.error("Error:" + err);
                  });
              }}
              size="large"
            >
              <PDFDownloadLink
                document={pdf}
                fileName={`report_${new Date().toString()}.pdf`}
                style={{ color: "white", textDecoration: "none" }}
              >

                {({ blob, url, loading, error }) => {
                  if (loading) {
                    return "Loading document...";
                  } else if (error) {
                    return "Error loading document...";
                  } else {
                    return "Generate Report";
                  }
                }}

              </PDFDownloadLink>
            </Button>
          </div>
          <reportUpload blob = {blobFile}/>
        </div>
      </div>
    </div>
  );
}

export default Home;

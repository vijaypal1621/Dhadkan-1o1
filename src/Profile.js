import "./Profile.css"
import React, { useEffect } from 'react';
import Report from './Report';
// import firebase from './firebase';
import { useStateValue } from "./StateProvider";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, InputLabel, Modal, Typography } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import { Button, Tooltip } from "@material-ui/core";
import {db} from './firebase';
import { collection, collectionGroup, doc, setDoc } from "firebase/firestore"; 
import { onSnapshot, query, where, } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore"; 
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 - rand();
    const left = 50 - rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  export const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    typography: {
      padding: theme.spacing(2),
    },
  }));
  
  const useModalStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Profile(){
    const classes = useStyles();
    const modalClasses = useModalStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [{ user } ] = useStateValue();
    const [openModal, setOpenModal] = React.useState(false);
    const [age , setAge] = React.useState(0);
    const [blood , setBlood] = React.useState(0);
    const [sex , setSex] = React.useState(0);
    // const [EmailId , setEmailId] = React.useState(0);
    const [mobile , setMobile] = React.useState(0);
    const [details,setDetails] = React.useState(null);
    const [reports,setReports] = React.useState([]);

    React.useEffect(()=>{
        const unsub = onSnapshot(doc(db, "users", user?.uid), (doc) => {
            // console.log("Current data: ", doc.data());
            setDetails(doc.data());
            // console.log(doc.collection);
            // console.log(doc.reports);
        });

        const d = onSnapshot(collection(db, "users/lTcjV3oVvWOntLgS9vVhIVhNfp73/reports"), (snap) => {
            // console.log("Current data: ", doc.data());
            // setDetails(doc);
            console.log(doc);
            // console.log(doc.reports);
        });

        // const x = collection(db,"users/lTcjV3oVvWOntLgS9vVhIVhNfp73/reports");
        // console.log(x);
        const ref = `users/${user?.uid}/reports`;
        const unsubscribe = onSnapshot(
            collection(db, ref), 
            (snapshot) => {
              snapshot.docs.forEach((doc)=>{
                  console.log(doc.data());
                //   setReports(doc.data());
              })
            setReports(snapshot.docs);
            // console.log(reports[0].data())
            },
            (error) => {
              console.log(error);
            });
      
        // for(let i = 0 ; i<reports.length;i++){
        //     console.log(reports[i].data());
        // }
        
        
        
        // setDetails(doc.data());
        // console.log(doc.collection);
        // console.log(doc.reports);
    

        // const tel = onSnapshot(collection(db,"users",user?.uid),(doc)=>{
        //         console.log(doc);
        // });

        // console.log(tel);
        // const hel = 
        // db.collection('users').doc(user?.uid)
        //       .collection('reports')
        //       .orderBy('timestamp', 'asc')
        //       .onSnapshot((snapshot) => setReports( 
        //               snapshot.docs.map(doc => doc.data() )
        //           )
        //       )
        
        // console.log(reports);
        // const q = query(collection(db, "users"), where(doc.id, "==", user?.uid));
        // console.log( q);
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });


        
    },[])


    // console.log(details?.sex );
    const handleOpenModal = () => {
        console.log("open");        

        setOpenModal(true);
    };
    const handleClose = () => {
        console.log("close");
        setOpenModal(false);
    };
    const handleUpdate = (e) => {
        
        e.preventDefault();
        console.log(db);
        setDoc(doc(db, "users", user?.uid), {
            age: age,
            blood: blood,
            sex: sex,
            mobile:mobile
          });
        // collection(db,"users").doc(user?.uid).set({
        //   age: age,
        //   blood: blood,
        //   sex: sex,
        //   EmailId:EmailId,
        //   mobile:mobile
        // });
        console.log("succes");
        setAge("");
        setSex("");
        setMobile("");
        setBlood("");   
        setOpenModal(false);        
      };
    
      const body = (

        <div style={modalStyle} className={modalClasses.paper}>
          <h2>Update Details</h2>
          <form>
          <div className="row">
            <label className="col-4" for="age">
              Age :
            </label>
            <input
              className="col-6 profile__update"
              name="age"
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >              
            </input>
          </div>
          <div className="row">
            <label className="col-4" for="blood">
              Blood Group :
            </label>
            <input
              className="col-6 profile__update"
              name="blood"
              id="blood"
              value={blood}
              onChange={(e) => setBlood(e.target.value)}
            >              
            </input>
          </div>
          <div className="row">
            <label className="col-4" for="sex">
              Gender :
            </label>
            <input
              className="col-6 profile__update"
              name="sex"              
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >              
            </input>
          </div>          
          <div className="row">
            <label className="col-4" for="mobile">
              Mobile Number :
            </label>
            <input
              className="col-6 profile__update"
              name="mobile"
              id="mobile"
              value={mobile}
              type="number"
              onChange={(e) => setMobile(e.target.value)}
            >              
            </input>
          </div>
          
          <Button
            style={{ color: "white", backgroundColor: "#16a596" }}
            className="col-11 mt-4 ml-2"
            onClick={handleUpdate}
            type="submit"
          >
            Update
          </Button>
        </form>
        </div>
      );

      console.log(user);

        // const checkreports = (
        //     if(reports.length == 0){
        //         return (
        //             <h2>You </h2></h2>
        //         )
        //     }
        // )


    return (
        <>
            <div className="profileImage offset-5 col-2">
                <img src={user?.photoURL}  style={{width : "100%"}} alt="/" />
                
            </div>
            <div className = "editIcon">
            <EditIcon
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                                onClick={handleOpenModal}
                            />
            </div>
            <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
      {/* <h1>jkjfedkjfd</h1> */}
    </Modal>
            <div className="col-10 offset-1">
                <table className="table table-striped">
                    <thead className="row align-items-center">
                        <tr>
                            <h2>User Details</h2>
                        </tr>
                    </thead>                    

                    <tbody>
                        <tr>
                        <th scope="row">Name</th>
                        <td>{user?.displayName}</td>      
                        </tr>
                        <tr>
                        <th scope="row">Age</th>
                        <td>{details===null ?(""):(details?.age)}</td>
                        </tr>
                        <tr>
                        <th scope="row">Blood Group</th>
                        <td>{details===null ?(""):(details?.blood)}</td>
                        </tr>
                        <tr>
                        <th scope="row">Sex</th>
                        <td>{details===null ?(""):(details?.sex)}</td>
                        </tr>
                        <tr>
                        <th scope="row">Email Id</th>
                        <td>{user?.email}</td>      
                        </tr>
                        <tr>
                        <th scope="row">Mobile Number</th>
                        <td>{details===null ?(""):(details?.mobile)}</td>
                        </tr>                           
                    </tbody>
                </table>
            </div>            
            <div className="Reports">
                {/* {for(let i = 0 ; i < reports.length; i++){

                }} */}
            
            <h2 className="offset-1">You have {reports.length} reports</h2>

            {reports?.map((doc)=>(                
                <Report file={doc.data().file}/>
            ))}

                {/* <Report />
                <Report />
                <Report />
                <Report />
                <Report /> */}
            </div>


        </>
    )


}

export default Profile;
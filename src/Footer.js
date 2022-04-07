import React from 'react';
import { Typography } from "@material-ui/core";

function Footer(){
    return(
        <>
            <footer>
            <div
            className="container-fluid p-3"
            style={{ backgroundColor: "#bbd0de" }}
            >
            <div className="row">
                <div className="col-md-4 col-12 my-auto p-2">
                <center>
                    <Typography variant="h5">
                    <a
                        href="/home"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        © <strong>Dhadkan</strong>
                    </a>
                    </Typography>
                </center>
                </div>
                <div className="col-md-4 col-12 my-auto  p-2">
                <center>
                    <Typography variant="h5">Made with ❤ by
                    <br/>
                     
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vijay-pal-b40950197/" > Vijay ,</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aaryan-raj-sarda-8983781b1/" > Aaryan, </a> 
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/aryaman-kumar-chandan-185133209/" > Aryaman and </a> 
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/deepak-verma-b3946a203/" > Deepak </a>                     
                    </Typography>
                </center>
                </div>
                <div className="col-md-4 col-12 my-auto  p-2">
                <center>
                {/* <a target="_blank" rel="noreferrer" style={{color:"black"}} href="https://www.instagram.com/vijay._.pal/" > <Instagram style={{ fontSize: "3rem" }} /></a>
                <a target="_blank" rel="noreferrer" style={{color:"black"}} href="https://www.facebook.com/aaryanraj.sarda" > <Facebook style={{ fontSize: "3rem" }} /></a>
                <a target="_blank" rel="noreferrer" style={{color:"black"}} href="https://www.linkedin.com/in/aaryan-raj-sarda-8983781b1/" > <LinkedIn style={{ fontSize: "3rem" }} /></a>
                <a href="mailto:nescii101@gmail.com"style={{color:"black"}} ><Email style={{ fontSize: "3rem" }} /></a> */}
                    
                    
                </center>
                </div>
            </div>
            </div>
        </footer>
        </>
    )
};

export default Footer;
import "./Report.css"
import React from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Report(){
    return(
        <>
            <div className="row offset-1 col-10 report">
                <div className="col-2">
                    <img style={{"width": 90}} clasName = "col-2 fileImage" src = "./fileImage.jpg" alt ="/" />
                </div>
                <div className="col-7">
                    <h5>Sat, 10 Apr 2021 18:39:34 GMT</h5>
                </div>
                <div className="col-2" style={{"textAlign": "end"}}>
                    
                    <a href="https://firebasestorage.googleapis.com/v0/b/dhadkan-1o1.appspot.com/o/5daf0a22-66e4-486d-a16f-03e020f623e6.pdf?alt=media&token=d37f36bd-03ca-4907-8445-6fdb75fc8df8" target="blank"><CloudDownloadIcon /></a>
                </div>
            </div>
        
        </>
    )
}

export default Report;
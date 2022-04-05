import "./Report.css";
import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function Report() {
  return (
    <>
      <div className="row offset-1 col-10 report">
        <div className="col-2">
          <img
            style={{ width: 90 }}
            className="col-2 fileImage"
            src="./fileImage.jpg"
            alt="/"
          />
        </div>
        <div className="col-7">
          <h5>Sat, 10 Apr 2021 18:39:34 GMT</h5>
        </div>
        <div className="col-2" style={{ textAlign: "end" }}>
          <CloudDownloadIcon />
        </div>
      </div>
    </>
  );
}

export default Report;

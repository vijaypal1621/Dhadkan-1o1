import React from "react";
import './Zone.css';



function Zone({level,levelDesc,levelPercentage,levelColor,avtarImage}){
    return(
        <div className="zoneBox" style={{ background : `${levelColor}`  }}>
            <div className="zoneLevel">
                <p>zone</p>
                <h2>{level}</h2>
            </div>
            <div className="zoneAvatar">
                <img src= {avtarImage} alt="ewfhj" className="avatar"/>
            </div>
            <div className="zonePercent">
                <p>{levelDesc}</p>
                <h2>{levelPercentage}</h2>
            </div>
        </div>
    )
};

export default Zone;
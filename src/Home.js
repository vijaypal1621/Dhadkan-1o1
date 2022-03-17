import React from "react";
import "./Home.css";
import Zone from './Zone.js';
import level0 from './level0.png';
import level2 from './level2.png';
import level3 from './level3.png';
import level4 from './level4.png';
import level5 from './level5.png';
function Home(){

    return (
        <>
            


            <Zone level = "5" levelDesc = "Maximum" 
             levelPercentage = "90-100%" 
             levelColor="#ff2052"
                avtarImage =  {level5}
             />
            <Zone level = "4" levelDesc = "Hard" 
             levelPercentage = "80-90%" 
             levelColor="#ed872d"
             avtarImage =  {level4}
             />
             <Zone level = "3" levelDesc = "Moderate" 
             levelPercentage = "70-80%" 
             levelColor="#03c03c"
             avtarImage =  {level3}
             />
             <Zone level = "2" levelDesc = "Light" 
             levelPercentage = "60-70%" 
             levelColor="#007fff"
             avtarImage =  {level2}
             />
             <Zone level = "1" levelDesc = "Very Light" 
             levelPercentage = "50-60%" 
             levelColor="#a2a2d0"
             avtarImage =  {level2}
             />
             <Zone level = "0" levelDesc = "Minimal" 
             levelPercentage = "0-50%" 
             levelColor="grey"
             avtarImage =  {level0}
             />
        </>
        
    )

};

export default Home;
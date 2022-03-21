import React from "react";
import { Typography } from "antd";
import "../css/shared.css";


import EducationItemComponent from "./Items/EducationItemComponent";

const {Title} = Typography;
const AchievementsList = [
    {
        institute: "Won prize at event: ”Dialogue On Jongi Preventation”, Annual Cultural Competition and Indoor Games,KU,2018.", 
        degree: "",
        session: "", 
        point: "3.54", 
        key:"",
        gpasystem: "",
        location: "",
        // url:"https://ku.ac.bd/",
    //     details: ["Thesis Topic: Development Of a System For Detection And Extraction Of Camera Inserted Date From Image"] 
 },
 {
    institute: "Got General Scholarship in JSC and Brack Bank Medhabikash scholarship for SSC.", 
    degree: "",
    session: "", 
    point: "3.54", 
    key:"",
    gpasystem: "",
    location: "",
    // url:"https://ku.ac.bd/",
//     details: ["Thesis Topic: Development Of a System For Detection And Extraction Of Camera Inserted Date From Image"] 
},
{
    institute: "Stood 6th for Life Science School and 21th for SET School in KU Admission Test.", 
    degree: "",
    session: "", 
    point: "3.54", 
    key:"",
    gpasystem: "",
    location: "",
    // url:"https://ku.ac.bd/",
//     details: ["Thesis Topic: Development Of a System For Detection And Extraction Of Camera Inserted Date From Image"] 
},
{
    institute: "Merit Scholarships for 8 successive terms in KU.", 
    degree: "",
    session: "", 
    point: "3.54", 
    key:"",
    gpasystem: "",
    location: "",
    // url:"https://ku.ac.bd/",
//     details: ["Thesis Topic: Development Of a System For Detection And Extraction Of Camera Inserted Date From Image"] 
},

]

const ActivityComponent = (props) => {
    return (
        <>
            <div className="container padding" ref={props.ownRef}>
                <div>
                    <Title level={3} style={{color: "white", textAlign:"center"}}>Honors and Achievements</Title>
                </div>
                <div>
                    {
                        AchievementsList.map((item, index)=>{
                            return <EducationItemComponent key={index} keydata={item.key} data={item} />
                        })
                    }
                </div>
            </div>
        </>
    );
    
};

export default ActivityComponent;

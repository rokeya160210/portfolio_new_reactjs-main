import React from "react";
import "../css/shared.css";
import { Typography } from "antd";
import EducationItemComponent from "./Items/EducationItemComponent";

const {Title} = Typography;

const educationList = [
    {
        institute: "Khulna University, Bangladesh", 
        degree: "BSc. in Computer Science & Engineering",
        session: "January 2016 - January 2020", 
        point: "3.54", 
        key:"university",
        gpasystem: "CGPA",
        location: "Khulna‐9208, Bangladesh",
        url:"https://ku.ac.bd/",
        details: ["Thesis Topic: Development Of a System For Detection And Extraction Of Camera Inserted Date From Image"] 
    },
    {
        institute: "Akij Collegiate School, Jessore",
        degree: "Higher Secondary School", 
        session: "July 2013 - Jun 2015", 
        key:"college", 
        location: "Navaron, Jessore",
        url: "https://akijcs.wordpress.com/",
        details: ["HSc: GPA 4.92 out of 5"] 
    },
    {
        institute: "Akij Collegiate School",
        degree: "Secondary School", 
        session: "January 2008 - March 2013", 
        key:"seconday-school", 
        location: "Navaron, Jessore",
        url: "https://akijcs.wordpress.com/",
        details: ["SSC: GPA 5.00 out of 5", "JSC: GPA 5.00 out of 5"] 
    },
    {
        institute: "Navaron Govt. Primary School",
        degree: "Primary School", 
        session: "January 2003 - December 2007", 
        key:"primary-school", 
        location: "Navaron, Jessore",
    },
]

const EdutcationComponent = (props) => {
    return (
        <>
            <div className="container padding" ref={props.ownRef}>
                <div>
                    <Title level={3} style={{color: "white", textAlign:"center"}}>Education</Title>
                </div>
                <div>
                    {
                        educationList.map((item, index)=>{
                            return <EducationItemComponent key={index} keydata={item.key} data={item} />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default EdutcationComponent;

import React from "react";
import "../css/shared.css";
import ExperienceItemComponent from "./Items/ExperienceItemComponent";
import { Typography } from "antd";


const {Title} = Typography;

const experienceList = [
    {
        companyname: "Khwaja Yunus Ali University",
        position: "Lecturer",
        // department: "",
        exp: "January 2022 - present ",
        stacks: " Web Engineering, Operating System, Numerical Method, Digital Image Processing",
        // location: "Safura Tower, 20 Kemal Ataturk Ave, Dhaka 1213", 
        // details: "",
        // url: "https://www.aamratechnologies.com/"
    },
    {
        companyname: "W3engineers Ltd",
        position: "Software Engineer",
        // department: "",
        exp: "September 2021 - December 2021 ",
        stacks: "ReactJs (Frontend), NodeJs (REST API), Postgresql Database",
        // location: "Safura Tower, 20 Kemal Ataturk Ave, Dhaka 1213", 
        // details: "",
        // url: "https://www.aamratechnologies.com/"
    },
    {
        companyname: "Sharifa Sultana's Research Team(PhD Student, Information Science, Cornell University,USA)",
        position: "a research-assistant",
        // department: "",
        exp: "January 2020 - Present ",
        stacks: " Human-Computer Interaction (HCI)",
        // location: "Safura Tower, 20 Kemal Ataturk Ave, Dhaka 1213", 
        // details: "",
        // url: "https://www.aamratechnologies.com/"
    }
]

const ExperiencesComponent = (props) => {
    return (
        <>
            <div className="container padding" ref={props.ownRef}>
                <div>
                    <Title level={3} style={{color: "white", textAlign:"center"}}>Experience</Title>
                </div>
                <div>
                    {
                        experienceList.map((item, index)=>{
                            return <ExperienceItemComponent key={index} keydata={item.key} data={item} />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default ExperiencesComponent;

import { Typography } from "antd";
import React from "react";
import classes from "../css/about.module.css";
import "../css/shared.css";

const { Title } = Typography;

const AboutComponent = () => {
    return (
        <>
            <div className={`${classes.flex_container} container align_center_all`}>
                <div
                    className={`${classes.flex_item}`}
                    style={{ color: "white", textAlign: "center" }}
                >
                    <img
                        src={"/admin/rsz_rokeya2.jpg"}
                        style={{ borderRadius: "5px",width: "300px"}}
                        alt="Miss. Rokeya Akter"
                         className="image_item image_item_about"
                    />
                </div>
                <div
                    className={`${classes.flex_item} padding`}
                    style={{ color: "white" }}
                >
                    <Title level={3} style={{ color: "white" }}>
                        About Me
                    </Title>
                    <p> 
                        I joined on CSE Department of Khwaja Yunus Ali University on 02 january , 2022. I'm a
                        passionate and hard-working person and want to learn new
                        technologies. My research interested fields are Human Computer Interation(HCI), Image Processing, Machine Learning.
                        <br />I had completed <b>BSc Engg (CSE)</b> from{" "}
                        <b>Khulna University, Bangladesh</b>.
                    </p>
                    <p>I'm good at</p>
                    <div className="align_center_all">
                        <ul className={classes.ul}>
                            {[
                                "Reactjs",
                                
                                "Javascript",
                                "NodeJs ",
                               "Elasticsearch",
                                "MySql",
                                "PostgreSql",
                                "HTML",
                                "Bootstrap",
                                "CSS",
                            ].map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span
                                            style={{
                                                padding: "2px 10px",
                                                border: "1px solid teal",
                                                margin: "4px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            {item}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <p style={{ marginTop: "30px" }}>
                        <span className="download_resume_button"
                            onClick={()=> window.open("https://drive.google.com/file/d/1FwkIT0b4cID3pwDoT33IbunQlK6VtCv_/view?usp=sharing", "_blank")}
                        >
                            Open Resume
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutComponent;

import React from "react";
import "../css/shared.css";
import {Typography } from "antd";
import {ReactComponent as JavaLogo} from "../assets/languageLogo/java1.svg";
import {ReactComponent as JavaScriptLogo} from "../assets/languageLogo/javascript.svg";
import {ReactComponent as NodeJsLogo} from "../assets/languageLogo/nodejs-logo-svgrepo-com.svg";
import {ReactComponent as Angular} from "../assets/languageLogo/angular-seeklogo.com.svg";
import {ReactComponent as ExpressLogo} from "../assets/languageLogo/express.svg";
import {ReactComponent as ReactjsLogo} from "../assets/languageLogo/react.svg";
import {ReactComponent as PostgreSql} from "../assets/languageLogo/postgresql.svg";
import {ReactComponent as CLogo} from "../assets/languageLogo/c.svg";
import {ReactComponent as CssLogo} from "../assets/languageLogo/css3.svg";
import {ReactComponent as GitLogo} from "../assets/languageLogo/git.svg";
import {ReactComponent as HtmlLogo} from "../assets/languageLogo/html5.svg";
import {ReactComponent as LinuxLogo} from "../assets/languageLogo/linux.svg";
import {ReactComponent as MySqlLogo} from "../assets/languageLogo/mysql.svg";
import {ReactComponent as OracleLogo} from "../assets/languageLogo/oracle.svg";
import {ReactComponent as PythonLogo} from "../assets/languageLogo/python-seeklogo.com.svg";
import {ReactComponent as SublimeTextLogo} from "../assets/languageLogo/sublime-text.svg";
import {ReactComponent as VsCodeLogo} from "../assets/languageLogo/visual-studio-code.svg";
import {ReactComponent as WindwosLogo} from "../assets/languageLogo/windows.svg";
import {ReactComponent as BootstrapLogo} from "../assets/languageLogo/bootstrap.svg";
import "../css/shared.css";


const { Title } = Typography;

const SkillsComponent = (props) => {
    return <>
        <div ref={props.ownRef} className={`container padding`}>
            <div>
                <Title level={3} style={{ color: "white", textAlign:"center" }}>
                    Skills
                </Title>
            </div>
            <div className="layout_class">
                <h3 className="skill_header">
                    Languages
                </h3>
                <div className="align_div">
                    <div className="gallery">
                        <JavaLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            Java 
                        </div>
                    </div>
                    
                    <div className="gallery">
                        <JavaScriptLogo className="skills_logo"/>
                         <div className="border padding_skill_item">
                            JavaScript 
                        </div>
                    </div>
                    
                    <div className="gallery">
                        <CLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            C 
                        </div>
                    </div>
                    
                    
                    <div className="gallery">
                        <PythonLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            Python 
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout_class">
                <h3 className="skill_header">
                    Runtime Environment
                </h3>
                <div className="align_div">
                    <div className="gallery">
                        <NodeJsLogo className="skills_logo" style={{backgroundColor: "white"}}/>
                        <div className="border padding_skill_item">
                            NodeJs 
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout_class">
                <h3 className="skill_header">
                    Frameworks
                </h3>
                
                <div className="align_div">
                    <div className="gallery">
                        <ExpressLogo className="skills_logo" style={{backgroundColor: "white"}}/>
                        <div className="border padding_skill_item">
                            ExpressJs 
                        </div>
                    </div>
                     
                </div>
            </div>

            <div className="layout_class">
                <h3 className="skill_header">
                    Libraries
                </h3>
                
                <div className="align_div">
                    <div className="gallery">
                        <ReactjsLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            ReactJs 
                        </div>
                    </div>
                    <div className="gallery">
                        <Angular className="skills_logo"/>
                        <div className="border padding_skill_item">
                            Angular 8
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout_class">
                <h3 className="skill_header">
                    Databases
                </h3>
                
                <div className="align_div">
                    <div className="gallery">
                        <MySqlLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            MySQL 
                        </div>
                    </div>
                    <div className="gallery">
                        <PostgreSql className="skills_logo"/>
                        <div className="border padding_skill_item">
                        PostgreSql 
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="layout_class">
                <h3 className="skill_header">
                    Technologies
                </h3>
                
                <div className="align_div">
                    <div className="gallery">
                        <HtmlLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            HTML 
                        </div>
                    </div>
                    <div className="gallery">
                        <CssLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            CSS 
                        </div>
                    </div>
                    <div className="gallery">
                        <BootstrapLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            Bootstrap 
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="layout_class">
                <h3 className="skill_header">
                    Development Tools
                </h3>
                
                <div className="align_div">
                    <div className="gallery">
                        <VsCodeLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            VS Code 
                        </div>
                    </div>
                    <div className="gallery">
                        <GitLogo className="skills_logo" style={{backgroundColor: "white"}}/>
                        <div className="border padding_skill_item">
                            Git 
                        </div>
                    </div>
                    <div className="gallery">
                        <SublimeTextLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            Sublime Text 
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="layout_class">
                <h3 className="skill_header">
                    Environment
                </h3>
                
                <div className="align_div">
                    <div className="gallery">
                        <LinuxLogo className="skills_logo"/>
                        <div className="border padding_skill_item">
                            Linux 
                        </div>
                    </div>
                    <div className="gallery">
                        <WindwosLogo className="skills_logo" style={{backgroundColor: "white"}}/>
                        <div className="border padding_skill_item">
                            Windows 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default SkillsComponent;

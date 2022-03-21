import React from "react";
import { Typography, Carousel } from "antd";
import "../css/shared.css";
import PublicationItemComponent from "./Items/PublicationItemComponent";

const {Title} = Typography;

const publicationList = [
  {
    title: "Toleration Factors: The Expectations of Decorum, Civility, and Certainty on Rural Social Media",
    abstract: `
    Sharifa Sultana, Rokeya Akter,Zinnat Sultana, Syed Ishtiaque Ahmed.
    `,
    // conferenceDate: "19-21 Dec. 2020",
    // addedToIeeeDate: "06 April 2021",
    // doi: "10.1109/ICCIT51783.2020.9392650",
    // doiUrl: "https://ieeexplore.ieee.org/document/9392650",
    publishedIn:
    " 12th International Conference on Information Communication Technologies and Development (ICTD 2022)",
    key: "bnnet",
  },
  {
    title: "ShishuShurokkha: A Transformative Justice Approach for Combating Child Sexual Abuse in Bangladesh",
    abstract: `
    Sharifa Sultana, Sadia Tasnuva Pritha, Rahnuma Tasnim, Anik Das, Rokeya Akter, Shaid Hasan, S.M. Raihanul
Alam, Muhammad Ashad Kabir, Syed Ishtiaque Ahmed.
    `,
    // conferenceDate: "19-21 Dec. 2020",
    // addedToIeeeDate: "06 April 2021",
    // doi: "10.1109/ICCIT51783.2020.9392650",
    // doiUrl: "https://ieeexplore.ieee.org/document/9392650",
    publishedIn:
    " The 2022 ACM Conference on Human Factors in Computing Systems(CHI’22).",
    key: "bnnet1",
  },
  {
    title: "Understanding the Sensibility of Social Media Use and Privacy with Bangladeshi Facebook Group Users",
    abstract: `
    Sharifa Sultana, Pratyasha Saha, Shaid Hasan, S. M. Raihanul Alam, Rokeya Akter, Md. Mirajul Islam, Raihan Islam
Arnob, Mahdi Nasrullah Al-Ameen, and Syed Ishtiaque Ahmed.
    `,
    // conferenceDate: "19-21 Dec. 2020",
    // addedToIeeeDate: "06 April 2021",
    // doi: "10.1109/ICCIT51783.2020.9392650",
    // doiUrl: "https://ieeexplore.ieee.org/document/9392650",
    publishedIn:
    " In Proceedings of the 3rd ACM SIGCAS Conference on Computing and Sustainable Societies (COMPASS ’20)",
    key: "bnnet2",
  },
  {
    title: "”Faith in Wellbeing-HCI: A Study on Islamic-Parareligious Practices in Bangladeshi Rural-Wellbeing",
    abstract: `
    Sharifa Sultana, Tanjina Tamanna, Rokeya Akter, Zinnat Sultana, Syed Ishtiaque Ahmed.
    `,
    // conferenceDate: "19-21 Dec. 2020",
    // addedToIeeeDate: "06 April 2021",
    // doi: "10.1109/ICCIT51783.2020.9392650",
    // doiUrl: "https://ieeexplore.ieee.org/document/9392650",
    publishedIn:
    "  Extended Abstracts of the 2020CHI Conference on Human Factors in Computing Systems.",
    key: "bnnet3",
  },
  
];

// const PublicationsComponent = (props) => {
//     return (
//       <>
//         <div className="container padding" ref={props.ownRef}>
//           <div>
//             <Title level={3} style={{ color: "white", textAlign: "center" }}>
//               Publications
//             </Title>
//             <div
//               className="publication_items_div align_center_all border publication"
//               key={props.keydata}
//               style={{
//                 color: "#FFF1CF",
//                 cursor: "default",
//                 paddingBottom: "0px",
//               }}
//             >
//               <Carousel
//                 autoplay
//                 easing="linear"
//                 swipeToSlide={true}
//                 swipe={true}
//               >
//                 {publicationList.map((item, index) => {
//                   return <PublicationItemComponent key={index} data={item} />;
//                 })}
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// };

const PublicationsComponent = (props) => {
  return (
      <>
          <div className="container padding" ref={props.ownRef}>
              <div>
                  <Title level={3} style={{color: "white", textAlign:"center"}}>Publications</Title>
              </div>
              <div>
                  {
                    publicationList.map((item, index)=>{
                          return <PublicationItemComponent key={index} keydata={item.key} data={item} />
                      })
                  }
              </div>
          </div>
      </>
  );
};
export default PublicationsComponent;

import { useEffect } from "react";
import styles from "./Project.module.css";
import Bytepad from "../../../Assets/Images/Bytepad.png";
import Coursera from "../../../Assets/Images/Coursera.png";
import Repairo from "../../../Assets/Images/Repairo.png";
import ProjectTem from "../../../Components/ProjectTemplate/ProjectTem";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Project({Project_ref}) {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Project_ref} className={styles.ProjectSection}>
        <div className={styles.Project}>
          <ProjectTem
            title="Scholarly"
            smallDesc="Backend developer"
            longDesc="As a backend developer for the Scholarly scholarship portal, my role was instrumental in designing and implementing the server-side components, developing robust APIs, integrating external services, optimizing performance, and ensuring a seamless user experience. 
            "
            skill1="Node Js"
            skill2="Express Js"
            skill3="Mongo DB"
            link=""
            image={Bytepad}
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="Career Buddy"
            smallDesc="Backend Developer"
            longDesc="As a backend developer for Career Buddy, I designed and developed the server-side components, built APIs, integrated services, optimized performance, and ensured a seamless user experience. Career Buddy is a career recommendation and guidance platform that helps individuals navigate their career paths.
            "
            skill1="Express.Js"
            skill2="Node Js"
            skill3="Mongo DB"
            skill4="Python"
            skill5="docker"
            link="https://careerbuddy.netlify.app/"
            image={Coursera}
          />
        </div>

        {/* <div className={styles.Project}>
          <ProjectTem
            title="Repairo"
            smallDesc=" Electronics repairing company, helping customers with cost effective and quality services "
            longDesc="Single-handedly revamped the entire frontend of website from scratch. Developed Reusable components 
            and used Context API for state management.Developed REST-APIS and integrated Twilio API for SMS automation"
            skill1="MERN"
            skill2="CSS"
            skill3="REST API"
            image={Repairo}
            link="https://www.repairoindia.com/"
          /> */}
        {/* </div> */}
      </div>
      <div class="line">
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          class="line_break"
        >
          {" "}
        </div>
      </div>
    </>
  );
}

import React from "react";
import Card from "../../../Components/FeaturedCard/Card";
import styles from "./Featured.module.css";
import Saheli from "../../../Assets/Images/saheli.png";
import Birdminton from "../../../Assets/Images/birdminton.png";

import Trello from "../../../Assets/Images/trello.png";
import Gollaa from "../../../Assets/Images/golaa.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Featured({Exploration_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Exploration_ref} className={styles.Featured}>
        {/* <div className={styles.lineBreak}></div> */}

        <h3
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          Explorations
        </h3>

        <div className={styles.projects}>
          <Card
            name={"MediPocket"}
            image={Saheli}
            alt="Saheli"
            desc="MediPocket: Your Secure Medical Records Vault. Accessible to patients and doctors, this user-friendly website stores and manages medical records securely. Say goodbye to paper documents and embrace the future of healthcare with MediPocket."
            position="React Js ,NodeJs , MongoDB"
            // link={"https://github.com/ImpulseInc/saheli"}
          />
          <Card
            name={"Face Recognition"}
            image={Birdminton}
            desc="With the marvels of Python, I crafted a cutting-edge face recognition system that harnesses the power of computer vision. This intelligent solution seamlessly identifies and verifies individuals, revolutionizing access control, security measures, and personalized experiences."
            link={"https://github.com/Niveshrawat/FACE_RECOGNITION"}
            alt="Birdminton"
            position="Python"
          />
          <Card
            name={"Snake Game"}
            image={Trello}
            alt="Trello"
            desc="A simple snake game made using pygame"
            link={"https://github.com/Niveshrawat/Snake_game"}
            position="Python"
          />
          {/* <Card
            name={"Gollaa"}
            image={Gollaa}
            alt="pro"
            desc="A Freelancing project, Developed complete main website which consists of a landing page with animations and transitions along with blog
             and stories sections ( 11 pages ) using React and Sass."
            link="https://gollaa.web.app/home"
            position="Freelancing"
          /> */}
        </div>
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

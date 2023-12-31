import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import Github from "../../../Assets/Images/github.png";
import LinkedIn from "../../../Assets/Images/linkedin.png";
import Instagram from "../../../Assets/Images/insta.png";
import Codeforces from "../../../Assets/Images/codeforces.png";
import Codechef from "../../../Assets/Images/codechef.png";
import Gfg from "../../../Assets/Images/gfg.png";
import Leet from "../../../Assets/Images/leetcode.png";
import {ArrowUpOutlined } from '@ant-design/icons'
import { Button } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import { propTypes } from "react-animated-cursor";

export default function Footer(props) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={props.Profile_ref} className={styles.footer}>
        <div className={styles.footerSection}>
          <h4 className={styles.heading}>Visit my profiles! </h4>

          <div className={styles.Links}>
            <div className={styles.logo}>
              <a
                href="https://github.com/Niveshrawat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="Github" />
              </a>
            </div>

            <div className={styles.logo}>
              <a
                href="https://www.linkedin.com/in/nivesh-rawat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="Linkedin" />
              </a>
            </div>

          

            {/* <div className={styles.logo}>
              <a
                href="https://www.codechef.com/users/ayush_8750"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Codechef} alt="codechef logo" />
              </a>
            </div> */}

            {/* <div className={styles.logo}>
              <a
                href="https://codeforces.com/profile/ayush8750"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Codeforces} alt="codeforces" />
              </a>
            </div> */}

            {/* <div className={styles.logo}>
              <a
                href="https://leetcode.com/ayush-lab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Leet} alt="leetcode logo" />
              </a>
            </div> */}

            <div className={styles.logo}>
              <a
                href="https://auth.geeksforgeeks.org/user/niveshrawat2002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gfg} alt="GFG logo" />
              </a>
            </div>
            <div className={styles.logo}>
              <a
                href="https://www.instagram.com/niveshrawat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="insta" />
              </a>
            </div>
            
          </div>

          <div className={styles.mailBtn}>
            <Button primary>
              <a href="mailto:niveshrawat2002@gmail.com">Connect with Me</a>
            </Button>
          </div>

          <div onClick={props.onClickLanding}  className={styles.GotoTop}>
              <ArrowUpOutlined style={{color:"white"}} />
          </div>

        </div>
        <div className={styles.name}>
          <span>Designed and Developed by Nivesh with love ❤️</span>
        </div>
      </div>
    </>
  );
}

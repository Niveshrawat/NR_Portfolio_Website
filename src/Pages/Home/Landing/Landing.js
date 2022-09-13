import React from 'react';
import styles from './Landing.module.css';
import Ayush from "../../../Assets/Images/hero.svg";
// import Typer from '../../../Components/Typer';
import Github from '../../../Assets/Images/github.svg';
import LinkedIn from '../../../Assets/Images/linkedin.svg';
import Instagram from '../../../Assets/Images/instagram.svg';
import Label from '../../../Components/Label/Label';
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowUpOutlined } from '@ant-design/icons';



function Landing() {

    React.useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.main}>

                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500" className={styles.mainLeft}>


                    {/* <p>Hey 👋🏻</p>
                    <p> This is Ayush  </p> */}
                    {/* <p>As a developer,
                        my superpower happens behind the scenes to make a digital product look great, work fast
                        and perform well with a seamless user experience.</p> */}
                    {/* <p className={styles.Typer}><Typer
                        heading=""
                        dataText={[
                            "I'm a React developer.",
                            'I develop modern frontend apps.',
                            "I'm a competitive programmar.",
                            "I'm a national badminton player."
                            
                        ]}/>
                        </p> */}

                    {/* <div className={styles.Links}>
                        <div>
                            <img src={Github} alt="Github" />
                        </div>

                        <div>
                            <img src={LinkedIn} alt="Linkedin" />
                        </div>

                        <div>
                            <img src={Instagram} alt="insta" />
                        </div>

                        <div>
                            <img src={Github} alt="Github" />
                        </div>

                        <div>
                            <img src={LinkedIn} alt="Linkedin" />
                        </div>

                        <div>
                            <img src={LinkedIn} alt="Linkedin" />
                        </div>

                    </div> */}
                    <p>Hey! This is <b>Ayush,</b></p>
                    <p>As a <b>developer</b>, my superpower happens behind the scenes to make a digital product look great, work fast
                        and perform well with a seamless user experience.
                        <span className={styles.resumeBtn}>
                            <a style={{ textDecoration: 'none',color:"white" }} 
                            href="https://drive.google.com/file/d/1BGfY-raqmC1hBYT2eM7Fb9HhyirKNelw/view" 
                            target="_blank" rel="noopener noreferrer"> RESUME <ArrowUpOutlined className={styles.arrow} /></a>
                        </span>

                    </p>


                </div>


                {/* <div className={styles.mainRight}>

                 
                </div>  */}

            </div>

            <div className="line_break"> </div>

        </div>
    )
}

export default Landing;
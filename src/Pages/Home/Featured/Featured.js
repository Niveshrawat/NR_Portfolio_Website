import {React} from 'react';
import Card from '../../../Components/FeaturedCard/Card';
import styles from './Featured.module.css';
import Card1 from '../../../Assets/Images/dev.gif';
import Saheli from '../../../Assets/Images/saheli.png'
import Birdminton from '../../../Assets/Images/birdminton.png'

import Trello from '../../../Assets/Images/trello.png'
import Gollaa from '../../../Assets/Images/golaa.png'
import Repairo from '../../../Assets/Images/repairoo.png'
import Answer from '../../../Assets/Images/answer.svg'



export default function Featured() {
    
  return (
     <div className={styles.Featured}>

         {/* <div className={styles.lineBreak}></div> */}

         <h3>Explorations</h3>

         <div className={styles.projects}>
               <Card name={"Saheli"} image={Saheli} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Birdminton} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Trello} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Gollaa} alt="pro" position="Lead react developer" />
               {/* <Card name={"Saheli"} image={Repairo} alt="pro" position="Lead react developer" /> */}
               {/* <Card name={"Saheli"} image={Answer} alt="pro" position="Lead react developer" /> */}


         </div>

     </div>
  );
}


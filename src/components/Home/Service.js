import React from 'react';
import megaphone from "./home-images/Megaphone.png";
import pencil from "./home-images/Pencil.png";
import rocket from "./home-images/Rocket.png";
import service from "./home-images/Service.png";

const Service = ({styles}) => {
    return(
        <>
         <section className={styles.services}>
        <div className={styles.sec_title}>
          <span></span>
          <h1>НАШІ ПОСЛУГИ</h1>
          <span></span>
        </div>
        <div className={styles.service_blocks}>
          <ul>
            <li>
              <img src={megaphone} alt="" />
              <h3>ПРОЕКТ</h3>
              <p>
                Правильно прийняті рішення допоможуть запобігти зайвих витрат!
              </p>
            </li>
            <li>
              <img src={rocket} alt="" />
              <h3>ПРОЕКТ</h3>
              <p>
                Правильно прийняті рішення допоможуть запобігти зайвих витрат!
              </p>
            </li>
            <li>
              <img src={service} alt="" />
              <h3>ПРОЕКТ</h3>
              <p>
                Правильно прийняті рішення допоможуть запобігти зайвих витрат!
              </p>
            </li>
            <li>
              <img src={pencil} alt="" />
              <h3>ПРОЕКТ</h3>
              <p>
                Правильно прийняті рішення допоможуть запобігти зайвих витрат!
              </p>
            </li>
          </ul>
        </div>
      </section>
        </>
    )
}

export default Service
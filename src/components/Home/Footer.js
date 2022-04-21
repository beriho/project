import React from 'react';
import instagram from "./home-images/Instagram.png";
import twitter from "./home-images/Twitter Squared.png";
import telegram from "./home-images/Telegram App.png";
import facebook from "./home-images/Facebook.png";
import phone from "./home-images/Phone.png";
import mail from "./home-images/Mail.png";
import address from "./home-images/Address.png";
import styles from "./Home.module.css"
import { arrow, logo } from "../utils/svg";

const Footer = () => {
    return(
        <>
         <footer>
        <div className={styles.footer_left_side}>
          <span>{logo}</span>
          <p>
            MOXXXY користується заслуженою довірою і високою репутацією серед
            клієнтів та партнерів, що досягнуто завдяки виконанню своїх
            зобов’язань перед клієнтами та партнерами, чітким дотриманням
            законодавства, наявністю потужної матеріально-технічної бази,
            висококваліфікованим керівникам, інженерам та робітникам різних
            спеціальностей.
          </p>
        </div>
        <div className={styles.footer_right_side}>
          <ul>
            <li className={styles.footer_title}>МЕНЮ</li>
            <li>Головна</li>
            <li>Про нас</li>
            <li>Проекти</li>
            <li>Статті</li>
            <li>Контакти</li>
          </ul>
          <ul>
            <li className={styles.footer_title}>ПОСЛУГИ</li>
            <li>Проектування</li>
            <li>Будівництво</li>
            <li>Ремонт та сервіс</li>
          </ul>
          <ul>
            <li className={styles.footer_title}>МЕДІА</li>
            <li>
              <img src={instagram} alt="" />
              <span>moxxxyofficial</span>
            </li>
            <li>
              <img src={twitter} alt="" />
              MOXXXY
            </li>
            <li>
              <img src={facebook} alt="" />
              MOXXXY
            </li>
            <li>
              <img src={telegram} alt="" />
              moxxxytelegram
            </li>
          </ul>
          <ul>
            <li className={styles.footer_title}>КОНТАКТИ</li>
            <li><img src={phone} alt="" />+38 (044) 934 42 31</li>
            <li><img src={mail} alt="" />moxxxy@gmail.com</li>
            <li><img src={address} alt="" />Київ, вул. Хрещатик, 23</li>
          </ul>
        </div>
        <a className={styles.arrow_to_top} href="#navbar">{arrow}</a>
      </footer>
        </>
    )
}

export default Footer
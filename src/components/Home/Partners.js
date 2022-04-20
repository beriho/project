import React from 'react';
import styles from "./Home.module.css"
import rectangle7 from "./home-images/Rectangle 7.png";
import rectangle8 from "./home-images/Rectangle 7-1.png";
import rectangle9 from "./home-images/Rectangle 7-2.png";
import rectangle10 from "./home-images/Rectangle 7-3.png";
import rectangle11 from "./home-images/Rectangle 7-4.png";
import rectangle12 from "./home-images/Rectangle 7-5.png";

const Partners = () => {
    return(
        <>
         <section className={styles.our_partners}>
        <div className={styles.sec_title}>
          <span></span>
          <h1>НАШІ ПАРТНЕРИ</h1>
          <span></span>
        </div>
        <div className={styles.partner_blocks}>
          <div className={styles.partner_block}>
            <img src={rectangle7} alt="" />
            <div className={styles.partner_block_info}>
              <h3>MONOBANK</h3>
              <p>
                український додаток для інтернет-банкінгу, запущений у 2017
                році. Працює за банківською ліцензією «Універсал Банку».
              </p>
            </div>
          </div>
          <div className={styles.partner_block}>
            <img src={rectangle8} alt="" />
            <div className={styles.partner_block_info}>
              <h3>ЕПІЦЕНТР</h3>
              <p>
                мережа торгових центрів на території України. Основна
                спеціалізація компанії – роздрібна торгівля товарами.
              </p>
            </div>
          </div>
          <div className={styles.partner_block}>
            <img src={rectangle9} alt="" />
            <div className={styles.partner_block_info}>
              <h3>FOREEST</h3>
              <p>
                Постачальник пиломатеріалів, що займається виробництвом та
                реалізацією пиломатеріалів по всій території України.
              </p>
            </div>
          </div>
          <div className={styles.partner_block}>
            <img src={rectangle10} alt="" />
            <div className={styles.partner_block_info}>
              <h3>FORDAQ</h3>
              <p>
                Торговий та інформаційний портал лісової галузі, що свою
                організацію для залучення всіх імпортерів пиловника та
                пиломатеріалів з листяних та хвойних порід деревини.
              </p>
            </div>
          </div>
          <div className={styles.partner_block}>
            <img src={rectangle11} alt="" />
            <div className={styles.partner_block_info}>
              <h3>WEYERHAEUSER</h3>
              <p>
                Американська лісозаготівельна компанія, яка володіє майже 12 400
                000 акрів лісових угідь у США та управляє додатковими 14 000 000
                акрів лісових угідь у Канаді.
              </p>
            </div>
          </div>
          <div className={styles.partner_block}>
            <img src={rectangle12} alt="" />
            <div className={styles.partner_block_info}>
              <h3>STORA ENSO</h3>
              <p>
                Фінсько-шведська лісопромислова компанія, одна з найбільших у
                світі.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Partners
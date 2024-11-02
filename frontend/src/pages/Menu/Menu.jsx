import React, { useContext, useState } from 'react'
import { Bg_banner } from '../../components/bg_banner/bg_banner'
import { Container } from '../../pages/customer_journey/plan_details/journey';
import styles from './Menu.module.css'
import MenuSelect from './MenuSelect';
import MenuDisplay from './MenuDisplay/MenuDisplay';
const Menu = () => {
  const [cat, setCat] = useState("All")

  return (
    <>
      <Bg_banner name={"Menu"} />
      {/* Menus Section Stats here  */}
      <div className={styles.Menu_Main_Section}>
        <Container>
          <div className={styles.Menu_Below_Section}>
            <h2>Menus of the day</h2>
            <MenuSelect cat={cat} setCat={setCat} />
            <MenuDisplay cat={cat} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Menu
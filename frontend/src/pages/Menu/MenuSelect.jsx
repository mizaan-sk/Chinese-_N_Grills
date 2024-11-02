import React from 'react'
import styles from './MenuSelect.module.css'
import { new_menu_list } from '../../assets/new_menu_list'

const MenuSelect = ({ cat, setCat }) => {
    return (
        <div className={styles.menu_select_main_section}>
            {new_menu_list.map((item, index) => {
                return (
                    <div 
                        onClick={() => setCat(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                        key={index} 
                        className={styles.menu_below_section}
                    >
                        <div className={styles.btn_main_section}>
                            <p className={`${styles.btn_main_text} ${cat === item.menu_name ? styles.active : ''}`}>
                                {item.menu_name}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuSelect

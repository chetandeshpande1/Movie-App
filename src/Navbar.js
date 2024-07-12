import React from "react";
import styles from './Navbar.module.css'
import "./styles.css"


// import styled from "styled-components"; // how to use styled components refer 10/07/2024 push


function Navbar(props) {
    
    const {cartCount} = props
        return(
        <>
            <div className={styles.nav}>
                <div className={styles.title}>Movie App</div>
                <div className={styles.cartIconContainer}>
                    <img className={styles.cartIcon} alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/833/833314.png"/>
                    <span className={styles.cartCount} color="violet">{cartCount}</span>
                </div>
            </div>
        </>
        )
}

export default Navbar;
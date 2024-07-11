import React from "react";
import './styles.css';
import styled from "styled-components";

// background-color: #4267b2; instead of gradient
const Nav = styled.div`
    height: 70px;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
    align-items: center;
	position: relative;
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 300;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    margin-left: 20px;
    &:hover{color:black}
`;

const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
    color:white
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12;
    visibility: ${(props) => props.show? "visible" : "hidden"}
`;

class Navbar extends React.Component{
    render(){
        return(
        <>
            <Nav>
                <Title>Movie App</Title>
                <CartIconContainer>
                    <CartImg alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/833/833314.png"/>
                    <CartCount color="violet" show = {true}>3</CartCount>
                </CartIconContainer>
            </Nav>
        </>
        )
    }

}

export default Navbar;

import React, { useState }from "react";
import style from "styled-components"
import mother from "../images/mother.jpg"
import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"
import { FaTimes } from "react-icons/fa"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";

const First = () =>{
    const [click, setClick] = useState (false);
    const handclick =  () => {
        setClick(!click);
    };

    return(
        <Container>
            <Leftwrap>
                <LeftContain>
                    <LogoContain>
                        <Logowrap>
                            <Logoholder>
                                <Logo src={logo} />
                                <Nav onClick={handclick} click={click}>
                                    <Navholder>
                                        <Navbutton>Calculator</Navbutton>
                                    </Navholder>
                                    <br/>
                                    <br/>
                                    <NavlinkHolder>
                                        <Navlink>Home</Navlink>
                                        <Navlink>About us</Navlink>
                                        <Navlink>Products</Navlink>
                                        <Navlink>Calculator</Navlink>
                                        <Navlink>FAQs</Navlink>
                                    </NavlinkHolder>
                                    <ICONWRAP>
                                    <ICONHOLDFOOT>
                                        <BsWhatsapp/>
                                    </ICONHOLDFOOT>
                                    <ICONHOLDFOOT>
                                        <FiFacebook/>
                                    </ICONHOLDFOOT>
                                    <ICONHOLDFOOT>
                                        <FiTwitter/>
                                    </ICONHOLDFOOT>
                                    <ICONHOLDFOOT>
                                        <AiFillLinkedin/>
                                    </ICONHOLDFOOT>
                                    <ICONHOLDFOOT>
                                        <FiInstagram/>
                                    </ICONHOLDFOOT>
                                </ICONWRAP>
                                </Nav>
                            </Logoholder>
                        </Logowrap>

                        <Monileicon onClick={handclick}>
                            {click? <FaTimes/>: <GiHamburgerMenu/>}
                        </Monileicon>
                    </LogoContain>
                </LeftContain>
            </Leftwrap>
            <RightContain>
                <RightWrap> 
                    <Rightheader>
                        <Right1></Right1>
                        <Right2>
                            <Rheader>
                            <Links>Home</Links>
                            <Links>About Us</Links>
                            <Links>Products</Links>
                            <Links>FAQs</Links>
                            <Links>Calculator</Links>
                            <Links>Login</Links>
                            </Rheader>
                         
                        </Right2>
                        <Right3>
                            <BUTTON>GET Started</BUTTON>
                        </Right3>
                    </Rightheader>
                </RightWrap>
                <Rightlow>
                    <Rightpara>
                        <Rightparah1>
                            Modern Financial & Business infrastructure for African Healthcare
                        </Rightparah1>
                        <Lowerbuthead>
                            <Butdivhold>
                                <Firstbut>
                                    Get Financing - Business and Customer
                                </Firstbut>
                            </Butdivhold>
                            <Butdivhold>
                                <Secondbut>
                                    Buy Health Insurance at 0 upfront cost or pay with waste money
                                </Secondbut>
                            </Butdivhold>
                            <Butdivhold>
                                <Thirdbut>
                                    BNPL Payment integration
                                </Thirdbut>
                            </Butdivhold>
                        </Lowerbuthead>
                    </Rightpara>
                </Rightlow>
                <FirstImagehold>
                    <Firstimg src= {logo2}/>
                </FirstImagehold>
            </RightContain>
        </Container>
    );
};
export default First

const Container = style.div`
    background-color: #17365d;
    width:100%;
    display: flex;
    overflow: hidden;
    @media screen and (max- width: 760px ) {
        display: grid;
    }
`
const LeftContain = style.div`
    height: 100%;
    background-image: url(${mother});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 760px) {
        display: grid;
    }
`
const Leftwrap = style.div`
    flex: 1;
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 760px){
        height: 80vh;
    }
`
const LogoContain = style.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
` 
const Logoholder = style.div`
    display:flex;
    justify-content: center;
    width: 80%;
`
const Logo = style.img`
    width: 80px;
    height: 70px;
`
const Nav = style.div`
    color: white;
    display: none;
    @media screen and (max-width: 760px){
        display: flex;
        flex-direction: column;
        position: absolute;
        padding-right: 0;
        padding-left: 0;
        top: 70px;
        height: 100vh;
        width: 70%;
        justify-content: flex-start;
        background: #17365d;
        

    }
    


`
const NavlinkHolder = style.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap; 15px;
`
const Navlink = style.div`

`
const Monileicon = style.div`
    display: none;
    @media screen and (max-width: 850px) {
        font-size: 25px;
        background color: #17365d;
        color: white;
        display: block;
        position: absolute;
        top: 13px;
        right: 0;
        transform: translate(-100%, 60%);
    }
`
const Navbutton = style.button`
    background-color: gray;
    border: none;
    color: white;
    padding: 13px 28px;
    text-align: center;
    border-radius: 20px;
    display: inline-block;
    text-decoration: none;
`
const RightContain = style.div`
    flex: 2;
    width: 100%;
    position: relative;
    @media screen and (max-width: 760px){
        width: 100%;
        height: 100%;
    }
`
const RightWrap = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 760px) {
        display: none;
    }
`
const Rightheader = style.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: evenly;
    align-items: center;
`
const Right1 = style.div`

`
const Right2 = style.div`
`
const Rheader = style.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 400px;
    justify-content: space-around;
`
const Links = style.div`
    color: white;
    cursor: point;
    font-size: 14px;
    font-weight: bold;
    :hover{
        color: #31ace7;
        transition-duration: 0.4sec;
    }
`
const Right3 = style.div`

`
 const BUTTON = style.button`
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 13px 28px;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    display: inline-block;
    text-decoration: none;

`
const Rightlow = style.div`
    z-index: 12;
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
    z- index: 2;
    @media screen and (max-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
const Rightpara = style.div`
    z-index: 12;
    padding: 50px;
    width: 90%;
    @media screen and (max-width: 1025px){
        z-index: 12;
        padding: 50px;
        width: 90px;
    }
    @media screen and (max-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0x;
        text-align: center;
    }
`
const Rightparah1 = style.h3`
    z- index: 12;
    width: 100%;
    color: white;
    font-size: 50px;
    @media screen and (max-width:1025px) {
        z- index: 12;
        width: 100%;
        color: white;
        font-size: 40px;
    }
    @media screen and (max-width: 760px){
        font-size: 25px;
        text-align: center;
        padding: 0;
        margin: 0;
    }

`
const Butdivhold = style.div`
    padding: 4px;
    @media screen and (max-width: 760px) {
        text-align: center;
    }
`
const Lowerbuthead = style.div`
    z- index: 12;
    @media screen and (max-width: 760px) {
        text-align: center;
        padding: 0;
        margin: 0;
    }
`
const Firstbut = style.button`
    background-color: #8bc34a;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 26px;
    border-radius: 20px;
    @media screen and (max-width; 760px) {
        font-size: 12px;
        font-weight: 500;
        padding: 8px 12px;
        background-color: #8BC34A;
        color: black;
    }
    @media screen and (max-width: 1024px) {
        background-color: white;
        border: none;
        color: #306ab2;
        padding:15px 32px;
        align-items: center;
        display: inline-block;
        text-decoration: none;
        font-size: 16px;
        border-radius: 20px;
    }


`
const ICONHOLDFOOT = style.div`
    font-weight: bolder;
`
const ICONWRAP = style.div`
    padding-left: 50px;
    width: 50%;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    gap: 20px;
`
const Firstimg = style.img`
    @media screen and (max-width: 760px) {
        width: 500px;
        height: 500px;
    }
    @media screen and (max-width: 500px) {
        width: 400px;
        height: 250px;
    }
`
const FirstImagehold = style.div`
    position: absolute;
    top: 10px;
    left: 160px;
    z-index: 1;
    @media screen and (max-width: 1024px){
        top: 10px;
        left: -40px;
        z-index: 1;
    }
    @media screen and (max-width: 760px) {
        top: 150px;
        left: 70px;
    }
`
const Thirdbut = style.button`
    background-color: white;
    border: none;
    color: #306ab2;
    padding: 15px 32px;
    text-align: center;
    border-radius: 20px;
    display: inline-block;
    @media screen and (max-width: 1024px) {
        background-color: white;
        border: none;
        color: #306ab2;
        padding:15px 32px;
        align-items: center;
        display: inline-block;
        text-decoration: none;
        font-size: 16px;
        border-radius: 20px;
        @media screen and (max-width:760px) {
        font-size: 12px;
        font-weight: 500;
        padding: 8px 12px;
        background-color: white;
    }
`
const Secondbut = style.button`
    background-color: #306ab2;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 25px;
    border-radius: 20px;
    @media screen and (max-width: 1024px) {
        background-color: white;
        border: none;
        color: #306ab2;
        padding:15px 32px;
        align-items: center;
        display: inline-block;
        text-decoration: none;
        font-size: 16px;
        border-radius: 20px;
        @media screen and (max-width:760px) {
        font-size: 12px;
        font-weight: 500;
        padding: 8px 12px;
        background-color: white;
    }

`
const Logowrap = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Navholder = style.div`
`

  
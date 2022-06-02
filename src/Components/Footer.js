import React from "react";
import style from "styled-components"
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import { AiFillLinkedin } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md"

const Footer = () => {
    return(
        <FooterContain>
            <br/>
            <br/>
            <Footerarrowup>
                <MdKeyboardArrowUp/>
            </Footerarrowup>
            <Footerwrap>
                <Left>2022 Arteri Africa</Left>
                <Right>
                    <Footer1>
                        <Footericon>
                            <Footericonhold>
                                <BsWhatsapp/>
                            </Footericonhold>
                            <Footericonhold>
                                <FiFacebook/>
                            </Footericonhold>
                            <Footericonhold>
                                <FiTwitter/>
                            </Footericonhold>
                            <Footericonhold>
                                <FiInstagram/>
                            </Footericonhold>
                            <Footericonhold>
                                <AiFillLinkedin/>
                            </Footericonhold>
                        </Footericon>
                        <Footerarrow>
                            <MdKeyboardArrowUp/>
                        </Footerarrow>
                    </Footer1>
                </Right>
            </Footerwrap>
        </FooterContain>
    )
}
export default Footer

const FooterContain = style.div`
    background-color: #17365d;
    colort: white;
    width: 100%;

`
const Footerarrowup = style.div`
    display: none;
    @media screen amd (max-width: 760px) {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
`
const Footerwrap = style.div`
    display: flex;
    bottom: 0%;
    @media screen and (max-width: 760px) {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`
const Left = style.p`
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 14px;
    @media screen and (max width 760px) {
        width: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
    }
`
const Right = style.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and(max width 760px) {
        width: 100%;
        justify-content center;
    }
`
const Footer1 = style.div`
    font-weight: bolder;
    font-sixe: 20px;
    display: flex;
    justify-content: space-around;
    width: 70%;
    padding-bottom: 10px; 
`
const Footericon = style.div`
    font-size: 14px;
    color: blue;
    width:50%; 
    font-weight: bolder;
    display: flex; 
    justify-content: space-around;
    gap: 15px;
`
const Footericonhold = style.div`
    font-weight: bolder;

`
const Footerarrow = style.div`
    color: white;
    font-size: 25px;
    @media screen and (max-width: 760px) {
        display: none;
    }
`
import React from "react";
import style from "styled-components"
import { GrFormCheckmark } from "react-icons/gr"
import umbrella from "../images/umbrella.jpg"

const Fourth = () => {
    return(
        <FourthContain>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Fourthwrap>
                <br/>
                <Fourleft>
                    <LeftFourthwrap1>
                        <FourthTitle>Kova is Now Live!</FourthTitle>
                        <FourthHead>Financing for health coverage plans</FourthHead>
                        <Num>
                            <Numwrap>
                                <p>
                                    <GrFormCheckmark/> Health plans like insurance, at zero upfront cost 
                                </p>
                                <p>
                                    <GrFormCheckmark/> Alternative payment Options for bottom of the pyramid- pay with waste
                                </p>
                                <p>
                                    <GrFormCheckmark/> 
                                    Compare plans across 40+ coverage providers
                                </p>
                                <p>
                                    <GrFormCheckmark/>
                                    Special feature for the African Diaspora
                                </p>
                                <p>
                                    <GrFormCheckmark/>
                                    Dependable Healthcare Advisor
                                </p>
                                <p>
                                    <GrFormCheckmark/>
                                    AI Recommendation engine
                                </p>
                            </Numwrap>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Fourtbottonhold>
                                <Fourthbutton>Get Kova</Fourthbutton>
                            </Fourtbottonhold>
                        </Num>
                    </LeftFourthwrap1>
                </Fourleft>
                <FourRight>
                    <RightWRAP>
                        <Fourthimg src={umbrella} />
                    </RightWRAP>
                </FourRight>
            </Fourthwrap>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </FourthContain>
    );
};
export default Fourth

const FourthContain = style.div`
    width: 100%;
    background-color: #efefef;

`
const Fourthwrap = style.div`
    display-flex;
    justify-content: space-around;
    gap: 25px;
    flex-wrap: wrap;
    @media screen and (max-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
    }
`
const Fourleft = style.div`
    width:50%;
    @media screen and (max-width: 760px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const LeftFourthwrap1 = style.div`
`

const FourthTitle = style.h4`
    padding-left: 15px;
    font-size: 14px;
`
const FourthHead = style.h4`
    padding-left: 15px;
    font-size: 14px;
    font-weight: normal;
    color: #1f2e88;
`
const Num = style.div`
`
const Numwrap = style.ul`
    font-size: 12px;
    font-size: bold;
`
const Fourtbottonhold = style.div`
    width: 60%;
    display: flex;
    flex-direction: row-reverse;
`
const Fourthbutton = style.button`
    background-color: #4caf50;
    border: none:
    color: white;
    text-align: center;
    border-radius: 20px;
    font-size: 16px;
    padding: 15px 32px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`
const RightWRAP = style.div`
    @media screen and (max-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

`
const Fourthimg = style.img`
    background-position: center;
    background-size: cover;
    @media screen amd (max-width: 760px) {

    }
`
const FourRight = style.div`
`
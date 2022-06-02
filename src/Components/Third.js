import React from "react";
import style from "styled-components"
import doctors from "../images/doctors.jpg"

const Third = ()=>{
    return(
        <ThirdpageContain>
            <Thirdpagewrap>
                <Thirdlay>
                    <Lay1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Thirdpara1>
                            Offer financing to your users at up to 24 months Repayment
                            window. You get paid immediately by us, we collect the payment
                            from your customers over time.
                        </Thirdpara1>
                        <Thirdpagebutton>GET ONBOARDED</Thirdpagebutton>
                        <br/>
                        <br/>
                    </Lay1>
                </Thirdlay>
                <Thirdlay2>
                    <Thirdwrap2>
                        <Thirdimg src={doctors}/>
                    </Thirdwrap2>
                </Thirdlay2>
                <Thirdlay3>
                    <Thirdwrap3>
                        <Lay2>
                            <br/>
                            <br/>
                        </Lay2>
                        <Thirdpage3upper>
                            <Header>Operational and Equipment</Header>
                            Financing At comfortable interest rates and repayment length
                        </Thirdpage3upper>
                    </Thirdwrap3>
                </Thirdlay3>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Thirdpagewrap>
        </ThirdpageContain>
    );
};
export default Third

const ThirdpageContain = style.div`
    background-color: #17365d;
    height: 500px;
    display: flex;
    justify-content: center;
    width:100%;
    align-items: center;
    @media screen and (max-width: 780px) {
        height: 100%;
    }
`
const Thirdpagewrap = style.div`
    padding-left: 20px;
    width:25%;
    font-size: 14px;
    @media screen and (max-width: 760px){
        width: 90px;
        display: grid;
        align-items: center;
        justify-content: center;
    }
`
const Thirdlay = style.div`
    width: 25%;
    padding-left: 20px;
    font-size: 14px;
    @media screen  and  (max-width: 760px) {
        width: 90px
        display: grid;
        align-items: center;
        justify-content: center;
    }

`
const Lay1 =style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: bold;
    font-size: 12px;
    
`
const Thirdpara1 = style.p`
    @media screen and (max-width: 760px) {
        text-align: center;
    }
`
const Thirdpagebutton = style.button`
    background-color: #4caf50;
    border: none;
    padding: 15px 32px;
    text-align: center;
    color: white;
    text-decoration: none;
    display: inline-block;
    border-radius: 20px;
    font-size: 16px;
`
const Thirdlay2 = style.div`
    flex: 2;
`
const Thirdimg = style.img`
    width: 100%;
    background-size: cover;
    background-position: center;
`
const Thirdwrap2 = style.div`
`
const Lay2 = style.div`
`
const Thirdlay3 = style.div`
    width:25%;
    color: white;
    padding-left: 10px;
    tex-align: center;
    @media screen and (max-width: 760px) {
        width: 100%
        display: grid;
        justify-content: center;
    }
`
const Header = style.h4`
    font-size: 12px;
`
const Thirdpage3upper = style.p`
    font-size: 12px;
`
const Thirdwrap3 = style.p`
`
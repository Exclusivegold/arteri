import React from "react";
import style from "styled-components"
import Card from "./card";
import computer from "../images/computer.png";
import wallet from "../images/wallet.png";
import check from "../images/check.png"

const CardDisplay = () =>{
    return(
        
        <CardContain>
            <Cardwrapper>
                <Card
                icon={check}
                Title="Apply"
                description="Apply and Pre-qualify for health insurance plans and out of pocket
                advance for any procedure"
                />
                <Card
                icon={computer}
                Title="Ease"
                description="Seamless experience with your care provider, immediate onboarding with top-tier HMO's"
                />
                <Card
                icon={wallet}
                Title="Repayment"
                description="Get the care you neednow, pay back in up to 24 months, 0% interese plans available"
                />                
            </Cardwrapper>
        </CardContain>
        
    );
};
export default CardDisplay

const CardContain = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
`
const Cardwrapper = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`
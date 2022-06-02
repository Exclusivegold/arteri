import React from "react";
import style from "styled-components";
import CardDisplay from "./CardDisplay";

const Second = () =>{
    return(
        <SecondContain>
            <br/>
            <br/>
            <br/>
            <SecondHeader>FEATURES</SecondHeader>
            <SecondHeader2>Indivduals and Household</SecondHeader2>
            <br/>
            <br/>
            <CardDisplay/>
            <br/>
            <br/>
            <Holder>
                <Button>Get Started</Button>
            </Holder>
        </SecondContain>
    );
};
export default Second

const SecondContain = style.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items-center;

`
const SecondHeader = style.h4`
    font-size: 16px;
    font-weight: bold;
    color: #17365d;
    text-align: center;
`
const SecondHeader2 = style.h4`
    color: #17365d;
    font-weight: normal;
    text-align: center;

`
const Holder = style.div`
`
const Button = style.button`
   background-color: #4caf50;
   border: none;
   color: white;
   padding: 15px 32px;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   border-radius: 20px;
   display: flex;
   align-items: center;

`
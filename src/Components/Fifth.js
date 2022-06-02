import React from "react";
import style from "styled-components"
import arteri from "../images/arteri.png"

const Fifth =() =>{
    return(
        <FifthContain>
            <Fifthwrap>
                <Fifth1>
                    <Imagehold>
                        <Fifthimage src= {arteri}/>
                    </Imagehold>
                    <Fifthpara1>
                        We make it easier for you to take care <br/>of you and your family's health
                    </Fifthpara1>
                </Fifth1>
                <Fifth2>
                    <Fhead>Contact</Fhead>
                    <Fifthpara2>hi@artei.africa</Fifthpara2>
                    <Fifthpara2>loan@aeteri.africa</Fifthpara2>
                    <Fifthpara2>09067345883 (call and whatsapp)</Fifthpara2>
                </Fifth2>
                <Fifth3>
                    <Fhead2>Where we operate</Fhead2>
                    <Fhead2>Nigeria</Fhead2>
                    <Fhead2>United State</Fhead2>
                </Fifth3>
                <Fifth4>
                    <Fhead3>Links</Fhead3>
                    <Fifthrund>
                        <Fifthpara3>Terms of use</Fifthpara3>
                        <Fifthpara3>Privacy policy</Fifthpara3>
                    </Fifthrund>
                </Fifth4>
            </Fifthwrap>
        </FifthContain>
    );
};
export default Fifth

const FifthContain = style.div` 
    font-size: 12px;
    background-color: #17365d;
    color: white;
    width: 100%;
    border: none;
    @media screen and (max-width: 760px) {
        padding: 0;
        margin: 0;
    }
`
const Fifthwrap = style.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width:760px)  {
        display: grid;
        width: 80%;
    }
` 
const Fifth1 = style.div`
`
const Fifth2 = style.div`
`
const Fifth3 =style.div`
    padding-bottom: 35px;
    @media screen and (max-width: 760px) {
        padding-bottom:0;
    }

`
const Fifth4 = style.div`
    padding bottom: 30px;
    @media screen and (max-width: 760px) {
        padding-bottom: 0;
        padding-top: 10px;

    }
`
const Fifthimage = style.img`
    width: 200px;
    height: 200px;
`
const Imagehold = style.div`
`
const Fifthpara1 = style.div`
`
const Fifthpara2 = style.div`
`
const Fifthpara3 = style.div`
    color:  #3385d7;
    padding-top: 10px;
    margin: 5px;
    background-color: transparent;
    border: 1px #b2beb5;
    border-raius: none;
    box-shadow: 0px 0 5px -2px #888;
    :hiver{
        cursor: pointer;
        text-decorator: underline;
    } 
`

const Fhead = style.div`
`
const Fhead2 = style.div`
`
const Fhead3 = style.div`
`
const Fifthrund = style.div`
    background-color: transparent;
    border: 1px #b2beb5;
    border-radius: none;
    box-shadow: 0px 0 5px -2px #888;
`

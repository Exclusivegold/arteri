import React from "react";
import style from "styled-components";

const Card =({icon, description, Title}) =>{
    return(
        <>
        <MainContain>
            <MainContainwrap>
                <Iconholder>
                    <Icon src={icon} />
                </Iconholder>
                <Text>
                    <p>{Title}</p>
                </Text>
                <Description>
                    <p>{description}</p>
                </Description>
            </MainContainwrap>
        </MainContain>
        </>
    )
}
export default Card;

const MainContain = style.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 300px;
    height: 200px; 
    background-color: white:
    border: 1px  #b2beb5;
    border-radius: 30px;
    box-shadow: 0px 0 5px -2px #888;

`
const MainContainwrap = style.div`
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-directiom: colum;
`

const Iconholder = style.div`
    display: flex;
    justify-content: center;

`
const Icon = style.img`
    width: 55px;
    height: 55px;
`
const Description = style.div`
    font-size: 12px;

`
const Text = style.div`
    display: flex;
    justify-content: center;
`

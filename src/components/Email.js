import React from "react";
import styled from "styled-components";
import EmailBg from '../assets/images/boat.jpg';
import { Button } from "./Button";

const Email = () => {
    return(
        <EmailContainer>
           <EmailContent>
               <h1>Get Access to Exclusive Offers</h1>
               <p> Sign up for your newsletter below to get $100
                   of your first trip!
               </p>
               <from action ="#">
                   <FormWrap>
                       <lable htmlFor="email">
                           <input type="email" placeholder="Enter your email" id="email" />
                       </lable>
                       <Button as="button" type="submit" primary="true" round="true"
                       css={`height: 40px;
                       width: 100%;
                       outline: none;
                       
                       
                        @media screen and (max-width: 768px){
                            width: 100%;
                            min-width: 350px;
                        } 

                        @media screen and (max-width: 400px){
                            width: 100%;
                            min-width: 250px;
                        } 
                       `}>
                           Sign Up
                       </Button>
                   </FormWrap>
               </from>
           </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.5) 0%,
        rgba(0,0,0,0.5) 35%,
        rgba(0,0,0,0.1) 100%
        ), 
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 0.5rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p{
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form{
        z-index: 10;
    }
`
const FormWrap = styled.div`
    input{
        padding: 1rem 1rem;
        outline: none;
        width: 300px;
        height: 20px;
        border-radius: 20px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }

    input{
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
    }
`

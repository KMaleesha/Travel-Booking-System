import React from "react";
import styled from "styled-components";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import { graphql } from "gatsby";
import {Button} from './Button';
import {ImLocation} from "react-icons/im"

const Trips = ({heading}) => {
const data = useStaticQuery(graphql`
  query TripsQuery {
    allTripsJson {
      edges {
        node {
          alt
          button
          name
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  } 
`)

function getTrips(data){
     const tripsArray = []
     data.allTripsJson.edges.forEach((item,index) => {
       tripsArray.push(
         <ProductCard key={index}>
           <ProductImg 
           alt={item.node.alt}
           fluid={item.node.img.childImageSharp.fluid} />

           <ProductInfo>
             <TextWrap>
               <ImLocation />
               <ProductTitle>{item.node.name}</ProductTitle>
             </TextWrap>
             <Button to="/trips" primary="true" round="true" 
             css={`position:absolute;
             top:420px;
             font-size:14px;
             `} >
               {item.node.button}</Button>
           </ProductInfo>

         </ProductCard>
       )
     })
     return tripsArray
}

    return(
       <ProductContainer>
           <ProductHeading>{heading}</ProductHeading>
           <ProductWrapper>{getTrips(data)}</ProductWrapper>
       </ProductContainer>
    )
}


export default Trips

const ProductContainer = styled.div`
    min-height: 100vh;
    padding: rem calc((100vw - 1300px) / 2);
    color:#fff;
`

const ProductHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover{
    filter:brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 200px){
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const ProductTitle = styled.div`
  font-width: 400px;
  font-size: 1rem;
  margin-left: 0.5rem;

`




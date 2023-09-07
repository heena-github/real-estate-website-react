import React from 'react'
import styled from 'styled-components'
import {FaYoutube, FaInstagram, FaFacebook,FaLinkedin, FaArrowRight} from 'react-icons/fa'

import { IconContext } from 'react-icons/lib'

const Footer = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <ColumnOne>
                        <h1>Let's find<br/> your dream home</h1>
                    </ColumnOne>
                </Row>
                <Row>
                    <ColumnTwo>
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href='adf'>Faq</a></li>
                            <li><a href='adf'>Support</a></li>
                            <li><a href='adf'>Question</a></li>
                        </ul>
                    </ColumnTwo>
                </Row>
                <Row>

                    <ColumnTwo>
                        <h4>Offices</h4>
                        <ul>
                            <li><a href='adf'>United States</a></li>
                            <li><a href='adf'>Europe</a></li>
                            <li><a href='adf'>Asia</a></li>
                        </ul>
                    </ColumnTwo>
                </Row>
                {/* <ColumnThree>
                <Row>
                    <ul>
                        <IconContext.Provider value={{color:'#cd853f', size: '30px'}}>                            
                            <li><FaYoutube/></li>
                            <li><FaFacebook/></li>
                            <li><FaInstagram/></li>
                            <li><FaLinkedin/></li>
                        </IconContext.Provider>
                    </ul>
                </Row>   
 
                </ColumnThree>
                <Button>Let's chat <ArrowRight/></Button> */}
               
            </Container>
        </Section>
    )
}


const Section = styled.section`
    width:100%;
    height:100%;

`
const Container = styled.div`

    padding: 0rem 2rem;
    
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 300px 100px;
    background-color: black;
    margin-top:0;
    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 400px;

    }
`
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    ul{
        list-style: none;
    }
    ul li:not(:last-child){
        margin-bottom: 15px;
        
    }
`


const ColumnOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
    padding: 1rem 0rem;
    h1{
        margin-bottom: 1rem;
        color:white;
        font-size: clamp(2rem, 4rem, 7rem);
    }
    a{
        text-decoration: none;
    }
`
const ColumnTwo = styled.div`
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h4{
        text-transform: capitalize;
        margin-bottom: 15px;
        font-weight: bold;
        color: white;
    }
    a{
        font-size: 15px;
        text-decoration: none;
        color: white;
    }
`
const ColumnThree = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0rem;
    ul li{
        display: inline;
        height: 20px;
        margin-right:20px;
    }

`


const Button = styled.button`

    display: none;
    @media screen and (max-width:768px){
        margin: 2rem 0rem;
        display: block;
        margin-top:20px;
        height: 30px;
        width:100px;
        color: white;
        border-style:none;
        background-color: #cd853f;
        color:white;
    }
`



const ArrowRight = styled(FaArrowRight)`
    padding-top: 4px;
    
`


export default Footer
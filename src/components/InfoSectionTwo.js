import React from 'react'
import styled from 'styled-components'
import {FaArrowRight} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const InfoSection = ({heading,paragraphOne,paragraphTwo,buttonLabel,imageOne,imageTwo}) => {

    const imageAnim = {
        hidden:{opacity:0, y: -100},
        show: {opacity:1,y:0 ,transition:{duration:1, ease: "easeOut", staggerChildren: 1}},
        
    }
    const paragraphAnim = {
        hidden:{opacity:0, x: -100},
        show: {opacity:1,x:0 ,transition:{duration:1, ease: "easeOut", staggerChildren: 1}},
        
    }
    return (
        <Section>
            <HeaderContainer>
                <motion.h1 variants={paragraphAnim} initial='hidden' animate='show'>{heading}</motion.h1>
            </HeaderContainer>

                <Container>
                    
                    <ColumnLeft variants={imageAnim} initial='hidden' animate='show'>
                        <img src={imageOne} alt=""/>
                        <p>{paragraphOne}</p>
                <Link to='/category/sale'> <Button to='/category/rent' primary="true">
                        {buttonLabel}
                        <ArrowRight/>
                    </Button>
                    </Link> 
                    </ColumnLeft>
                    <ColumnRight variants={imageAnim} initial='hidden' animate='show'>
                        <img src={imageTwo} alt=""/>
                        <p>{paragraphTwo}</p>
                <Link to='/category/sale'>   <Button to='/category/sale' primary="true">
                        {buttonLabel}
                        <ArrowRight/>
                    </Button>
                    </Link> 
                    </ColumnRight>

                </Container>
        </Section>
    )
}


const Section = styled.section`
    width:100%;
    height:100%;
    ${'' /* padding:2rem 0rem; */}

`

const HeaderContainer = styled.div`
    padding:1rem calc((100vw - 1300px)/2);
    h1{
        padding: 0rem 2rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
`


const Container = styled.div`
    padding:2rem calc((100vw - 1300px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 620px;

    @media screen and (max-width:768px) {
        padding:0rem calc((100vw - 1300px)/2);
        grid-template-columns: 1fr;
        grid-template-rows: 400px;

    }
`


const ColumnRight = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    margin-top: 100px;
    height: 500px;
    p{  
        margin-top: 2rem;
        font-size: clamp(1rem, 4vw, 1.5rem);
        @media screen and (max-width:768px){
            padding-left:5%;                    
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media screen and (max-width:768px){
            width:90%;
            height: 90%;
            align-self: center;
        }
    }


    

`
const ColumnLeft = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    height:500px;

    p{
        margin-top: 2rem;
        font-size: clamp(1rem, 4vw, 1.5rem);
        @media screen and (max-width:768px){
            margin-top: 1rem;
            padding-left:5%;                    
        }
    }
    img{
        width: 100%;
        height:100%;
        object-fit: cover;
        @media screen and (max-width:768px){
            align-self: center;
            width:90%;
            height: 90%;
    }
}

`

const Button = styled.button`
    height: 50px;
    border-style:none;
    background-color: #fafafa;
    color:black;
    align-items: left;
    @media screen and (max-width:768px){
        padding-left:14%;
        width:100px;                    
    }


`

const ArrowRight = styled(FaArrowRight)`
    padding-top: 4px;
    @media screen and (max-width:768px){
        display:none;              
    }
    
`


export default InfoSection
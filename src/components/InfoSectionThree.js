import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const InfoSection = ({heading,paragraphTwo,paragraphOne,buttonLabel,reverse,image}) => {
    const leftAnim = {
        hidden:{opacity:0, x: -100},
        show: {opacity:1,x:0 ,transition:{duration:0.8, ease: "easeOut", staggerChildren: 1}},
        
    }

    const rightAnim = {
        hidden:{opacity:0, x: 100},
        show: {opacity:1,x:0 ,transition:{duration:1.5, ease: "easeOut", staggerChildren: 1}},
        
    }
    return (
        <Section>
            <Container>
            
                <ColumnLeft>
                    <motion.h1 variants={leftAnim} initial="hidden" animate="show">{heading}</motion.h1>
                    <motion.p variants={leftAnim} initial="hidden" animate="show">{paragraphOne}</motion.p>
                    <motion.p variants={leftAnim} initial="hidden" animate="show">{paragraphTwo}</motion.p>
             <Link to='/offers'><Button variants={leftAnim} initial="hidden" animate="show" to='/homes' primary="true">
             {buttonLabel}
             </Button>
             </Link> 
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <motion.img variants={rightAnim} initial='hidden' 
                animate='show'src={image} alt=""/>
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
const Container = styled.div`
    padding:3rem calc((100vw - 1800px)/2);
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    grid-template-rows: 800px;

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 400px;
        padding-top:10rem;
        padding-bottom: 10rem;
    }
`


const ColumnLeft = styled.div`
    height: 400px;
    margin:auto 0px auto 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
    line-height: 1.4;
    padding: 1rem 2rem;
    background-color: white;
    
    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom:1rem ;
    }
    @media screen and (max-width:768px){
        margin-top:-6rem;
        order: ${({reverse}) => (reverse ? '1' : '2')};
    }

`
const ColumnRight = styled.div`
    order: ${({reverse}) => (reverse ? '1' : '2')};
    margin:auto 0px auto 0px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-start;;
    background-color: white;
    height: 400px;
    img{
        display: block;
        width: 100%;
        height:500px;
        position: relative;
        bottom: 50px;
        object-fit: cover;
        @media screen and (max-width:768px){   
        margin-top:-2rem;
        width:80%;
        height: 400px;
        }
    }
    @media screen and (max-width:768px){
        order: ${({reverse}) => (reverse ? '1' : '2')}
    }

`

const Button = styled(motion.button)`
    height: 50px;
    width:160px;
    color: white;
    border-style:none;
    background-color: #cd853f;
    color:white;
`



export default InfoSection
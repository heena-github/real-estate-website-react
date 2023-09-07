import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const InfoSection = ({heading,paragraphTwo,paragraphOne,buttonLabel,reverse,image}) => {
    const imageAnim = {
        hidden:{opacity:0, y: -100, height:'110%',widht:'110%'},
        show: {opacity:1,y:0 , height:'100%', widht:'100%',transition:{duration:1, ease: "easeOut", staggerChildren: 1}},
        
    }    

    return (
        <Section>
            <Container>
                <ColumnRight>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                <Link to='/category/rent'><Button to='/homes' primary="true">{buttonLabel}</Button></Link> 
                </ColumnRight>
                <ColumnLeft reverse={reverse}>
                    <motion.img variants={imageAnim} initial='hidden' animate='show'  src={image} alt=""/>
                </ColumnLeft>
            </Container>
        </Section>
    )
}


const Section = styled.section`
    width:100%;
    height:100%;
    ${'' /* padding:4rem 0rem; */}

`
const Container = styled(motion.div)`
    padding:3rem calc((100vw - 1300px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 436px;

    }
`


const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};
    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom:2rem ;
    }
`
const ColumnLeft = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        height:100%;
        object-fit: cover;
        @media screen and (max-width:768px){
        width:90%;
        height: 90%;
        }
    }
    @media screen and (max-width:768px){
        order: ${({reverse}) => (reverse ? '1' : '2')}
    }

`

const Button = styled.button`
    height: 50px;
    width:160px;
    color: white;
    border-style:none;
    background-color: black;
    color:white;
`



export default InfoSection
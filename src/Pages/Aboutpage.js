import React from 'react'
import styled from 'styled-components'
import ImageSection from '../Components/ImageSection'
//import ServicesSection from '../Components/ServicesSection'
import Title from '../Components/Title'
import {Mainlayout} from '../styles/layout'
function Aboutpage() {
    return (
        <Mainlayout>
            <AboutStyled>
                <Title title={'About me'} span={'About me'}/>
                <ImageSection />
            </AboutStyled>
        </Mainlayout>
    )
}

const AboutStyled= styled.section`
        
`;


export default Aboutpage

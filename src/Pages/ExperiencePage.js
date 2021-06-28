import React from 'react'
import styled from 'styled-components'
import ExperienceSection from '../Components/ExperienceSection'

import Title from '../Components/Title'
import {Mainlayout} from '../styles/layout'

function ExperiencePage() {
    return (
        <Mainlayout>
            <ExperienceStyled>
            <Title title={'EXPERIENCE'} span={'EXPERIENCE'}/>
            <ExperienceSection />
            </ExperienceStyled>
        </Mainlayout>
    )
}

const ExperienceStyled= styled.section`


`;



export default ExperiencePage

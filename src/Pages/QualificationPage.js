import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title'
import {Mainlayout,InnerLayout} from '../styles/layout'
import QualificationSection from '../Components/QualificationSection'
//import Typed from 'react-typed'

function QualificationPage() {
    return (
        <Mainlayout>
        <QualificationPageStyled>
         <Title title={'QUALIFICATION'} span={'QUALIFICATION'}/>  
         <InnerLayout>
         <QualificationSection />
         </InnerLayout>
        </QualificationPageStyled>
        </Mainlayout>
    )
}
const QualificationPageStyled= styled.section`

`;

export default QualificationPage

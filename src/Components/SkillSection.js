import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title';
import {Mainlayout, InnerLayout} from '../styles/layout';
import ProgressBar from '../Components/ProgressBar'

function SkillSection() {
    return (
        <SkillSectionStyled>
            <Mainlayout>
           <Title title={'SKILL'} span={'SKILL'}/> 
           <InnerLayout>
                <div className="skill">
                    <ProgressBar 
                            title={'HTML'}
                            width={'70%'}
                            text={'70%'}/>

                        <ProgressBar 
                            title={'CSS'}
                            width={'75%'}
                            text={'75%'}/>

                        <ProgressBar 
                            title={'MySQL'}
                            width={'80%'}
                            text={'80%'}/>

                        <ProgressBar 
                            title={'Bootstrap'}
                            width={'60%'}
                            text={'60%'}/>

                        <ProgressBar 
                            title={'JavaScript'}
                            width={'65%'}
                            text={'65%'}/>

                        <ProgressBar 
                            title={'Java'}
                            width={'80%'}
                            text={'80%'}/>

                        <ProgressBar 
                            title={'Android Studio'}
                            width={'30%'}
                            text={'30%'}/>
                </div>
           </InnerLayout>
           </Mainlayout>
        </SkillSectionStyled>
    )
}

const SkillSectionStyled=styled.section`
    .skill{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;

    }



`;

export default SkillSection

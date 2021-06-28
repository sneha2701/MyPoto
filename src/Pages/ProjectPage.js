import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title'
import { Mainlayout,InnerLayout} from '../styles/layout'
import ProjectCard from '../Components/ProjectCard'
import design from '../images/pro1.PNG'
import design1 from '../images/pro2.png'
import design2 from '../images/pro3.png'
function ProjectPage() {
    return (
        <Mainlayout>
            <ProjectPageStyled>
             
            <Title title={'PROJECT'} span={'PROJECT'}/>
            <InnerLayout className={'pro-section'}>
            <div className="service">
                <ProjectCard image={design} title={'WebDesign'} paragraph={'gshthrththrthhbf'}/>
                <ProjectCard image={design1} title={'WebDesign'} paragraph={'gshthrththrthhbf'}/>
                <ProjectCard image={design2} title={'WebDesign'} paragraph={'gshthrththrthhbf'}/>
            </div>
            </InnerLayout>
            
            </ProjectPageStyled>
            </Mainlayout>
        
    )
}

const ProjectPageStyled= styled.section`

.service{
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width:768px){
    position: relative;
    .service{
        display: inline-block;
        margin-bottom: 1rem;
    }
    }


`;

export default ProjectPage

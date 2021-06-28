import React from 'react'
import styled from 'styled-components'

function ProjectCard({image,title,paragraph}) {
    return (
        <ProjectCardStyled>
            <div className='container'>
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
            
        </ProjectCardStyled>
    )
}

const ProjectCardStyled =styled.div`
//margin-bottom: 1rem;
background-color: #d1e0e0;
padding: 1rem 1rem 1rem 1rem;
.container{
      
    }

@media screen and (max-width:768px){
    //margin-right: 4rem;
    margin-bottom: 1rem;
    background-color: #d1e0e0;
    padding: 1rem 1rem 1rem 1rem;
    //width: 0%;
}
`;

export default ProjectCard

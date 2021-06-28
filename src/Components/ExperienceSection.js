import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
function ExperienceSection() {
    return (
        <ExperienceSectionStyled>
            
            <div className="left-content">
            <h4>I am <span className="abouttopo">Sneha Priya Gupta</span></h4>              
                <div className="about-info">
                    <div className="info-title">
                        <p className="cts">2020/08 – PRESENT <br/>PROGRAMMER ANALYST TRAINEE, COGNIZANT</p>
                        <p className="intern"> 2019/12 – 2020/05 <br/>INTERN, COGNIZANT</p>
                        <p classname="inernship"> JUN 2018– JULY 2018<br/>INTERNSHIP, AIRPORT AUTHORITY OF INDIA</p>
                    </div>

                    <div className="info">
                        <p> :  Working with project on Spring MVC and Spring Boot helped me gain lots of idea
                                practically, simultaneously was working with Report creation using Power Bi.<br/>
                                Data Analysis played a vital role where I learned how data speaks, how to 
                                manage them where is data going wrong what is the actual difference. The 
                                technology I was working on is Snowflake.<br/>
                                Some hands-on experience in FreeMarker Text Language (FTL)<br/></p>
                        <p> : Came forward with various technical skills such as Spring Framework, Maven, and had brushed my java
                              skills, even worked with HTML, CSS, JavaScript, MySQL, presently working on project based on Hi-Tech
                              restaurant.</p>
                        <p> : Maximized productivity by analyzing protocols and identifying areasfor improvement, was assigned to
                              project along with CNS group basically on Navigation.</p>

                    </div>
                </div>
                </div>
                <div className="particle-con">
                    <Particle />
                </div>
        </ExperienceSectionStyled>
    )
}

const ExperienceSectionStyled= styled.div`
    margin-top: 5rem;
    display: flex;
    
    .abouttopo{
        color: #29a3a3;
    }
    .left-content{       
        width: 100%;
        h4{
            font-size: 2rem;
        }
        span{
            font-size: 2rem;
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            padding-top:1.4rem;
            padding-bottom: 1.4rem;
            display: flex;
            width: 100%;
            .info-title{
                padding-right: 3rem;
                width: 40%;
                
                .cts{
                    height: 55%;
                    
                }
                .intern{
                    height: 27%;
                }
                .inernship{
                    height: 60%;
                }
            }
            .info{
                width: 60%;
                p{
                    padding: .3rem 0;
                }
            }
        }
    }

        .particle-con{
            width: 10%;
            position: absolute;
            top: 0;
            right: 0;
        }

    @media screen and (max-width:768px){
    transform: translateX(1%);
    margin-top: 2.5rem;
    display: flex;
    
    .abouttopo{
        color: #29a3a3;
    }
    .left-content{       
        width: 80%;
        h4{
            font-size: 1rem;
        }
        span{
            font-size: 1rem;
        }
        .paragraph{
            padding: 0.5rem 0;
        }
        .about-info{
            padding-top: 1.4rem;
            padding-bottom: 1.4rem;
            display: flex;
            width: 100%;
            .info-title{
                padding-right: 1rem;
                width: 100%;
                
                .cts{
                    height: 55%;
                    
                }
                .intern{
                    height: 27%;
                }
                .inernship{
                    height: 60%;
                }
            }
            .info{
                width: 100%;
                p{
                    padding: .3rem 0;
                }
            }
        }
    }

        .particle-con{
            display: none;
        }
    }
`;

export default ExperienceSection

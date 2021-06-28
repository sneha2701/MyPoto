import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle1';
import Typed from "react-typed"
import bg from '../images/1b.jpg'
function HomePages() {
    return (
        <HomePageStyled>  
            <div className="con">
                <img src={bg} alt=""/>
                <div className="topography">
                    <h1>Hi, I'm <span className="homespan">Sneha Gupta</span></h1>
                    <Typed
                    className="typed-text"
                    strings={["web designer", "web developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop/>                  
                    </div>
                <div className="particle-con">
                    <Particle />
                </div>
                 </div>   
        </HomePageStyled>
    )
}

const HomePageStyled =styled.header`
    display: flex;
    img{
        position: relative;
        background-size: cover;
        background-position: center;
        height: 99.9vh;
        width: 86.6vw;
    }
    .con{
        width: 100%;
        height: 100%;
        .dot{
           
        }
        .topography{
            position: absolute;
            top: 80%;
            left: 55%;
            transform: translate(-40%, -40%);
            text-align: center;
            z-index: 1;

        }
        span,h1{
            color: #b3ffff;
        }
        .homespan{
            color:  #ffff1a;
        }

        .particle-con{
            width: 100%;
            position: absolute;
            top: 0;
            right: 0;
        }

    }
    @media screen and (max-width:1200px){
    display: flex;
    img{
        position: relative;
        background-size: cover;
        background-position: center;
        height: 101vh;
        width: 96.5vw;
    }
    span,h1{
            color: #b3ffff;
            font-size: 2rem;
        }
    }
`;
export default HomePages
import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title}<span >{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
   
    h2{
        color: #527a7a;
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding: .5rem;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 9rem;
            height: .33rem;
            background-color: #85adad;
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3rem;
            height: .33rem;
            background-color: #527a7a;
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            color: #d1e0e0;
            font-size: 4.5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }

    @media screen and (max-width:1200px){
        h2{
        color: #527a7a;
        font-size: 1.5rem;
        font-weight: 300;
        text-transform: uppercase;
        position: relative;
        padding: .2rem;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 4.5rem;
            height: .11rem;
            background-color: #85adad;
            border-radius: 7.5px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 1.5rem;
            height: .11rem;
            background-color: #527a7a;
            border-radius: 7.5px;
            left: 0;
        }
        span{
            font-weight: 300;
            color: #d1e0e0;
            font-size: 1.5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }
    }

`;

export default Title

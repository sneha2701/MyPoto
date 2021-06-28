import React from 'react'
import styled from 'styled-components'

function Primbutton({title}) {
    return (
             <PrimbuttonStyled>
            {title}
        </PrimbuttonStyled>
    )
}
const PrimbuttonStyled = styled.a`
    background-color: grey;
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    position: relative;
    font-style: inherit;
    text-transform: uppercase;    
    transition: all .4s ease-in-out;
    &:hover::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.21;
        left:0;
        bottom: 0;
        color: black;   
    }

    @media screen and (max-width:1200px){
       display: none;
    }
`;
export default Primbutton

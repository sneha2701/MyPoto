import styled from "styled-components";



export const Mainlayout =styled.div`
    padding: 5rem;

//max-width: 768px
    @media screen and (max-width:768px){
    transform: translateX(1%);
    padding-left: 0.1rem;
    //padding-left: 0.1rem;
    }
`;

export const InnerLayout =styled.div`
    padding: 5rem 0;

    @media screen and (max-width:768px){
    transform: translateX(1%);
    padding: 0rem , 0;
    }
`;
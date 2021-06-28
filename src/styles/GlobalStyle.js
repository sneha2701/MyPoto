import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
}
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
       // font-family: 'Nunito', sans-serif;
        font-family: 'Mate SC', serif;
        font-size: 1rem;
    }
    body{
        //background-image: url(image/1a.jpg);
        background-color: #f0f5f5;
        color: #004d4d;
        }
        a{
            font-family: inherit;
            color: inherit;
            font-size: inherit;
            font-size: 1rem;

        }
        h1{
            font-size: 3rem;
        }
        span{
            font-size: 3rem;
            color: red;
        }
//skill css:
        h6{
            color: #527a7a;
            font-size: 1rem;
            padding-bottom: .6rem;
            font-family: 'Nunito', sans-serif;
        }

//Gobal Media
    @media screen and (max-width:768px){
    transform: translateX(-100%);
    h4,p,h5{
        font-size: 1rem;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
       // font-family: 'Nunito', sans-serif;
        font-family: 'Mate SC', serif;
        font-size: 1rem;
    }
    body{
        //background-image: url(image/1a.jpg);
        background-color: #f0f5f5;
        color: #004d4d;
        }
        a{
            font-family: inherit;
            color: inherit;
            font-size: inherit;
            font-size: 1rem;

        }
  }
`;
export default GlobalStyle;
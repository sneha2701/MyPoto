import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
//import profile from '../images/profile.jpg'
function Navigation() {
    return (
        <NavigationStyled>
            
            <ul className="nav-iteams">
                <li className="nav-iteam">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-iteam">
                    <NavLink to="/about" activeClassName="active-class" exact>About me</NavLink>
                </li>
                <li className="nav-iteam">
                    <NavLink to="/experience" activeClassName="active-class" exact>Experience</NavLink>
                </li>
                <li className="nav-iteam">
                    <NavLink to="/qualification" activeClassName="active-class" exact>Qualification</NavLink>
                </li>
                <li className="nav-iteam">
                    <NavLink to="/project" activeClassName="active-class" exact>Projects</NavLink>
                </li>
                <li className="nav-iteam">
                    <NavLink to="/skill" activeClassName="active-class" exact>Skills</NavLink>
                </li>
                <li className="nav-iteam">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact me</NavLink>
                </li>
            </ul>
            <footer className= "footer">
                <p>snehapriyagupta@2021</p>

            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color1);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color1);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 50%;
            border-radius: 50%;
            border: 5px solid var(--border-color);
            margin-bottom: 1rem;
        }
    }

    .nav-iteams{
        width: 100%;
        text-align: center;
        padding-top: 10rem;
        .active-class{
            background-color: gray;
        }
        li{
            display: block;
            a{
                display: block;               
                padding: 0.3rem 0;
                position: relative;
                z-index: 4;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 500;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: #a4acc4;
                    transition : all 0.4s cubic-bezier(1,-0.2,.25,.95);
                    z-index: 3;
                    opacity: 0.21;
                } 
            }
            //cubic-bezier(1,-0.2,.25,.95);
            a:hover::before{
                    width: 100%;
                    height: 100%;
                    
            }
        }
    }
footer{
    border-top: 1px solid grey;
    width: 100%;
    p{
        padding: 2rem 0;
        font-size: 0.7rem;
        display: block;
        text-align: center;
    }
}

`;



export default Navigation

import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title'
import Particle from '../Components/Particle';
import {InnerLayout, Mainlayout} from '../styles/layout'
import Primbutton from '../Components/Primbutton';

function ContactPage() {
    return (
        <Mainlayout>
            <ContactPageStyled>
            <Title title={'CONTACT'} span={'CONTACT'}/>
            <InnerLayout className={'contact-section'}>
                <div className="left-container">
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name" id="name">Enter your Name *</label>
                            <input type="text" id="name"/>                        
                            </div>

                            <div className="form-field">
                            <label htmlFor="Email" id="name">Enter your email *</label>
                            <input type="email" id="email"/>                        
                            </div>

                            <div className="form-field">
                            <label htmlFor="text-area" >Enter your Message *</label>
                                <textarea name ="textarea" id ="textarea" cols="30" row="10"></textarea>
                            </div>
                            <div className="form-field">
                            <Primbutton className="x" title={`Submit`} />
                            </div>
                    </form>
                </div>
                
                <div className="particle-con">
                    <Particle />
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </Mainlayout>
    )
}


const ContactPageStyled= styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .form{
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                
                label{
                    position: absolute;
                    left:20px;
                    top:-19px;
                    display: inline-block;
                    background-color: #f0f5f5;
                    padding: .4rem .5rem;
                    color: #527a7a;

                }
                input{
                    border:1px solid grey;
                    outline: none;
                    background: transparent;
                    height: 40px;
                    padding: 0 15px;
                    color: black;

                }

                textarea{
                    background: transparent;
                    border:1px solid grey;
                    outline: none;
                    color:white;
                    width: 100%;
                }
            }
        }
    }
    .particle-con{
            width: 25%;
            position: absolute;
            top: 0;
            right: 0;
        }
    .sc-bkbkJK,.hRkNMG{
        width: 30%;
        height: 20%;
        //background-color: black;
    
    }
`;
export default ContactPage

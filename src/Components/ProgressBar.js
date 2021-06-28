import React from 'react'
import styled from 'styled-components'

function ProgressBar({title,width,text}) {
    return (
        <ProgreeBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}>

                    </span>
                </div>
            </div>
        </ProgreeBarStyled>
    )
}
const ProgreeBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.2rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: #008080;
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: #00b3b3;
            }
        }
    }

`;
export default ProgressBar

import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle';
function QualificationSection() {
    return (
        <QualificationSectionStyled>
            <table className="info">
                <tr>
                    <th>ELECTRONICS AND COMPUTER SCIENCE ENGINEERING (B-TECH)</th>
                    <td>Koneru Lakshmaiah (Deemed to be University), Guntur, Andhra Pradesh</td>
                    <td>84%</td>
                </tr>
                <tr>
                    <th>SECOUNDRY HIGH SCHOOL</th>
                    <td>St. Xavier School, Hazaribagh, Jharkhand </td>
                    <td>70%</td>
                </tr>

                <tr>
                    <th>PRIMARY HIGH SCHOOL</th>
                    <td>Mount Carmel High School, Hazaribagh, Jharkhand </td>
                    <td>70%</td>
                </tr>
            </table>

            <div className="particle-con">
                    <Particle />
                </div>
            
        </QualificationSectionStyled>
    )
}

const QualificationSectionStyled = styled.section`
width: 100%;
    td{
        width: 40%;
    }
    th{
    width: 30%;
    }
    table, th, td {
         padding-bottom: 1rem;
         text-align: left;
        }
        .particle-con{
            width: 10%;
            position: absolute;
            top: 0;
            right: 0;
        }

@media screen and (max-width:768px){
    transform: translateX(1%);
    td{
        width: 40%;
    }
    th{
    width: 30%;
    }
    table, th, td {
         padding-bottom: 1rem;
         text-align: left;
         font-size: 0.8rem;
        }
        .particle-con{
            display: none;
        }

}
    
`;

export default QualificationSection

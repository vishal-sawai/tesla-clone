import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (

        <>
            <Wrap bgImage={backgroundImg}>
                <Fade bottom>
                    <ItemText>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </ItemText>
                </Fade>
                <Fade bottom>
                    <Buttons>
                        <ButtonGroup>
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                            {rightBtnText &&
                                <RightButton>
                                    {rightBtnText}
                                </RightButton>
                            }
                        </ButtonGroup>
                    </Buttons>
                </Fade>
            </Wrap>
        </>
    )
}

export default Section

const Wrap = styled.div`
            width:100vw;
            height:100vh;
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            background-image: ${props => `url("/images/${props.bgImage}")`};
            `
const ItemText = styled.div`
            padding-top:15vh;
            text-align:center;
            `
const ButtonGroup = styled.div`
            display:flex;
            margin-bottom:30px;
            @media (max-width:768px){
                flex-direction:column;
    }
            `
const LeftButton = styled.div`
            background-color: rgba(244, 244, 244, 0.8);
            height:40px;
            width:256px;
            color:black;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:5px;
            text-transform:uppercase;
            font-size:12px;
            cursor:pointer;
            margin:8px;
            font-weight: 600;
            `
const RightButton = styled(LeftButton)`
            background-color:rgba(23, 26, 32, 0.65);
            color:white;
            `

const Buttons = styled.div`
`
const HomeContainer = styled.div`
          video{
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
          }
`

import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Fade from 'react-reveal/Fade';


function Home() {
    return (
        <Container>
            <HomeContainer>
                <video loop muted autoPlay>
                    <source src="/tesla-clone/images/video/Homepage-Demo-Drive-Desktop-NA.webm" type="video/mp4" />
                </video>
                <Fade bottom>
                    <ItemText>
                        <h1>Experience Tesla</h1>
                        <p>Schedule a Demo Drive Today</p>
                    </ItemText>
                </Fade>
                <Fade bottom>
                    <Buttons>
                        <ButtonGroup>
                            <LeftButton>
                                Demo Drive
                            </LeftButton>
                        </ButtonGroup>
                    </Buttons>
                </Fade>
            </HomeContainer>

            <Section
                title="Model 3"
                price="Starting at $32,740"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                price="Starting at $40,240"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Solar Panels"
                description="Schedule a Virtual Consultation"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Powerwall"
                backgroundImg="powerwall.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
      height:100vh;
 `
const HomeContainer = styled.div`
  width:100vw;
  height:100vh;
  width:100vw;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
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
const ItemText = styled.div`
 padding-top:12vh;
 text-align:center;
 color:white;
 h1{
    font-size:40px
 }

 `
const ButtonGroup = styled.div`
      display:flex;
      margin-bottom:70px;
      @media (max-width:768px){
          flex-direction:column;
}

            `
const LeftButton = styled.div`
            border:2px solid white;
            color:white;
            height:40px;
            width:256px;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:5px;
            font-size:15px;
            cursor:pointer;
            margin:8px;
            padding:15px 70px;
            `
const Buttons = styled.div`
            `            
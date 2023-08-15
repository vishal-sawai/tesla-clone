import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Fade from 'react-reveal/Fade';


function Home() {
    return (
        <Container>
            <HomeContainer>
                <video loop muted autoPlay>
                    <source src="/images/video/Homepage-Demo-Drive-Desktop-NA.webm" type="video/mp4" />
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
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
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
                title="Lowest Cost Solar Panels In America"
                description="Money-back gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
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
                backgroundImg="Accessories.jpg"
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
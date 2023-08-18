/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { selectCars, selectVehiclesName, selectVData } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import '../index.css';
const Header = () => {

    const [bugerStatus, setBurgerStatus] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const cars = useSelector(selectCars);
    const vehicals = useSelector(selectVehiclesName);
    const vehicalsData = useSelector(selectVData);


    const changeColor = () => {
        if (window.scrollY >= 650) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    // Add the scroll event listener directly in the component
    window.addEventListener('scroll', changeColor);

    const [isTargetVisible, setIsTargetVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsTargetVisible(true);
        setNavbar(true);
    };

    const handleMouseLeave = () => {
        setIsTargetVisible(false);
        setNavbar(false);
    };

    return (
        <>
            <Container className='HeaderContainer' onMouseLeave={handleMouseLeave}>
                <a>
                    <svg viewBox="0 0 342 35" className="teslalogo">
                        <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"
                            className={navbar ? 'navbar teslalogo' : 'navbarActive teslalogo'}>
                        </path>
                    </svg><span className="t-logo">Tesla</span>
                </a>
                <Menu>
                    {cars && cars.map((car, index) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a className={navbar ? 'navbar navHeader' : 'navbarActive navHeader'} onMouseEnter={handleMouseEnter}
                            key={index} href='#'>{car}</a>
                    ))}
                </Menu>
                <RightMenu className={navbar ? 'navbar' : 'navbarActive'}>
                    <HelpBtn />
                    <LangBtn />
                    <ProfileBtn />
                    <div id='rmb'>
                        <CustomMenu onClick={() => setBurgerStatus(true)} />
                    </div>

                </RightMenu>

                <BurgerNav show={bugerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)} />
                    </CloseWrapper>
                    {cars && cars.map((car, index) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <li><a key={index} href=''>{car}</a></li>
                    ))}
                </BurgerNav>

            </Container>
            {isTargetVisible && (
                <Container2 className='HeaderData' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <Head1>
                        {vehicals && vehicals.map((veh, index) => (

                            <div>
                                <img src={`/images/headImg/${veh}.avif`} alt="" srcset="" />
                                <h3>
                                    {veh}
                                </h3>
                                <p>
                                    <span>Learn</span>
                                    <span>Order</span>
                                </p>
                            </div>

                        ))};
                    </Head1>
                    <div class="vl"></div>
                    <Head2>
                        <div className='Hli'>

                            {vehicalsData && vehicalsData.map((vehData, index) => (
                                <li>{vehData}</li>
                            ))};
                        </div>
                    </Head2>
                </Container2>
            )}
        </>

    )





}

export default Header

const Container = styled.div`
   min-height:80px;
   position:fixed;
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding:0 30px;
   left: 0;
   right: 0;
   z-index:10;
`
const Menu = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:500;
        text-transform:uppercase;
        padding: 10px;
        flex-wrap: nowrap;
        border-radius:5px;
    }
    :hover {
        background-color:#ECF0F1 ;
     }
    @media(max-width:768px){
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
 
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav = styled.div`
     position: fixed;
     top:0;
     bottom:0;
     right:0;
     background:white;
     width:300px;
     z-index:16;
     list-style:none;
     padding:20px;
     display:flex;
     flex-direction:column;
     text-align:start;
     transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
     transition: transform 0.2s;
     li{
        padding:15px 0;
        border-bottom:1px solid rgb(0,0,0,.2);
     }
     a{
        font-weight:600;
     }
`
const HelpBtn = styled(HelpOutlineIcon)`
      cursor:pointer;
      margin-right:10px;
      flex-wrap: nowrap;
      font-weight:600;
`
const LangBtn = styled(LanguageIcon)`
      cursor:pointer;
      margin-right:10px;
      flex-wrap: nowrap;
      font-weight:600;
`
const ProfileBtn = styled(AccountCircleOutlinedIcon)`
cursor:pointer;
margin-right:10px;
flex-wrap: nowrap;
font-weight:600;
`
const CustomClose = styled(CloseIcon)`
      cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`
const Container2 = styled.div`
     width:100%;
     min-height:300px;
     background-color:white;
     position:fixed;
     padding:100px 10px;
     display: flex;
     margin:auto;
     justify-content:center;
     align-items:center;
     z-index:9;
     transition: transform 0.2s;
     .vl {
         border-left: 2px solid #85C1E9;
         min-height:300px;
         height: 100%;
         margin:0px 30px;

      }
`
const Head1 = styled.div`
    display:flex;
    div{
        margin:auto;
        justify-content:center;
        align-items:center;
        width:210px;
        padding: 0px 10px;
        
    }
    img{
        margin:auto;
        width:100%;
    }
    h3{
        margin:auto;
        text-align:center;
    }
   p{
    margin:auto;
    display:flex;
    margin:auto;
    justify-content:center;
    align-items:center;
   }
   span{
    margin:8px 4px;
    cursor:pointer;
    text-decoration:underline;
    color:#566573;
    font-size:15px
   }
`
const Head2 = styled.div`
    div{
        padding:10px 25px;
    }
    li{
        list-style-type: none;
        font-weight: 500;
        font-size:17px;
        margin:10px 5px;
        text-align:start;
        color:#212F3D;
        cursor:pointer;
    }
`
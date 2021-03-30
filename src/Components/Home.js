import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/img/1K1A9702.jpg';
import heart from '../assets/img/Untitled-1.svg';
import About from './About';
import Countdown from './Countdown';
import Greetings from './Greetings';


const Banner = styled.div((props)=>({
    backgroundImage: "url(" + props.bg+ ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center 5%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: 'calc(100vh - 57px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
}));

const heading = {
    width: '100%',
    height: '100%',
    color: '#fff',
    backgroundColor: '#00000044',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end'
}

const cursive = {
    fontFamily: 'Dancing Script',
    fontSize: '60px',
    textTransform: 'capitalize',
    fontWeight: '700'
}

const icon = {
    height: '55px',
    paddingTop: '15px'
}

const cursive1 = {
    fontFamily: 'Dancing Script',
    fontSize: '60px',
    textTransform: 'capitalize',
    paddingBottom: '40px',
    fontWeight: '700'
}

function Home() {

    return (
        <div style={{marginTop: '57px'}}>
            <div id="home">
                <Banner bg={bannerImg}>
                    <div style={heading}>
                        <div style={cursive}>Vaishali & Santosh</div>
                        <img src={heart} style={icon}/>
                        <div style={cursive1}>Are Getting Married</div>
                    </div>
                </Banner>
            </div>
            <div id="about">
                <About />
                <Countdown />
            </div>
            <div id="greeting">
                <Greetings />
            </div>
            <div id="When" >
                <h1>This is Service section</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
            </div>

        </div>
    );
}

export default Home;
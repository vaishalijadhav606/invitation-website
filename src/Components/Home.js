import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/img/1K1A9702.jpg';
import heart from '../assets/img/Untitled-1.svg';
import side1 from '../assets/img/1K1A9655.jpg';
import side2 from '../assets/img/1K1A9681.jpg';
import About from './About';
import Countdown from './Countdown';
import Greetings from './Greetings';
import When from './When';


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
                <When />
            </div>
            <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',backgroundColor: '#f2f1ed'}}>
                <img src={side1} style={{width: '33%', height:'500px', objectFit: 'cover'}}/>
                <div className="creadit-text" style={{width: '33%'}}>
                    Made with Love <br /> Vaishali ❤️ Santosh 
                </div>
                <img src={side2} style={{width: '33%', height:'500px', objectFit: 'cover'}}/>
            </div>
        </div>
    );
}

export default Home;
import React, { Component } from 'react';
import groom from '../assets/img/groom.jpg'
import bride from '../assets/img/bride.jpg'

const personalImg = {
    width: '280px',
    height: '320px',
    objectFit: 'cover',
    border: '8px solid',
    borderImageSlice: '1',
    borderWidth: '8px',
    borderImageSource: 'linear-gradient(45deg, red, purple)',
    borderRadius: 0,
    background: 'linear-gradient(45deg, red, purple)'    
}

const name = {
    fontSize: '30px',
    margin: '15px 0 10px',
    textTransform: 'uppercase',
    fontWeight: '500',
    color: '#000'
}

const subheading = {
    fontSize: '25px',
    color: 'purple',
    margin: '10px 0',
    fontFamily: 'Lobster'
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          windowWidth: 0,
          windowHeight: 0
        };
    
        this.updateDimensions = this.updateDimensions.bind(this);
      }
    
      componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
      }
    
      updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    
        this.setState({ windowWidth, windowHeight });
      }

      
    render() {
        const { windowWidth } = this.state;
        const ipadCss = windowWidth < 1024;
        const mobileCss = windowWidth < 768;

        const container = {
            display: 'flex', 
            alignItems: 'center',
            flexDirection: ipadCss ? 'column' : 'row',
        }

        const col6 = {
            width: ipadCss ? '100%' : '50%', 
            padding: ipadCss ? '10px' : '30px', 
            textAlign: 'center',
        }

        const mainContent = {
            backgroundColor: '#f2f1ed',
            padding: mobileCss ? '30px' :'50px 70px'
        }   

        const dsmblock = {
            display: ipadCss ? 'none' : 'block'
        }

        const dmdblock = {
            display: ipadCss ? 'block' : 'none'
        }

        return (
            <div style={mainContent}>
                <div style={container}>
                    <div style={col6}>
                        <img src={groom} style={personalImg}/>    
                        <div style={name}>Santosh Gaikar</div>
                    </div> 
                    <div style={col6}>
                        <div style={subheading}>She Says...</div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"</p>
                    </div>  
                </div> 
                <div style={container}>
                    <div style={{...col6, ...dmdblock}}>
                        <img src={bride} style={personalImg}/>    
                        <div style={name}>Vaishali Jadhav</div>
                    </div> 
                    <div style={col6}>
                        <div style={subheading}>He Says...</div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"</p>
                    </div>  
                    <div style={{...col6, ...dsmblock}}>
                        <img src={bride} style={personalImg}/>    
                        <div style={name}>Vaishali Jadhav</div>
                    </div> 
                </div> 
            </div>
        );
    }
}

export default About;
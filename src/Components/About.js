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
    render() {
        return (
            <div style={{backgroundColor: '#f2f1ed',padding: '50px 70px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: '50%', padding: '30px', textAlign: 'center'}}>
                        <img src={groom} style={personalImg}/>    
                        <div style={name}>Santosh Gaikar</div>
                    </div> 
                    <div style={{width: '50%', padding: '30px', textAlign: 'center'}}>
                        <div style={subheading}>She Says...</div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"</p>
                    </div>  
                </div> 
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: '50%', padding: '30px', textAlign: 'center'}}>
                        <div style={subheading}>He Says...</div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"</p>
                    </div>  
                    <div style={{width: '50%', padding: '30px', textAlign: 'center'}}>
                        <img src={bride} style={personalImg}/>    
                        <div style={name}>Vaishali Jadhav</div>
                    </div> 
                </div> 
            </div>
        );
    }
}

export default About;
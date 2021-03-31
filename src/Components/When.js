import React, { Component } from 'react';
import heart from '../assets/img/Untitled-1.svg';
import whenImg from '../assets/img/1K1A9688.jpg';
import side1 from '../assets/img/1K1A9655.jpg';
import side2 from '../assets/img/1K1A9681.jpg';

class When extends Component {
    render() {
        return (
            <div>
                <div style={{padding: '50px 100px'}}>
                    <div style={{textAlign: 'center'}}>
                        <div className="title">When & Where</div>
                        <span className="hearts-underline">
                            <img src={heart} className="heart-icon"/>
                        </span> 
                    </div>
                
                    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', margin: '20px auto'}}>
                        <div style={{width: '50%'}}>
                            <img src={whenImg} style={{width: '100%'}} />
                        </div>
                        <div style={{width: '50%', paddingLeft: '20px'}}>
                            <div className="info-content">
                                <div class="meta">
                                    <p><b>Date</b> : Monday, 3rd May 2021</p>
                                    <p><b>Time</b> : 12.36pm</p>
                                    <p><b>Address</b> :  28, Chhabildas Rd, Dadar West, Dadar, Mumbai, Maharashtra 400028.</p>
                                    <p><b>Contact (Groom Side)</b> : <br />Santosh Gaikar - <a tel="tel:9821507043">+91 98215 07043</a></p>
                                    <p><b>Contact (Bride Side)</b> : <br />Ravindra Jadhav - <a tel="tel:9967380416">+91 99673 80416</a></p>
                                    <a className="map-btn" href="https://goo.gl/maps/4CqUyWfWBvUKzdSL8">Get Direction</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
}

export default When;
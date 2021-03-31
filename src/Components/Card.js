import React from 'react';
import {useMediaQuery} from './hooks';

const subheading = {
    fontSize: '25px',
    color: 'purple',
    fontFamily: 'Lobster'
}

function Card(props) {
    const { image, headline, description, from } = props;
    const isMobileBased = useMediaQuery('(max-width: 767px)');

    return (
        <div style={{backgroundColor: '#fff', borderRadius: '5px', padding: '20px', margin: isMobileBased ? '0 5px' : '0 20px 0 0', textAlign: 'left', height: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={image} style={{width: '80px', height: '80px', objectFit: 'cover',border: '1px solid', borderImageSlice: 1, borderWidth: '3px', borderImageSource: 'linear-gradient(45deg , red, purple)'}}/>
                <div style={{marginLeft: '15px'}}>
                    <div style={subheading}>{headline}</div>
                    <div style={{color: 'gray', fontSize:'13px'}}>{from == 1 ? 'From Her' : 'From Him'}</div>
                </div>
            </div>
            <div className="custom-scroll" style={{marginTop: '15px', overflowY:'auto',paddingBottom:'10px',height: '190px', fontSize:'15px',paddingRight: '10px'}}>{description}</div>
        </div>
    );
}

export default Card;
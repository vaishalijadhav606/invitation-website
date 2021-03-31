import React, { useEffect, useState } from 'react';
import heart from '../assets/img/Untitled-1.svg';
import {useMediaQuery} from './hooks';

const counttext = {
    height: 'auto',
    padding: '30px 0',
    marginBottom: 0,
    font: '15px sans-serif',
    fontWeight: 600,
    textTransform: 'capitalize'
}

const dateArea = {
    background: 'linear-gradient(45deg, red, purple)',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 100px'
}
const datesection = {
    padding: '62px',
    border: '2px solid #fff',
    borderRadius: '5px',
    margin: '2rem 0',
    width: '100%',
    textAlign: 'center',
    fontSize: '35px',
    fontWeight: '600',
    color: '#fff'
}
function Countdown() {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`5/3/2021, 12:36 pm`) - +new Date();
        
        let timeLeft = {};
        
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const isIpadBased = useMediaQuery('(min-width: 768px) and (max-width: 900px)');
    const isMobileBased = useMediaQuery('(max-width: 767px)');
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    
    const timerComponents = [];

    const styles = {
        container: (isIpadBased, isMobileBased) => ({
            width: isIpadBased ? '22%' : isMobileBased ? '60%' : '13%',
            height: 'auto',
            background: '#FFFFFF',
            float: 'left',
            padding: '10px 0',
            margin: '10px 15px',
            boxShadow: '5px 6px 9px 1px rgb(53 53 53 / 50%)',
            borderRadius: '5px',
        })
      };
    
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
    
      timerComponents.push(
        <div style={styles.container(isIpadBased, isMobileBased)}>
          <span className="countNumberWebkit">{timeLeft[interval]}</span> <span style={counttext}>{interval}</span>{" "}
        </div>
      );
    });

    return (
        <div>
            <div style={{padding: isMobileBased ? '30px' : '50px 70px', textAlign: 'center'}}>
                <div className="title">And the countdown begins</div>
                <span className="hearts-underline">
                    <img src={heart} className="heart-icon"/>
                </span>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: isMobileBased ? 'column' : 'row'}}>
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}    
                </div>
            </div>
            <div style={dateArea}>
                <div style={datesection}>
                    Wedding Day : 3rd May 2021 at 12:36 pm
                </div>
            </div>
        </div>
    );
}

export default Countdown;
import React from 'react';
import heart from '../assets/img/Untitled-1.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import articles from "../data.json";
import Card from "./Card";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const ArticleCard = ({ imageUrl, name, from, content }) => {
    return <Card image={imageUrl} headline={name} description={content} from={from} />;
  };
  

function Greetings(props) {

    const children = articles
        .slice(0, ).map(article => <ArticleCard key={article.name} {...article} />)

    return (
        <div style={{backgroundColor: '#f2f1ed',padding: '50px 70px',display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <div style={{textAlign: 'center'}}>
                <div className="title">Sweet Message</div>
                <span className="hearts-underline">
                    <img src={heart} className="heart-icon"/>
                </span>     
                <div style={{display: 'grid', height: '380px'}}>
                  <Carousel 
                    responsive={responsive} 
                    infinite={true}
                    autoPlaySpeed={1000}
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}
                  >
                      {children}
                  </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Greetings;
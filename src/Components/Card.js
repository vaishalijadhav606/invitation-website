import React from 'react';

function Card(props) {
    const { classes, image, headline, description, isMoving } = props;
    return (
        <div>
            <div image={image} title={headline} />
        </div>
    );
}

export default Card;
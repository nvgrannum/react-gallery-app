import React from 'react';

const Photo = (props) => {
    return(
    <li>
        <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={`Photo titled ${props.title}`}/>
    </li>
    )
}

export default Photo
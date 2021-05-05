import React from 'react';

const Photo = (props) => {
    console.log(props.data);
    return(
    <li>
        <img src={`https://www.flickr.com/photos/${props.data}/${props.id}/in/photostream`} alt={`Photo titled ${props.title}`}/>
    </li>
    )
}

export default Photo
import React from 'react'
import Photo from './Photo'

const PhotoList = (props) => {
    
    let photos = props.data.map(photo=> 
        <Photo 
          data={photo.owner}
          id={photo.id}
          key={photo.id}
          title={photo.title}
        />
    )
    return(
      <ul>
        {photos}
      </ul>
    )
  }

export default PhotoList
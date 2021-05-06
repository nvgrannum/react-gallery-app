import React from 'react'
import Photo from './Photo'

const PhotoList = (props) => {
    
    let photos = props.data.map(photo=> 
        <Photo 
          owner={props.owner}
          farm={photo.farm}
          server={photo.server}
          secret={photo.secret}
          id={photo.id}
          key={photo.id}
          title={photo.title}
        />
    )
    return(
      <div>
        <h2>{props.title}</h2>
        <ul>
          {photos}
        </ul>
      </div>
    )
  }

export default PhotoList
import React from 'react'
import {withRouter} from 'react-router-dom'

import Photo from './Photo'
import NotFound from './NotFound'

const QuerySearch = (props) => {
    let searchTerm = props.match.params.query;
    if (props.title !== searchTerm) {
        props.handleSearch(searchTerm)
    }

    let pics = props.data.map(photo=> 
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
            {pics.length>0 ? 
                pics: 
                <NotFound /> }
        </ul>
      </div>
    )
}

export default withRouter(QuerySearch)
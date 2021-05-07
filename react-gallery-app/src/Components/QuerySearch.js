import React from 'react'
import {withRouter} from 'react-router-dom'

import Photo from './Photo'
import NotFound from './NotFound'
//Component used to take the url path and run a search based on the query
//if the query is not the same as the existing one, it will run a fresh search and fetch new data
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

//Returns the search term as the title and any pictures that are fetched    
//if there are no photos to display, the NotFound component is called
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
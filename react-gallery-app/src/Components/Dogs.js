import React from 'react'
import PhotoList from './PhotoList'
import apiKey from './Config'

const Dogs = () =>{
    let url = 
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dog&max=24&safe_search=1&format=json&nojsoncallback=1`)
        .then(results => results.json())
        .then(resultsData => {this.setState({photos:resultsData.photos.photo})})
        .catch(error=> console.log('error fetching data', error))
    return(
        <PhotoList />
    )
}

export default Dogs
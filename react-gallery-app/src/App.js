import React, { Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import apiKey from './config'
import SearchForm from './Components/SearchForm'
import PhotoList from './Components/PhotoList'
import Nav from './Components/Nav'



class App extends Component {
  
    constructor(){
      super();
      this.state= {
        photos: []
        };
    }
    
    componentDidMount() {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=puppy&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
         .then(results => results.json())
         .then(resultsData => {this.setState({photos:resultsData.photos.photo})})
         .catch(error=> console.log('error fetching data', error))
    }
    
    performSearch = () => {
        
    }

    render() {
        console.log(this.state.photos)
        return(
        <BrowserRouter>
            <div className="container">
                <SearchForm search={this.performSearch}/>
                <Nav />
                <div className="photo-container">
                   <h2>Results</h2> 
                   <PhotoList data={this.state.photos}/>
                </div>
                
                
            </div>
        </BrowserRouter>
        )
    }
    
}

export default App
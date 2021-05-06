import React, { Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import apiKey from './config'
import SearchForm from './Components/SearchForm'
import PhotoList from './Components/PhotoList'
import Nav from './Components/Nav'
import NotFound from './Components/NotFound'



class App extends Component {
  
    constructor(){
      super();
      this.state= {
        puppyPhotos: [],
        forestPhotos:[],
        flowerPhotos:[],
        photos:[],
        title: '',
        query:''
        };
    }

     performSearch = (query) => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
         .then(results => results.json())
         .then(resultsData => {this.setState({photos:resultsData.photos.photo, query: query})})
         .catch(error=> console.log('error fetching data', error))
    }

    componentDidMount() {

        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=puppy&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
            .then(results => results.json())
            .then(resultsData => {this.setState({
                puppyPhotos:resultsData.photos.photo, 
                photos: resultsData.photos.photo, 
                query:'Puppies'})})
            .catch(error=> console.log('error fetching data', error));

        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=forest&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
            .then(results => results.json())
            .then(resultsData => {this.setState({forestPhotos:resultsData.photos.photo})})
            .catch(error=> console.log('error fetching data', error));

        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=flower&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
            .then(results => results.json())
            .then(resultsData => {this.setState({flowerPhotos:resultsData.photos.photo})})
            .catch(error=> console.log('error fetching data', error));    
    }
    
   
//default query instead of redirecting page
//history method. push search to end of history
    render() {
        return(
        <BrowserRouter>
            <div className="container">
                <SearchForm onSearch={this.performSearch}/>
                <Nav />
                <div className="photo-container">
                  
                   <Switch>
                        <Route exact path="/" render={()=> <PhotoList data={this.state.photos} title={this.state.query}/>} />
                        <Route exact path="/puppies" render={()=> <PhotoList data={this.state.puppyPhotos} title="Puppies"/>} />
                        <Route exact path="/forests" render={()=> <PhotoList data={this.state.forestPhotos} title="Forests"/>} />
                        <Route exact path="/flowers" render={()=> <PhotoList data={this.state.flowerPhotos} title="Flowers"/>} />
                        <Route path="/search/:query" render={()=> <PhotoList data={this.state.photos} title={this.state.query}/>} />
                        <Route component={NotFound} />
                   </Switch>
                   
                </div>
                
                
            </div>
        </BrowserRouter>
        )
    }
    
}

export default App
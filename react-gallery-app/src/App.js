import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import apiKey from './config';
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import QuerySearch from './Components/QuerySearch';
import NoPage from './Components/NoPage';

/*
When the page loads, the default search will be for 'puppy' and puppy images that
have been fetched will be displayed
The existing search bar will take a query, change the url path, and fetch new data with that query.
puppyPhotos, forestPHotos, flowerPhotos, and photos are arrays for JSON response fetched data from flickr
isLoading is a boolean to display 'loading' while images are being fetched and displayed
*/

class App extends Component {
  
    constructor(){
      super();
      this.state= {
        puppyPhotos: [],
        forestPhotos:[],
        flowerPhotos:[],
        photos:[],
        title: '',
        tags:'',
        isLoading: true
        };
    }
    //same search from componentDidMount, but used when the searchForm is called to update a generic photos array with new data


    performSearch = (query) => {
        this.setState({isLoading:true});
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
         .then(results => results.json())
         .then(resultsData => {this.setState({
             photos:resultsData.photos.photo, 
             tags: query,
             isLoading:false})})
         .catch(error=> console.log('error fetching data', error))
    }

    componentDidMount() {
        this.performSearch('puppies');

        //fetches puppy photos, takes the loading state from true to false once data is collected, adds photo data to proper array
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=puppy&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
            .then(results => results.json())
            .then(resultsData => {this.setState({
                puppyPhotos:resultsData.photos.photo,  
                isLoading: false})})
            .catch(error=> console.log('error fetching data', error));
        
        //fetches forest photos
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=forest&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
            .then(results => results.json())
            .then(resultsData => {this.setState({
                forestPhotos:resultsData.photos.photo, 
                isLoading: false})})
            .catch(error=> console.log('error fetching data', error));

        //fetches flower photos    
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=flower&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
            .then(results => results.json())
            .then(resultsData => {this.setState({
                flowerPhotos:resultsData.photos.photo, 
                isLoading:false})})
            .catch(error=> console.log('error fetching data', error));    
    }
    
   
    render() {
        return(
        <BrowserRouter>
            <div className="container">
                <SearchForm onSearch={this.performSearch}/>
                <Nav />
                <div className="photo-container">
                    {(this.state.isLoading)?<h2>Loading...</h2> : 
                        (<Switch>
                                <Route exact path="/" render={()=> <PhotoList data={this.state.photos} title={this.state.tags}/>} />
                                <Route exact path="/puppies" render={()=> <PhotoList data={this.state.puppyPhotos} title="Puppies"/>} />
                                <Route exact path="/forests" render={()=> <PhotoList data={this.state.forestPhotos} title="Forests"/>} />
                                <Route exact path="/flowers" render={()=> <PhotoList data={this.state.flowerPhotos} title="Flowers"/>} />
                                <Route path="/search/:query" render={()=> <QuerySearch data={this.state.photos} title={this.state.tags} handleSearch={this.performSearch} loading={this.state.isLoading}/> } />
                                <Route component={NoPage} />
                        </Switch>)
                    }
                </div>   
            </div>
        </BrowserRouter>
        )
    }
    
}

export default App
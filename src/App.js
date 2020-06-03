import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoList, VideoDetail} from './components';

class App extends Component {

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyAHjZVq7wb9rOtzJgOZynJf9zE1H2gjA-c',
      q: searchTerm,
  }
  });

    console.log(response.data.items);
  }

  render(){
    return (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              {/*Video details*/}
            </Grid>
            <Grid item xs={4}>
              {/*Video list*/}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;

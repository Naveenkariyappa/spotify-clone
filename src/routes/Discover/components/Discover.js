import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import {fetchAllDAta} from '../api/UtilServices'

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentWillMount(){
   fetchAllDAta().then((data) => {
     debugger
    this.setState({
      newReleases:data.newReleases.data.albums.items,
      playlists:data.playlists.data.playlists.items,
      categories:data.categories.data.categories.items,
    });
  })}
  

  render() {
    const { newReleases, playlists, categories } = this.state;
    return (
      <div className="discover">
        {newReleases && <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} /> }
        {playlists && <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} /> }
        {categories && <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" /> }
      </div>
    );
  }
}

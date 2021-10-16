import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {SecondaryComponentMode, State} from '../types'
import BackendState from './SongsInventory.component';
import SongsSearchComponent from './songsSearch/SongsSearch.component';
import Suggestions from './songSuggestions.component';
 
export default class SecondaryComponent extends Component<{mode:SecondaryComponentMode},{}>{

    render(){
        switch(this.props.mode){
            case  SecondaryComponentMode.SONGS_INVENTORY:
            return (<BackendState/>);
            case SecondaryComponentMode.SONG_SUGGESTIONS:
                return (<Suggestions/>)
            case SecondaryComponentMode.NOTHING:
                return (<div></div>)
        }
    }
 

 
  
 
 }
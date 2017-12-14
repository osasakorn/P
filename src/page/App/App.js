import React, { Component } from 'react'
import './App.css';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import BackgroundSlideshow from 'react-background-slideshow'

import image1 from '../../styles/themes/basic/assets/001.jpg'
import image2 from '../../styles/themes/basic/assets/002.jpg'
import image3 from '../../styles/themes/basic/assets/003.jpg'


export default class App extends React.Component {


  render() {
    return (

      <div>
        <div class='img'><BackgroundSlideshow images={[image1, image2, image3]} /></div>
        <a href='/news'><button class='center'>ENTER SITE</button></a>
      </div>

      
    )
  }
}

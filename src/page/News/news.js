import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import Receiver from '../../Component/Receiver/receiver';

import 'semantic-ui-css/semantic.min.css';
import './news.css';
import { Label, Menu, Tab, Input, Button, Icon, Image, Image as ImageComponent, Item, Advertisement } from 'semantic-ui-react'
import ImageGallery from 'react-image-gallery';



const paragraph = <ImageComponent src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />

const panes = [
  {
    menuItem: { key: 'users', icon: 'book', content: 'Books' },
    render: () => <Tab.Pane><Item.Group divided>
      <Item>

        <Item.Image src='https://static1.squarespace.com/static/5133d124e4b066ad532edd2c/t/539a8b01e4b07a1d748dce69/1402637057762/The-Ninth-Day-on-blank-book-cover-bigger.png?format=500w' />
        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image src='https://static1.squarespace.com/static/5133d124e4b066ad532edd2c/51c9274be4b0177708cfd464/539a6546e4b0d8404e8e7dda/1402627402970/Up-Nights-on-blank-book-cover-bigger.png?format=1000w' />

        <Item.Content>
          <Item.Header as='a'>My Neighbor Totoro</Item.Header>
          <Item.Meta>
            <span className='cinema'>IFC Cinema</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button primary floated='right'>
              Buy tickets
            <Icon name='right chevron' />
            </Button>
            <Label>Limited</Label>
          </Item.Extra>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image src='https://static1.squarespace.com/static/5133d124e4b066ad532edd2c/539a5d32e4b04bbfe237eb45/539a5d68e4b0a7d9fcaec4f6/1402625385869/TLWT-on-blank-book-cover.png?format=1000w' />

        <Item.Content>
          <Item.Header as='a'>Watchmen</Item.Header>
          <Item.Meta>
            <span className='cinema'>IFC</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button primary floated='right'>
              Buy tickets
            <Icon name='right chevron' />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    </Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='messages'>Messages<Label>15</Label></Menu.Item>,
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: <Menu.Menu position='right'>
      <Menu.Item>
        <Input transparent icon={{ name: 'search', link: true }} placeholder='Search ...' />
      </Menu.Item>
    </Menu.Menu>
  },
]

class News extends Component {

  render() {
    return (
      <div className="News">
        <Navbar />

        <div class="ui centered top banner test ad">
          <Image class='img' src='https://static5.depositphotos.com/1052036/528/v/950/depositphotos_5284620-stock-illustration-couple-sharing-heart.jpg' />
        </div>

        <div class="postn">
          <Tab panes={panes} />
        </div >
        <br />
        <Footer />
      </div>
    );
  }
}

export default News;
import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import Receiver from '../../Component/Receiver/receiver';

import 'semantic-ui-css/semantic.min.css';
import './manage.css';
import { Button, Label, Card, Image, Checkbox, Icon, Table, Menu, Tab, Input, Image as ImageComponent, Item } from 'semantic-ui-react'
const paragraph = <ImageComponent src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />

const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'User' },
    render: () => <Tab.Pane>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              <Button floated='right' icon labelPosition='left' primary size='small'>
                <Icon name='user' /> Delete User
          </Button>
              <Button size='small'>Approve</Button>
              <Button disabled size='small'>Approve All</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    </Tab.Pane>,
  },
  {
    menuItem: { key: 'manage', icon: 'configure', content: 'Manage'},
    render: () => <Tab.Pane>
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Name</Table.HeaderCell>
          <Table.HeaderCell>Registration Date</Table.HeaderCell>
          <Table.HeaderCell>E-mail address</Table.HeaderCell>
          <Table.HeaderCell>Premium Plan</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Jamie Harington</Table.Cell>
          <Table.Cell>January 11, 2014</Table.Cell>
          <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Jill Lewis</Table.Cell>
          <Table.Cell>May 11, 2014</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button floated='right' icon labelPosition='left' primary size='small'>
              <Icon name='user' /> Delete User
        </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>Approve All</Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>

  </Tab.Pane>,
  },
  {
    menuItem: <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon={{ name: 'search', link: true }} placeholder='Search ...' />
      </Menu.Item>
    </Menu.Menu>
  },
]

class Manage extends Component {

  render() {
    return (
      <div className="Manage">
        <Navbar />
        <br />

        <div>
          <h2 class="ui icon center aligned header">
            <i aria-hidden="true" class="users circular icon"></i>
            <div class="content">MANAGEMENT</div>
          </h2>
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

export default Manage;
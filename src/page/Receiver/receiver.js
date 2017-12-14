
import React, { Component } from 'react'
import '../../styles/semantic.min.css'
import { Button, Header, Image, Form } from 'semantic-ui-react'

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import './receiver.css';

class Receiver extends Component {
  render() {
    return (
      <div className="receiver">
        <Navbar />
        <div class="rebody">
          <br />
          <Header>I need<i aria-hidden="true" class="book icon"></i> </Header>
          <Form>
            <div class="ui vertically divided grid">
              <div class="two column row">
                <div class="thirteen wide column">
                  <Form.Input placeholder='Title' />
                </div>
                <div class="three wide column">
                  <div class="ui icon labeled vertical buttons">
                    <button class="ui button" role="button">
                      <i aria-hidden="true" class="upload icon"></i>Upload</button>
                  </div>
                </div>
              </div>
            </div>
            <Form.Group grouped>

              <Header>Category</Header>

              <div class="ui vertically divided grid">
                <div class="three column row">
                  <div class="column">
                    <Form.Field label='Generalities' control='input' type='checkbox' />
                    <Form.Field label='Philosophy' control='input' type='checkbox' />
                    <Form.Field label='Religion' control='input' type='checkbox' />
                    <Form.Field label='Social sciences' control='input' type='checkbox' />
                  </div>
                  <div class="column">
                    <Form.Field label='Language' control='input' type='checkbox' />
                    <Form.Field label='Science' control='input' type='checkbox' />
                    <Form.Field label='Technology' control='input' type='checkbox' />
                    <Form.Field label='Arts and recreation' control='input' type='checkbox' />
                  </div>
                  <div class="column">
                    <Form.Field label='Literature' control='input' type='checkbox' />
                    <Form.Field label='History and geography' control='input' type='checkbox' />
                    <Form.Field label='Other' control='input' type='checkbox' />
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Field label='Body' control='textarea' rows='6' />
          </Form>
          <br />
          <Button  class="buttonre ui button" ><a href="/">back</a></Button>
          <Button floated='right' class="buttonre" positive icon='checkmark' labelPosition='right' content="Submit" />
        </div>
      </div>
    )
  }
}


export default Receiver;
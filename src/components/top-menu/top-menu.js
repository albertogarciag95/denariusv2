import React, { Component } from 'react'
import { Menu, Icon, Popup, Header, Divider } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import logo from './santander-logo.png';

class TopMenu extends Component {
  state = {
    activeItem: ''
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push('/' + name);
  }

  onLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.props.history.push('/login');
    this.props.onLogout();
  }

  render() {
    return (
      <div>
        <Menu stackable style={{ backgroundColor: '#ec0000', height: "60px" }}>
          <Menu.Item>
            <img style={{ width: "120px", cursor: 'pointer' }} src={logo} onClick={() => this.handleItemClick(null, { name: 'home'})}/>
          </Menu.Item>
          {this.props.isLoggedIn === 'true' && (
            <Menu.Menu position='right'>
              <Menu.Item 
                name='denarius/process-history'
                style={{ color: "white", fontSize: '16px' }}
                onClick={this.handleItemClick}>
                <Icon style={{ float: "left", marginRight: "10px" }} name="home" />
                Control panel
              </Menu.Item>
              <Menu.Item 
                name='transfers'
                style={{ color: "white", fontSize: '16px' }}
                active={this.state.activeItem === 'transfers'}
                onClick={this.handleItemClick}>
                <Icon style={{ float: "left", marginRight: "10px" }} name="exchange" />
                Transfers
              </Menu.Item>
              <Menu.Item 
                name='costes'
                style={{ color: "white", fontSize: '16px' }}
                active={this.state.activeItem === 'costes'}
                onClick={this.handleItemClick}
                >
                <Icon style={{ color: "white" }} name="globe" />
                Boadila expenses
              </Menu.Item>
              <Menu.Item 
                name='info'
                active={this.state.activeItem === 'info'}>
                <Icon size="big" style={{ color: "white" }} name="info" />
              </Menu.Item>
              <Popup trigger={
                <Menu.Item 
                  name='sign-in'
                  active={this.state.activeItem === 'sign-in'}>
                  <Icon size="big" style={{ color: "white" }} name="user" />
                </Menu.Item>
                } flowing hoverable position='bottom right' style={{ marginRight: '15px' }}>
                <Header as='h1'>
                  <Icon name='user' circular /> User12345
                </Header>
                <Divider />
                <Header as='h3' style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={this.onLogout.bind(this)}>
                  <Icon name='sign out' />
                  <Header.Content>Logout</Header.Content>
                </Header>
              </Popup>             
            </Menu.Menu>
          )}        
        </Menu>
      </div>
    )
  }
}

export default withRouter(TopMenu)
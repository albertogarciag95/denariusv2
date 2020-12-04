import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
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

  render() {
    return (
      <div>
        <Menu stackable style={{ backgroundColor: '#ec0000', height: "60px" }}>
          <Menu.Item>
            <img style={{ width: "120px", cursor: 'pointer' }} src={logo} onClick={() => this.handleItemClick(null, { name: 'home'})}/>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item 
              name='denarius/process-history'
              style={{ color: "white", fontSize: '16px' }}
              onClick={this.handleItemClick}
              >
              <Icon style={{ float: "left", marginRight: "10px" }} name="home" />
              Control panel
            </Menu.Item>
            <Menu.Item 
              name='datos'
              style={{ color: "white", fontSize: '16px' }}
              active={this.state.activeItem === 'datos'}
              onClick={this.handleItemClick}
              >
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
              active={this.state.activeItem === 'info'}
              onClick={this.handleItemClick}
              >
              <Icon size="big" style={{ color: "white" }} name="info" />
            </Menu.Item>
            <Menu.Item 
              name='sign-in'
              active={this.state.activeItem === 'sign-in'}
              onClick={this.handleItemClick}
              >
              <Icon size="big" style={{ color: "white" }} name="user" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(TopMenu)
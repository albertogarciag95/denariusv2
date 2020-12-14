import React from "react";
import { Menu, Icon, Button } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'process-history',
      colapse: false
    }
  }

  handleItemClick = (route) => {
    this.setState({ activeItem: route });
    this.props.history.push(`${this.props.match.url}/${route}`);
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button basic icon onClick={() => this.setState({ colapse: !this.state.colapse })} style={{ width: '40px' }}>
          <Icon name='bars' color='red' />
        </Button>
        {!this.state.colapse ? 
          <Menu color="red" pointing vertical style={{ width: "240px", marginRight: "15px" }}>
            {this.props.menuOptions.map((option, key) => (
              <Menu.Item
                key={key}
                name={option.name}
                active={this.state.activeItem === option.route}
                onClick={e => this.handleItemClick(option.route)}
              >
                <Icon style={{ float: "left", marginRight: "10px" }} name={option.icon} />
                {option.name.toUpperCase()}
              </Menu.Item>  
            ))}
          </Menu>
        : <Menu icon vertical style={{ width: '50px', marginRight: "15px" }}>
            {this.props.menuOptions.map((option, key) => (
              <Menu.Item
                key={key}
                name={option.name}
                active={this.state.activeItem === option.route}
                onClick={e => this.handleItemClick(option.route)}
              >
                <Icon name={option.icon} />
              </Menu.Item>  
            ))}
          </Menu>
        }
      </div>
    );
  }
}

export default withRouter(SideMenu);
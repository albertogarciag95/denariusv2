import React from "react";
import { Menu, Icon } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (route) => {
    this.setState({ activeItem: route });
    this.props.history.push(`${this.props.match.url}/${route}`);
  };

  render() {
    return (
      <Menu color="red" pointing vertical>
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
    );
  }
}

export default withRouter(SideMenu);
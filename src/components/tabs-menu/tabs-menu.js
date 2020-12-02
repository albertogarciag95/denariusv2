import React from "react";
import { Menu, Icon } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class TabsMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push(`/${name}`);
  };

  render() {
    return (
      <div style={{ marginBottom: "10px" }}>
        <Menu color="red" pointing secondary>
          {this.props.menuOptions.map((option, key) => (
            <Menu.Item
              key={key}
              name={option.name}
              active={this.state.activeItem === option.name}
              onClick={this.handleItemClick}
            >
              <Icon style={{ float: "left", marginRight: "10px" }} name={option.icon} />
              {option.name.toUpperCase()}
            </Menu.Item>  
          ))}
        </Menu>
      </div>
    );
  }
}

export default withRouter(TabsMenu);
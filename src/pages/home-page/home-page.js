import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";
import HomeItem from "../../components/home/home-item/home-item";
import logo from "./logo.png";
import "./home-page.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      homeSections: [
        {
          title: 'Start process',
          imageUrl: 'assets/data.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'Upload inputs',
          imageUrl: '../../../assets/data.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Process history',
          imageUrl: '../../../assets/data.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'Boadilla expenses',
          imageUrl: '../../../assets/data.jpg',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'Queries',
          imageUrl: '../../../assets/data.jpg',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <Segment style={{ width: "100%", margin: 0, height: "800px", padding: "50px 300px", textAlign: "center"  }}>
        <Header as='h1' style={{ fontSize: "3.5em" }} >
          <Image circular src={logo}/>
          Welcome to Denarius
        </Header>
        <div className="home-menu">
          {this.state.homeSections.map(section => (
            <HomeItem key={section.id} {...section}/>
          ))}
        </div>
      </Segment>
    );
  }
}

export default HomePage;
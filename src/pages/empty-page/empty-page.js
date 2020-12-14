import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

const EmptyPage = ({ title, icon }) => (
  <Segment style={{ width: "100%", margin: 0, height: "800px"  }}>   
    <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%"}}>   
      <Header as='h2' style={{ margin: 0, fontSize: "2.5em", marginBottom: "10px" }}>
        <Icon name={icon} style={{ marginRight: "20px" }} />
          {title}
      </Header>
    </div>
    This page is empty
  </Segment>
);

export default EmptyPage;
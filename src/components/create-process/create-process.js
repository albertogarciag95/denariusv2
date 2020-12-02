import React from "react";
import { Segment, Header, Icon, Divider, Form, Button, Input } from "semantic-ui-react";

class CreateProcess extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pipelines: ["Cash View", "Cosmos", "Internegocios"]
    };
  }
  render() {
    return (
      <div>
        <Segment style={{ backgroundColor: "white" }}>
          <Header as='h2'>
            <Icon name='plug' />
            <Header.Content>Start process</Header.Content>
            <Divider />
          </Header>
          <Form>
            <Form.Field>
              <label>Choose a date:</label>
              <input placeholder='2020-11-05' />
            </Form.Field>
            <Form.TextArea label='Descripcion:' placeholder='Descripcion...' />
            <Form.Field>
              <label>Pipelines:</label>
              <div style={{ display: "flex", justifyContent: 'space-between', width: "100%", margin: "10px 0" }}>
                {this.state.pipelines.map(pipeline => (
                   <div style={{ width: "30%", display: "flex", justifyContent: "space-between", color: "white", backgroundColor: "rgb(236, 0, 0)", border: "1px solid red", borderRadius: "30px", padding: "5px" }}>
                      {pipeline}
                      <Icon name='close' />
                    </div>
                ))}
              </div>
              <Input size='small' action={{ icon: 'search', onClick: () => console.log("hola") }} placeholder='Buscar...' />
            </Form.Field>
            <div style={{ marginTop: "30px" }}>
              <Button type='submit'>Cargar inputs</Button>
              <Button type='submit'>Crear</Button>
            </div>
          </Form>
        </Segment>
      </div>
    );
  }
};

export default CreateProcess;
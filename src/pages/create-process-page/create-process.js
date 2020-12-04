import React from "react";
import { Modal, Step, Segment, Header, Icon, Divider, Form, Button, Input, Breadcrumb, Grid, Tab, List } from "semantic-ui-react";
import InputList from '../../components/create-process/input-list';
import './create-process-styles.scss';

class CreateProcessPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pipelines: ["Cash View", "Cosmos", "Internegocios"],
      showInputsModal: false
    };
  }
  render() {
    const sections = [
      { key: 'Home', content: 'Process history', link: true },
      { key: 'Store', content: 'Start process', active: true }
    ];

    const panes = [
      { 
        menuItem: { key: 'monthly', icon: 'folder', content: 'Monthly' }, 
        render: () => <Tab.Pane><InputList /></Tab.Pane>
      },
      { 
        menuItem: { key: 'static', icon: 'folder', content: 'Static' },
        render: () => <Tab.Pane><InputList /></Tab.Pane>
      },
      { 
        menuItem: { key: 'exception', icon: 'folder', content: 'Exception' }, 
        render: () => <Tab.Pane><InputList /></Tab.Pane>
      }
    ];

    return (
      <Segment style={{ backgroundColor: "white", width: "100%", margin: 0, height: "800px" }}>
        <Breadcrumb size='large' icon='right angle' sections={sections} />
        <Header as='h1'>
          <Icon name='play' />
          <Header.Content>Start process</Header.Content>
          <Divider />
        </Header>
        <Step.Group style={{ width: '100%' }}>
        <Step style={{ width: '33%' }}>
          <Icon name='file alternate outline' />
          <Step.Content>
            <Step.Title>Basic data</Step.Title>
            <Step.Description></Step.Description>
          </Step.Content>
        </Step>

        <Step style={{ width: '33%' }}>
          <Icon name='list' />
          <Step.Content>
            <Step.Title>Parameters and outputs</Step.Title>
          </Step.Content>
        </Step>

        <Step style={{ width: '33%' }}>
          <Icon name='sign-in alternate' />
          <Step.Content>
            <Step.Title>Input Selection</Step.Title>
          </Step.Content>
        </Step>
        </Step.Group>
        <Grid relaxed divided='vertically' style={{ marginTop: "10px", height: '73%' }}>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Choose a date:</label>
                  <input placeholder='2020-11-05' />
                </Form.Field>
                <Form.TextArea label='Descripcion:' placeholder='Descripcion...' />
                <Form.Group widths='equal'>
                  <Form.Checkbox label='Official' />
                  <Form.Checkbox label='Sent' />
                </Form.Group>
                <Form.Field style={{ marginTop: '30px' }}>
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
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form style={{ marginBottom: '50px' }}>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Parameter 1</label>
                    <input placeholder='Parameter 1' />
                  </Form.Field>
                  <Form.Field>
                    <label>Parameter 2</label>
                    <input placeholder='Parameter 2' />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Parameter 3</label>
                    <input placeholder='Parameter 3' />
                  </Form.Field>
                  <Form.Field>
                    <label>Parameter 4</label>
                    <input placeholder='Parameter 4' />
                  </Form.Field>
                </Form.Group>
                <a>
                  <Icon name='add'></Icon>
                  Add more
                </a>
              </Form>
              <Divider />
              <Form>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Output 1</label>
                    <input placeholder='Output 1' />
                  </Form.Field>
                  <Form.Field>
                    <label>Output 2</label>
                    <input placeholder='Output 2' />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Output 3</label>
                    <input placeholder='Output 3' />
                  </Form.Field>
                  <Form.Field>
                    <label>Output 4</label>
                    <input placeholder='Output 4' />
                  </Form.Field>
                </Form.Group>
                <a>
                  <Icon name='add'></Icon>
                  Add more
                </a>
              </Form>
            </Grid.Column>
            <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ display: 'inline-flex', justifyContent: 'space-between', height: '45%', marginTop: '65px', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
                <List size='big'>
                  <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                      <List.Header>Static</List.Header>
                      <List.Content>(24 inputs)</List.Content>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                      <List.Header>Monthly</List.Header>
                      <List.Content>(32 inputs)</List.Content>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                      <List.Header>Exception</List.Header>
                      <List.Content>(7 inputs)</List.Content>
                    </List.Content>
                  </List.Item>
                </List>
                <Modal
                  closeIcon
                  open={this.state.showInputsModal}
                  trigger={
                    <Button icon labelPosition='left' style={{ textAlign: 'center', width: '40%', height: '40px' }}>
                      <Icon name='add'></Icon>
                      Add inputs
                    </Button>}
                  onClose={() => this.setState({ showInputsModal: false })}
                  onOpen={() => this.setState({ showInputsModal: true })}
                >
                  <Header icon='add' content='Add inputs' />
                  <Modal.Content>
                    <div style={{ float: 'right'}} >
                      <Button icon basic color='red' labelPosition='left'>
                        <Icon name='tasks' />
                        Massive selection
                      </Button>
                      <Input icon='search' placeholder='Search...' />
                    </div>
                    <Tab menu={{ borderless: true, attached: false, tabular: false }} panes={panes} />
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='red' onClick={() => this.setState({ showInputsModal: false })}>
                      <Icon name='remove' /> Cancel
                    </Button>
                    <Button color='green' onClick={() => this.setState({ showInputsModal: true })}>
                      <Icon name='checkmark' /> Confirm
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
              <Button size='big' style={{ bottom: 0, width: '40%', left: '60%' }} icon basic color='red' labelPosition='left'>
                <Icon name='play' />
                Start
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
};

export default CreateProcessPage;
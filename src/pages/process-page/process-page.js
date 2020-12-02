import React from "react";
import { Segment, Header, Icon, Popup, Input, Button, Table, Pagination, Radio, Sidebar, Checkbox } from "semantic-ui-react";
import CreateProcess from "../../components/create-process/create-process";
import LogsModal from "../../components/logs-modal/logs-modal";

class ProcessPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      showLogsModal: false,
      showActions: false
    }
  }

  render() {
    return (
      <>
        <LogsModal opened={this.state.showLogsModal} onClose={() => this.setState({ showLogsModal: false })}  />
        <Sidebar.Pushable style={{ width: "100%" }}>
          <Sidebar
            style={{ padding: 0 }}
            as={Segment}
            animation='push'
            icon='labeled'
            direction='right'
            onHide={() => this.setState({ showSidebar: false })}
            vertical
            visible={this.state.showSidebar}
            width='very wide'>
            <CreateProcess />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment style={{ width: "100%", margin: 0, height: "800px"  }}>   
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%"}}>   
                <Header as='h2' style={{ margin: 0, fontSize: "2.5em", marginBottom: "10px" }}>
                  <Icon name='settings' style={{ marginRight: "20px" }} />
                    Historial de procesos
                </Header>
                <Button basic color="red" style={{ height: "50px", fontSize: "16px" }} onClick={() => this.setState({ showSidebar: true })}>
                  Crear proceso
                </Button>
              </div>
              <div style={{ margin: "20px 0", display: "flex", justifyContent: "space-between" }}>
                <div style={{ visibility: this.state.showActions ? 'visible' : 'hidden' }}>
                  <Button basic color='red' icon><Icon name='archive' /></Button>
                  <Button basic color='red' icon><Icon name='tasks' /></Button>
                  <Button basic color='red' icon><Icon name='file outline' /></Button>
                  <Button basic color='red' icon><Icon name='outdent' /></Button>
                  <Popup position='bottom' content='Arrancar proceso' trigger={
                    <Button basic color='red' icon><Icon name='power' /></Button>
                  } /> 
                  <Popup position='bottom' content='Eliminar' trigger={
                    <Button basic color='red' icon><Icon name='trash' /></Button>
                  } />                  
                  <Popup position='bottom' content='Logs' trigger={
                    <Button basic color='red' icon onClick={() => this.setState({ showLogsModal: true })}>
                      <Icon name='laptop' />
                    </Button>
                  } />
                </div>
                {/* <Button color='instagram'>
                  <Icon name='power' /> Test
                </Button>
                <Button color='youtube'>
                  <Icon name='power' /> Test
                </Button> */}
                <div>
                  <Button basic color="red" icon style={{ marginRight: "10px" }}>
                    <Icon name='filter' />
                  </Button>
                  <Input
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search...'
                    style={{ marginRight: "10px" }}
                  />
                </div>
              </div>
              <Table celled definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Created</Table.HeaderCell>
                    <Table.HeaderCell>User</Table.HeaderCell>
                    <Table.HeaderCell>Process Date</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Official</Table.HeaderCell>
                    <Table.HeaderCell>Sent</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row positive active={this.state.showActions}>
                    <Table.Cell collapsing>
                      <Checkbox onChange={() => this.setState({ showActions: !this.state.showActions })}/>
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row negative>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='close' />
                      Error
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row negative>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='close' />
                      Error
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>635</Table.Cell>
                    <Table.Cell>
                      {/* <Icon name='attention' />  */}
                      <Icon name='checkmark' />
                      Finished
                    </Table.Cell>
                    <Table.Cell>2020-11-22 05:27:39</Table.Cell>
                    <Table.Cell>admin</Table.Cell>
                    <Table.Cell>2020 Nov</Table.Cell>
                    <Table.Cell>20201122 DC Test I</Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                    <Table.Cell><Radio toggle /></Table.Cell>
                  </Table.Row>
                </Table.Body>
                </Table>
                <Pagination
                  defaultActivePage={1}
                  firstItem={null}
                  lastItem={null}
                  pointing
                  secondary
                  totalPages={3}
                />
              </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}

export default ProcessPage;
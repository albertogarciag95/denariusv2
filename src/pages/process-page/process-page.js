import React, { useState } from "react";
import { Segment, Header, Icon, Popup, Input, Button, Table, Pagination, Radio, Message, Checkbox } from "semantic-ui-react";
import LogsModal from "../../components/logs-modal/logs-modal";
import { withRouter } from "react-router-dom";
import FilterMenu from "../../components/filter-menu/filter-menu";
import process_data from "./process-data";
import './process-page.scss';

const ProcessPage = ({ tableFields, history }) => {
  const [isLogsModal, setIsLogsModal] = useState(false);
  const [isInfoMessage, setIsInfoMessage] = useState(true);
  const [processSelected, setProcessSelected] = useState(null);

  return (
    <>
      <LogsModal 
        selected={processSelected} 
        opened={isLogsModal} 
        onClose={() => setIsLogsModal(false)}  />

        <Segment style={{ width: "100%", margin: 0, height: "800px"  }}>   
          <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%"}}>   
            <Header as='h2' style={{ margin: 0, fontSize: "2.5em", marginBottom: "10px" }}>
              <Icon name='settings' style={{ marginRight: "20px" }} />
                Process history
            </Header>
            <Button
              className='main-button' 
              inverted 
              color="red" 
              style={{ height: "50px", fontSize: "16px" }} 
              onClick={() => history.push('/denarius/start-process')}>
              Start process
            </Button>
          </div>
          <div style={{ display: "inline-flex", justifyContent: "space-between", width: '100%', marginTop: '10px' }}>
            {processSelected ? 
              <div style={{ visibility: processSelected ? 'visible' : 'hidden', marginBottom: '24px' }}>
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
                <Popup flowing hoverable position='bottom' content='Logs' trigger={
                  <Button basic color='red' icon onClick={() => setIsLogsModal(true)}>
                    <Icon name='laptop' />
                  </Button>
                } />
              </div> :
              <Message
                icon='info'
                info
                size='tiny'
                style={{ margin: 0, visibility: isInfoMessage ? 'visible' : 'hidden', width: '40%' }}
                onDismiss={() => setIsInfoMessage(false)}
                header='Here you are able to watch and monitor all the in progress processes'
                content='Choose a proyect on the table to see the available actions (press the monitor)'
              />
            }
            <div>
              <FilterMenu fields={tableFields} columns={3} allign='right' />
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
                {tableFields.map(field => 
                  <Table.HeaderCell>{field.text}</Table.HeaderCell>
                )}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {process_data.map(({ id, status, creationDate, user, processDate, description }) => (
                <Table.Row positive={status === 'finished'} error={status === 'error'}>
                  <Table.Cell collapsing>
                    <Checkbox onChange={(e, { checked }) => setProcessSelected(checked ? id : null )}/>
                  </Table.Cell>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>
                    <Icon name={status === 'finished' ? 'checkmark' : 'close'} />
                      {status === 'finished' ? 'Finished' : 'Error'}
                  </Table.Cell>
                  <Table.Cell>{creationDate}</Table.Cell>
                  <Table.Cell>{user}</Table.Cell>
                  <Table.Cell>{processDate}</Table.Cell>
                  <Table.Cell>{description}</Table.Cell>
                  <Table.Cell><Radio toggle /></Table.Cell>
                  <Table.Cell><Radio toggle /></Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            </Table>
            <Pagination
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={3} />
          </Segment>
    </>
  );
}

export default withRouter(ProcessPage);
import React, { useState } from "react";
import { Segment, Header, Icon, Message, Table, Button, Pagination, Tab, Modal } from "semantic-ui-react";
import './upload-inputs-page.scss';

const UploadInputsPage = () => {
  const [showInfoMessage, isShown] = useState(true);
  const [showLogsModal, logsModal] = useState(false);
  const [inputSelected, setInputSelected] = useState(null); 

  const panes = [
    { menuItem: { content: 'Static', icon: 'folder'}, render: () => <Tab.Pane><InputTable /></Tab.Pane> },
    { menuItem: { content: 'Monthly', icon: 'folder'}, render: () => <Tab.Pane><InputTable /></Tab.Pane> }
  ];

  const InputTable = () => (<>
    {showLogsModal && 
      <Modal
        closeIcon
        onClose={() => logsModal(false)}
        open={showLogsModal}>
        <Modal.Header>
          <Header as='h2'>
            <Icon name='laptop' />
            <Header.Content>{inputSelected}</Header.Content>
          </Header>
        </Modal.Header>
        <Modal.Content>
          <Segment>
            <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <Header as='h2' color='teal'>
                <Icon name='wait' />
                <Header.Content>
                  Waiting
                  <Header.Subheader>Waiting for uploaded input</Header.Subheader>
                </Header.Content>
              </Header>
              <span>12-11-2020 09.03.03</span>
            </div>
            <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between' }}>
              <Header as='h2' color='red'>
                <Icon name='attention' />
                <Header.Content>
                  Error
                  <Header.Subheader>No ResourceType found for the file name X and sheet Y</Header.Subheader>
                </Header.Content>
              </Header>
              <span>12-11-2020 09.03.05</span>
            </div>
          </Segment>
        </Modal.Content>
      </Modal>
    }
    
    <Table celled style={{ marginTop: 0 }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>FileName</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Version</Table.HeaderCell>
          <Table.HeaderCell>File date</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Upload date</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row negative> 
          <Table.Cell>provisions_breakdown(v.44)</Table.Cell>
          <Table.Cell>
            <Icon name='close' />
            Error
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' },
                { key: 'tv', icon: 'tv', onClick: () => { logsModal(true); setInputSelected('provisions_breakdown(v.44)') }}
              ]}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>provisions_breakdown(v.46)</Table.Cell>
          <Table.Cell>
            <Icon name='checkmark' />
            Success
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' }
              ]}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>provisions_breakdown(v.45)</Table.Cell>
          <Table.Cell>
            <Icon name='checkmark' />
            Success
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' }
              ]}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row warning>
          <Table.Cell>provisions_breakdown(v.43)</Table.Cell>
          <Table.Cell>
            <Icon name='attention' />
            Warning
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' }
              ]}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>provisions_breakdown(v.42)</Table.Cell>
          <Table.Cell>
            <Icon name='checkmark' />
            Success
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' }
              ]}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row active>
          <Table.Cell>Transfer inputs(v.39)</Table.Cell>
          <Table.Cell>
            <Icon name='wait' />
            Waiting
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' },
                { key: 'tv', icon: 'tv', onClick: () => { logsModal(true); setInputSelected('Transfer inputs(v.39)') } }
              ]}
            />
          </Table.Cell> 
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>Transfer inputs(v.38)</Table.Cell>
          <Table.Cell>
            <Icon name='checkmark' />
            Success
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' }
              ]}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row negative>
          <Table.Cell>Transfer inputs(v.37)</Table.Cell>
          <Table.Cell>
            <Icon name='close' />
            Error
          </Table.Cell>
          <Table.Cell>Deploy test</Table.Cell>
          <Table.Cell>2020 Sep</Table.Cell>
          <Table.Cell>N99999</Table.Cell>
          <Table.Cell>12-11-2020 09.03</Table.Cell>
          <Table.Cell>
            <Button.Group
              buttons={[
                { key: 'trash', icon: 'trash' },
                { key: 'power', icon: 'power' }
              ]}
            />
          </Table.Cell>
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
    </>
  );

  return (
    <>
      <Message
        style={{ position: 'absolute', zIndex: '10', width: '30%', left: '34%', top: '4.5%' }}
        negative
        size='large'>
        <div style={{ display: 'flex'}}>
          <Icon name='attention' size='big' />
          <div style={{ marginLeft: '10px' }}>
            <Message.Header>Error uploading input</Message.Header>
            <p>"No ResourceType found for the file name X and sheet Y"</p>
          </div>
        </div>
      </Message>
      <Segment style={{ width: "100%", margin: 0, height: "800px"  }}>
        <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>   
          <Header as='h2' style={{ margin: 0, fontSize: "2.5em", marginBottom: "10px" }}>
            <Icon name='upload' style={{ marginRight: "20px" }} />
              Upload inputs
          </Header>
        </div>
        <div style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
          <div style={{ width: '30%', display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            {showInfoMessage && (
              <Message
                icon='info'
                info
                size='tiny'
                style={{ visibility: showInfoMessage ? 'visible' : 'hidden', width: '460px' }}
                onDismiss={() => isShown(false)}
                header='Drag and drop a .zip file into the container below (not implemented)'
                content='Click the tv icon to check '
              />
            )}
            <Segment style={{ height: '100%', alignItems: 'center', display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
              <Header as='h2' icon color='grey'>
                <Icon name='upload' />
                Upload an input
              </Header>
            </Segment>
          </div>
          <Tab panes={panes} style={{ width: '70%', marginLeft: '30px' }}/>
        </div>
      </Segment>
    </>
  )
};

export default UploadInputsPage;
import React, { useState } from "react";
import { Segment, Header, Icon, Message, Button, Form, Select, Table, Input, Checkbox, Pagination } from "semantic-ui-react";
import FilterMenu from "../../components/filter-menu/filter-menu";
import './data-management-page.scss';

const DataManagementPage = ({ tableFields }) => {

  const [selectedData, setSelectedData] = useState(null);

  return (
    <Segment style={{ width: "100%", margin: 0, height: "800px"  }}>
      <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>   
        <Header as='h2' style={{ margin: 0, fontSize: "2.5em", marginBottom: "10px" }}>
          <Icon name='database' style={{ marginRight: "20px" }} />
            Data management
        </Header>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Message
          icon='info'
          style={{ width: '500px' }}
          info
          size='tiny'
          onDismiss={() => console.log('dismiss')}
          header='Check all the master data and when it was loaded'
          content='Use the form below to search the data'
        />
        <div style={{ display: 'flex', height: '45px', marginTop: '16px' }}>
          {selectedData && 
            <Button inverted color='red' className='main-button' style={{ marginRight: "10px", fontSize: '16px' }}>
              <Icon name='pencil' />
              Edit registry
            </Button>
          }       
          <FilterMenu fields={tableFields} columns={3} allign='left' />
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search...'
          />
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '10px', height: '100%' }}>
        <div style={{ width: '25%', margin: 0, display: 'inline-flex', flexDirection: 'column' }}>
          <Segment style={{ height: '300px' }}>
            <Button basic icon>
              <Icon color='red' name='angle double left' />
            </Button>
            <Form style={{ marginTop: '20px' }}>
              <Form.Field>
                <label>Catalog</label>
                <Select placeholder='Select catalog...' />
              </Form.Field>
              <Form.Field>
                <label>Version</label>
                <Select placeholder='Select version...' />
              </Form.Field>
              <Button inverted color='red' className='main-button' style={{ marginTop: '30px', float: 'right' }} type='submit'>
                <Icon name='search' />
                Search
              </Button>
            </Form>
          </Segment>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '85%', height: '800px', margin: '0 0 0 20px' }}>
          <Table className='master-data' celled definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                {tableFields.map(({ text }) => (
                  <Table.HeaderCell>{text}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Checkbox onChange={(e, { checked }) => setSelectedData(checked ? 34 : null)} />
                </Table.Cell>
                <Table.Cell>34</Table.Cell>
                <Table.Cell>provisions_breakdown(v.46)</Table.Cell>
                <Table.Cell>
                  <Icon name='checkmark' />
                  Success
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>35</Table.Cell>
                <Table.Cell>provisions_breakdown(v.45)</Table.Cell>
                <Table.Cell>
                  <Icon name='checkmark' />
                  Success
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>36</Table.Cell> 
                <Table.Cell>provisions_breakdown(v.44)</Table.Cell>
                <Table.Cell>
                  <Icon name='close' />
                  Error
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>57</Table.Cell>
                <Table.Cell>provisions_breakdown(v.43)</Table.Cell>
                <Table.Cell>
                  <Icon name='attention' />
                  Warning
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>517</Table.Cell>
                <Table.Cell>provisions_breakdown(v.42)</Table.Cell>
                <Table.Cell>
                  <Icon name='checkmark' />
                  Success
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell> 
                <Table.Cell>22</Table.Cell>
                <Table.Cell>Transfer inputs(v.39)</Table.Cell>
                <Table.Cell>
                  <Icon name='wait' />
                  Waiting
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>25</Table.Cell>
                <Table.Cell>Transfer inputs(v.38)</Table.Cell>
                <Table.Cell>
                  <Icon name='checkmark' />
                  Success
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>  
                <Table.Cell>45</Table.Cell>
                <Table.Cell>Transfer inputs(v.37)</Table.Cell>
                <Table.Cell>
                  <Icon name='close' />
                  Error
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>45</Table.Cell>
                <Table.Cell>Transfer inputs(v.37)</Table.Cell>
                <Table.Cell>
                  <Icon name='close' />
                  Error
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>45</Table.Cell>
                <Table.Cell>Transfer inputs(v.37)</Table.Cell>
                <Table.Cell>
                  <Icon name='close' />
                  Error
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>45</Table.Cell>
                <Table.Cell>Transfer inputs(v.37)</Table.Cell>
                <Table.Cell>
                  <Icon name='close' />
                  Error
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>45</Table.Cell>
                <Table.Cell>Transfer inputs(v.37)</Table.Cell>
                <Table.Cell>
                  <Icon name='close' />
                  Error
                </Table.Cell>
                <Table.Cell>Data example</Table.Cell>
                <Table.Cell>2020 Sep</Table.Cell>
                <Table.Cell>N99999</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
                <Table.Cell>12-11-2020 09.03</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={7}
          />
        </div>         
      </div>
    </Segment>
  )
}

export default DataManagementPage;

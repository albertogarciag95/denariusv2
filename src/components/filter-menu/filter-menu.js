import React, { useState } from "react";
import { Popup, Button, Icon, Form, Grid, Checkbox, Divider } from "semantic-ui-react";
import './filter-menu.scss';

const FilterMenu = ({ fields, columns = 3, allign }) => {
  fields.sort((a, b) => a.order < b.order ? -1 : 1);
  const filterPerColumn = Math.round(fields.length / columns);
  const lastColumn = fields.length % columns;
  const gridColumns = [];

  let filters = [];
  let columnStart = 0;

  for(let index = 0; index < columns; index ++) {
    filters = (index === 0 && allign === 'right') ? 
      fields.slice(columnStart, lastColumn) :
      fields.slice(columnStart, filterPerColumn + columnStart);
          
    gridColumns.push(
      <Grid.Column key={index}>
        <Form>
          {filters.map(({ text, inputType }) => (
            <Form.Field>
              <label>{text}</label>
              {inputType === 'text' ? <input /> : 
                (inputType === 'date' ? <input type='date' /> : <Checkbox toggle />)}
            </Form.Field>
          ))}
        </Form>
      </Grid.Column>
    );
    columnStart += (index === 0 && allign === 'right') ? lastColumn : filterPerColumn;
  }

  return (
    <Popup wide='very' hoverable position='bottom right' trigger={
      <Button inverted color='red' className='main-button' icon style={{ marginRight: '10px' }}>
        <Icon name='filter' />
      </Button>}>
      <Grid columns={columns}>{gridColumns}</Grid>
      <Divider />
      <Button className='main-button' content='Aplicar filtro' style={{ float: 'right' }} inverted color="red" />
    </Popup>
  );
};

export default FilterMenu;

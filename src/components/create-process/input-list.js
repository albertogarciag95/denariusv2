import React, { useState } from "react";
import { Table, Icon, Checkbox } from "semantic-ui-react";

const InputList = () => {
  const [inputs, setInputs] = useState([
    { active: false, icon: 'sort down', fileName: 'provisions_breakdown', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_example', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_test', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_document', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_document', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_document', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' }
  ]);

  const onClickRow = (idx, active) => {
    const newInputs = [...inputs];
    newInputs[idx].icon = newInputs[idx].icon === 'sort up' ? 'sort down' : 'sort up';
    newInputs[idx].active = !newInputs[idx].active;

    active ? collapseRow(newInputs, idx) : expandRow(newInputs, idx);
    setInputs(newInputs);
  };

  const expandRow = (newInputs, idx) => {
    newInputs.splice(idx + 1, 0, { active: false, checked: true, fileName: 'provisions_breakdown', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' });
    newInputs.splice(idx + 2, 0, { active: false, fileName: 'provisions_breakdown', version: 'v2', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' });
    newInputs.splice(idx + 3, 0, { active: false, fileName: 'provisions_breakdown', version: 'v3', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' })
  };

  const collapseRow = (newInputs, idx) => {
    newInputs.splice(idx + 1, 3);
  }

  return (
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>FileName</Table.HeaderCell>
          <Table.HeaderCell>Version</Table.HeaderCell>
          <Table.HeaderCell>File date</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Upload date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {inputs.map(({ active, icon, checked, fileName, version, file_date, username, upload_date  }, idx) => (
          <Table.Row active={active}>
            {icon ? (
              <Table.Cell onClick={() => onClickRow(idx, active)} style={{ cursor: 'pointer' }}>
                <Icon name={icon} />
              </Table.Cell>
            ) : (
            <Table.Cell>
              <Checkbox checked={checked}/>
            </Table.Cell>
            )}
            <Table.Cell>{fileName}</Table.Cell>
            <Table.Cell>{version}</Table.Cell>
            <Table.Cell>{file_date}</Table.Cell>
            <Table.Cell>{username}</Table.Cell>
            <Table.Cell>{upload_date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default InputList;
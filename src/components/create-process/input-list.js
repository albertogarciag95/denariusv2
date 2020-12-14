import React, { useState } from "react";
import { Table, Icon, Checkbox } from "semantic-ui-react";

const InputList = () => {
  const [inputs, setInputs] = useState([
    { active: false, icon: 'sort down', fileName: 'provisions_breakdown', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_example', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_test', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_document', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_document2', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' },
    { active: false, icon: 'sort down', fileName: 'provisions_document3', version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' }
  ]);

  const onClickRow = (idx) => {
    const newInputs = [...inputs];
    const { active, version, fileName, icon } = newInputs[idx];
    newInputs[idx].icon = icon === 'sort up' ? 'sort down' : 'sort up';
    newInputs[idx].active = !active;

    active ? collapseRow(newInputs, idx) : expandRow(newInputs, idx, fileName, version);
    setInputs(newInputs);
  };

  const expandRow = (newInputs, idx, fileName, version) => {
    newInputs.splice(idx + 1, 0, { active: false, checked: version === 'v1', fileName, version: 'v1', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' });
    newInputs.splice(idx + 2, 0, { active: false, checked: version === 'v2', fileName, version: 'v2', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' });
    newInputs.splice(idx + 3, 0, { active: false, checked: version === 'v3', fileName, version: 'v3', file_date: '2020-11-21 00:00:00', username: 'Test', upload_date: '2020-11-27 00:00:00' })
  };

  const collapseRow = (newInputs, idx) => {
    newInputs.splice(idx + 1, 3);
  };

  const onCheck = (idx, checked) => {
    const newInputs = [...inputs];
    const { fileName, version } = newInputs[idx];
    
    const currentVersionInputIdx = newInputs.findIndex(input => input.fileName === fileName);

    const inputRestoredChecks = newInputs.map(input => 
      input.fileName === fileName && !input.active ? (
        input.version === version ? 
          { ...input, checked } : 
          { ...input, checked: !checked }
      ) : { ...input }
    );

    inputRestoredChecks[currentVersionInputIdx].version = inputRestoredChecks[idx].version;

    setInputs(inputRestoredChecks);
  };

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
              <Table.Cell onClick={() => onClickRow(idx)} style={{ cursor: 'pointer' }}>
                <Icon name={icon} />
              </Table.Cell>
            ) : (
            <Table.Cell>
              <Checkbox checked={checked} onChange={(e, { checked: value }) => onCheck(idx, value)} />
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
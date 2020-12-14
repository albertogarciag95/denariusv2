import React from "react";
import { Modal, Icon, Header } from "semantic-ui-react";
import logs from "./logs.gif";

const LogsModal = ({ opened, onClose, selected }) => (
  <Modal
    closeIcon
    size='large'
    onClose={onClose}
    open={opened}>
    <Modal.Header>
      <Header as='h2'>
        <Icon name='laptop' />
        <Header.Content>Proceso {selected}</Header.Content>
      </Header>
    </Modal.Header>
    <Modal.Content>
      <img style={{ width: "100%" }} src={logs}></img>
    </Modal.Content>
  </Modal>
);

export default LogsModal;
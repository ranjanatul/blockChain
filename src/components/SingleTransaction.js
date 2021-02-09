import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { values } from '../consts';

export default function Transaction({val, closePopup, modalVal}) {
  const arr = (val && Object.keys(val)) || [];
    return (
<Modal show={modalVal} onHide={closePopup} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Selected transaction detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {arr.map((item, i) => (
            <div className="row">
            <div className="col-sm-3">
                {values[item] ? `${values[item]} :` : ""}
            </div>
            <div className="col-sm-9 scrollOvr">
                {Array.isArray(val[item]) && val[item].length > 0
                ? JSON.stringify(val[item])
                : val[item]}
            </div>
        </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      );
}
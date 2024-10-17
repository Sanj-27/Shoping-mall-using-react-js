import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import base_url from './api'

function Shopform() {
  const [shopmodule, setShops] = useState({ id: '', category: '', Name: '',status: '',owner: '',leasestatus:''});

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(shopmodule);
    postDataToServer(shopmodule);
  };

  const postDataToServer = (data) => {
    axios
      .post(`${base_url}/shop_details`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFormReset = () => {
    setShops({ id: '', category: '', Name: '',status: '',owner: '', leasestatus: ''});
  };

  return (
    <div>
      <h1>Shops Entry Form</h1>
      <Form onSubmit={onFormSubmit}>
        <FormGroup className="mb-3">
          <Label for="shopId">ID:</Label>
          <Input
            type="text"
            id="shopId"
            value={shopmodule.id}
            onChange={(e) => setShops({ ...shopmodule, id: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="category">Category:</Label>
          <Input
            type="text"
            id="category"
            value={shopmodule.category}
            onChange={(e) => setShops({ ...shopmodule, category: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="Name">Name:</Label>
          <Input
            type="text"
            id="Name"
            value={shopmodule.Name}
            onChange={(e) => setShops({ ...shopmodule, Name: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="status">Status :</Label>
          <Input
            type="text"
            id="status"
            value={shopmodule.status}
            onChange={(e) => setShops({ ...shopmodule, status: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="owner">Owner:</Label>
          <Input
            type="text"
            id="owner"
            value={shopmodule.owner}
            onChange={(e) => setShops({ ...shopmodule, owner: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="leasestatus">Leasestatus:</Label>
          <Input
            type="text"
            id="leasestatus"
            value={shopmodule.leasestatus}
            onChange={(e) => setShops({ ...shopmodule, leasestatus: e.target.value })}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button color="secondary" type="button" onClick={onFormReset}>
          Reset
        </Button>
      </Form>
    </div>
  );
}

export default Shopform;

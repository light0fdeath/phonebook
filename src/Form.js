import React, { useState, useEffect } from 'react';
import Table from './Table';

function Form(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length && lastName.length && !isNaN(phoneNumber)) {
      const newItem = {
        id: new Date().getTime().toString(),
        fName: firstName,
        lName: lastName,
        phone: phoneNumber,
      };
      setList([...list, newItem]);
      setFirstName('');
      setLastName('');
      setphoneNumber('');
    } else if (firstName.length == 0) {
      alert('Enter valid first name');
    } else if (lastName.length == 0) {
      alert('Enter valid last name');
    } else if (isNaN(phoneNumber)) {
      alert('Enter valid phone number');
    }
  };

  props.saveFn(list);

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        <div className='form-group row'>
          <div className='form-control'>
            <h3>Phone Book</h3>
            <br></br>
            <label className='col-sm-2 col-form-label'>First Name: </label>
            <input
              type='text'
              className='grocery'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label className='col-sm-2 col-form-label'>Last Name:</label>
            <input
              type='text'
              className='grocery'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <label className='col-sm-2 col-form-label'>Phone Number:</label>
            <input
              type='text'
              className='grocery'
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <br />
            <br />
            <button type='submit' className='btn btn-primary submit-btn'>
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className='grocery-container'></div>
    </section>
  );
}

export default Form;

import React from 'react';
const Table = ({ items }) => {
  return (
    <div className='grocery-list container'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, fName, lName, phone } = item;
            return (
              <tr key={id}>
                <td>{fName} </td>
                <td>{lName} </td>
                <td>{phone} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateProduct = ({ onShowForm, createProduct }) => {
  const [user, setUser] = useState({ name: '', job: '' });

  const handleChange = evt => {
    evt.preventDefault();
    const value = evt.target.value;
    const name = evt.target.name;

    setUser({ ...user, [name]: value });
  };
  const hanleSubmitForm = evt => {
    evt.preventDefault();
    createProduct(user);
  };
  if (onShowForm !== false) {
    return (
      <div>
        <form onSubmit={hanleSubmitForm}>
          <div>
            <input type="text" onChange={handleChange} name="name" />
            <input type="text" onChange={handleChange} name="job" />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  return null;
};

CreateProduct.propTypes = {};

export default CreateProduct;

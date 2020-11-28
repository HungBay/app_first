import React from 'react';
import PropTypes from 'prop-types';

const userProfile = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>
              <img src={avatar} alt={first_name} />
            </td>
            <td>
              <button>Edit</button>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
};

userProfile.propTypes = {};

export default userProfile;

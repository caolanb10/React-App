import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveTable, NavLink, Button } from 'common-components';
import classes from './UserDetails.css';

const UserDetails = ({
  /*
  labels,
  name,
  username,
  userId,
  password,
  email,
  */
}) => (
  <ResponsiveTable
    source={[{
      label: 'Name', value: 'Caolan', button: <Button />,
    }, {
      label: 'UserId', value: '123234',
    }, {
      label: 'Username', value: 'caolan123',
    }, {
      label: 'Password', value: '*****', button: <Button />,
    }, {
      label: 'Email', value: 'barryc10@email.com', button: <Button />,
    },
    ]}
  />
);
UserDetails.propTypes = {
  /*
  labels: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userI: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
*/
};

export default UserDetails;

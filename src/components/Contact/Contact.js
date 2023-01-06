import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

import { ListItem, Number, Button, TextField } from './Contact.styled';

export default function Contact({ id, name, number }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setIsLoading(true);
    dispatch(deleteContact(id));
  };
  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </ListItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

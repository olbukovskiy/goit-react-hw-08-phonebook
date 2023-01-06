import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';

import { Label, Input } from 'components/AddContact/AddContact.styled';
import { Wrapper } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const changeHandler = event => {
    dispatch(filterContact(event.currentTarget.value.toLowerCase()));
  };
  return (
    <Wrapper>
      <Label>
        Find contacts by name:
        <Input type="text" onChange={changeHandler} />
      </Label>
    </Wrapper>
  );
}

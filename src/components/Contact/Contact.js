import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { changeContactData, deleteContact } from "redux/contacts/operations";

import { ListItem, Number, TextField } from "./Contact.styled";
import {
  FormInput,
  Label,
  Button,
  FormField,
} from "../AddContact/AddContact.styled";
import { Formik } from "formik";
import { AddContactModal } from "components/AddContactModal/AddContactModal";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "number":
      return { ...state, number: action.payload };
    default:
      return state;
  }
}

export default function Contact({ id, name, number }) {
  const initialValues = { name, number };
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialValues);
  const dispatchOperator = useDispatch();

  const handleDelete = () => {
    setIsLoading(true);
    dispatchOperator(deleteContact(id));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    dispatch({ type: event.target.name, payload: event.target.value });
  };

  const handleSubmit = (_, action) => {
    dispatchOperator(
      changeContactData({ name: state.name, number: state.number, id })
    );
    action.resetForm();
    closeModal();
  };

  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={openModal}>
        Edit
      </Button>
      <Button type="button" onClick={handleDelete} disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
      {isOpen && (
        <AddContactModal onClose={closeModal}>
          <Formik initialValues={state} onSubmit={handleSubmit}>
            <FormField>
              <Label>
                Name
                <FormInput
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  placeholder="Enter name"
                  value={state.name}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Number
                <FormInput
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  placeholder="Enter number. For example: 098-084-68-40"
                  value={state.number}
                  onChange={handleChange}
                />
              </Label>
              <Button type="submit">Save changes</Button>
            </FormField>
          </Formik>
        </AddContactModal>
      )}
    </ListItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

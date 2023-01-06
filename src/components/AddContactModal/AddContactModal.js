import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { Backdrop } from "./AddContactModal.styled";

const modalRoot = document.querySelector("#modal-root");

export const AddContactModal = ({ children, onClose }) => {
  const onBackdropClickHandler = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscHandler = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscHandler);
    return () => window.removeEventListener("keydown", onEscHandler);
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={onBackdropClickHandler}>{children}</Backdrop>,
    modalRoot
  );
};

AddContactModal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

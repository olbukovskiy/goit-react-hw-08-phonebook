import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";

import IconBtn from "components/IconBtn/IconBtn";
import { BackdropOver, ModalPaper } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const ModalWindow = ({ children, onClose }) => {
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
    <BackdropOver open={true} onClick={onBackdropClickHandler}>
      <ModalPaper>
        <IconBtn onClick={onClose}>
          <AiOutlineCloseCircle size="30px" />
        </IconBtn>
        {children}
      </ModalPaper>
    </BackdropOver>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

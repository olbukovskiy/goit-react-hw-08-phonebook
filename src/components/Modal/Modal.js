import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

import IconBtn from "components/IconBtn/IconBtn";
import { BackdropOver, ModalPaper } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export let targetElement = null;

export const ModalWindow = ({ children, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      targetElement = document.querySelector("#backdrop");
      return;
    }

    disableBodyScroll(targetElement);

    return () => clearAllBodyScrollLocks();
  }, [isMounted]);

  return createPortal(
    <BackdropOver open={true} onClick={onBackdropClickHandler} id="backdrop">
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

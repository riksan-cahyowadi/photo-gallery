import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
    font-family: "Caveat", cursive;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  &:hover {
    background: #e65c50;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>tutup</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

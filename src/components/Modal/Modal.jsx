import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 25px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: #333;

    &:hover {
        color: #ff0000;
    }
`;

const ModalHeader = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;

export default function Modal({ show, handleClose, children }) {
    if (!show) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={handleClose}>×</CloseButton>
                <ModalHeader>Formulario de Pago</ModalHeader>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
}
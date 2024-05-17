import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const CardSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;

    label {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .react-select__control {
        width: 300px;
    }
`;

const cardOptions = [
    { value: 'visa', label: 'Visa' },
    { value: 'mastercard', label: 'MasterCard' },
    { value: 'amex', label: 'American Express' },
    { value: 'discover', label: 'Discover' },
];

export default function CardSelect({ selectedCard, handleCardChange }) {
    return (
        <CardSelectContainer>
            <label htmlFor="card-select">Selecciona tu tarjeta:</label>
            <Select
                id="card-select"
                options={cardOptions}
                value={selectedCard}
                onChange={handleCardChange}
                classNamePrefix="react-select"
            />
        </CardSelectContainer>
    );
}
import React from 'react';
import styled from 'styled-components';
import burgerStoreImage from '../../assets/Hamburguesas.jpg'; // Asegúrate de tener esta imagen en tu proyecto

const FooterContainer = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
`;

const FooterImage = styled.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const SocialLink = styled.a`
    color: #333;
    text-decoration: none;
    font-size: 24px;

    &:hover {
        color: #007bff;
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterImage src={burgerStoreImage} alt="Local de hamburguesas" />
            <SocialLinks>
                <SocialLink href="https://www.instagram.com/BurguerWebstore" target="_blank">
                    <i className="fab fa-instagram"></i> Instagram
                </SocialLink>
                <SocialLink href="https://wa.me/1234567890" target="_blank">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                </SocialLink>
            </SocialLinks>
        </FooterContainer>
    );
}
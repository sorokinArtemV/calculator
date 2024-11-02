import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-family: "Lato", sans-serif;
    padding-inline: 10px;
`;

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    margin-top: 82px;
    width: 100%;
`;

export const RestorePassword = styled.h5`
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;
    align-self: flex-end;
    justify-self: flex-end;
    margin: 5px;
    border-bottom: 1px solid var(--primary-color);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    row-gap: 10px;
    width: 100%;
    margin: 30px 0;
    justify-content: center;
    column-gap: 18px;
`;

export const AdditionalText = styled.h5`
    font-size: 18px;
    font-weight: 400;
    font-family: "Lato", sans-serif;
    letter-spacing: -0.32px;
    color: var(--accent-gray);
    margin-top: 15px;
    margin-bottom: 30px;
    position: relative;
`;

export const AdditionalTextWithLines = styled(AdditionalText)`
    &:before,
    &:after {
        content: '';
        display: block;
        max-width: 70px;
        width: 100%;
        height: 1px;
        background-color: var(--accent-gray);
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: -1;
        bottom: 45%;

        @media (max-width: 320px) {
            display: none;
        }
    }

    &:before {
        left: 15%;
    }

    &:after {
        right: -6%;
    }
`;

export const SignUpLink = styled.a`
    font-size: 18px;
    font-weight: 600;
    font-family: "Lato", sans-serif;
    letter-spacing: -0.32px;
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
`;



import styled from 'styled-components';
import theme from '../../styles/theme';

export const ContainerMain = styled.div`
  font-family: ${theme.fonts.secondary};
  background-image: url('../../assets/arturia.jpeg');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  min-height: 10vh;
`;

export const Breadcrumb = styled.div`
  display: flex;
  width: 280%;
  margin: 1.5rem auto;
  gap: 5px;
  font-size: 1rem;

  a {
    color: ${theme.black};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-weight: ${theme.fonts.weight.bolder};
  }

  @media (max-width: 510px) {
    width: 100%;
    margin: 1.5rem 10px;
    font-size: 0.9rem;
  }
`;

export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
width: 24%;
margin: 0 auto;  // Adjusted margin to 0 auto

.divLabelInput {
  width: 100%;  // Adjusted width to 100%
  margin-top: 15px;
}
  label {
    font-family: ${theme.fonts.primary};
    font-size: 16px;
    font-weight: ${theme.fonts.weight.bolder};
    margin-bottom: 5px;
    color: ${theme.black};

    @media (max-width: 510px) {
      font-size: 14px;
    }
  }

  input {
    font-family: ${theme.fonts.secondary};
    height: 35px;
    width: 100%;
    margin: 2px auto 0;
    padding: 5px 15px;
    border: 1px solid ${theme.gray4};
    outline: none;
    border-radius: 5px;
    transition: border-color 0.3s;
    color: ${theme.black};
    background-color: ${theme.white};

    &::placeholder {
      font-size: 16px;
      color: ${theme.gray2};
    }

    &:focus {
      border-color: ${theme.primary};
    }

    @media (max-width: 510px) {
      font-size: 14px;

      &::placeholder {
        font-size: 14px;
      }
    }
  }

  span {
    position: absolute;
    font-size: 13px;
    color: #FF0000;
  }

  p {
    width: 100%;
    text-align: center;
    margin: 15px 0 100px;
    font-size: 13px;
    font-weight: ${theme.fonts.weight.bolder};
    color: ${theme.black};

    a {
      color: ${theme.black};
      font-weight: ${theme.fonts.weight.bolder};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

  @media (max-width: 510px) {
    // Adjusted width to 100% for smaller screens
    width: 100%;
    margin: 1.5rem 10px;
    font-size: 0.9rem;
  }
`;

export const ForgotPassword = styled.div`
  margin: 5px 0 25px;
  text-align: end;

  a {
    font-size: 12px;
    font-weight: ${theme.fonts.weight.bolder};
    color: ${theme.black};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (max-width: 510px) {
    font-size: 14px;
    margin: 0 100px 25px;
  }
`;

export const ButtonLogin = styled.div`
  display: flex;
  justify-content: left;
  
  button {
    height: 35px;
    width: 100%;
    font-size: 18px;
    color: ${theme.white};
    background-color: #FF7D1B;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e56600;
    }

    &:active {
      background-color: #d45500;
    }

    @media (max-width: 510px) {
      font-size: 15px;
    }
  }
`;

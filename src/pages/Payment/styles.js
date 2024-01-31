import styled from 'styled-components';
import theme from '../../styles/theme';

export const Breadcrumb = styled.div`
  display: flex;
  width: 80%;
  margin: 1.5rem auto;
  gap: 5px;
  font-size: 15px;

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
    font-size: 12px;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  width: 85%;
  margin: 1.5rem auto;
  flex-direction: row;
  gap: 2rem;

  .p-margin {
    margin-left: 20px;
  }

  @media (max-width: 860px) {
    flex-direction: column-reverse;
  }
`;

export const ContainerLeft = styled.form`
  width: 50%;
  margin: 1.5rem 0;

  @media (max-width: 1050px) {
    width: 40%;
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;

export const ContainerRight = styled.form`
  width: 50%;
  align-self: center;

  @media (max-width: 1050px) {
    width: 60%;
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;

export const Product = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin-top: 1rem;
  padding-left: 10px;

  img {
    width: 13%;
    height: 90%;
  }

  p {
    margin: 0 10px;
  }

  span {
    margin-left: auto;
    font-weight: ${theme.fonts.weight.bold};
  }
`;

export const Total = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  border-top: 1px solid rgb(0, 0, 0, 0.25);

  span {
    padding: 10px 10px 0 10px;
    font-size: 1.8rem;
    font-weight: 800;
    color: #ffa724;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin: 0.7rem auto;
  }
`;

export const Form = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
  }

  .container {
    position: relative;
    background-image: url('../img/footo.png');
    background-size: cover;
    padding: 24px;
    border-radius: 30px;
    max-width: 390px;
    width: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  header,
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo img {
    width: 48px;
    margin-right: 10px;
  }

  h5 {
    color: white;
    font-weight: 400;
    font-size: 16px;
  }

  h5.master {
    color: white;
    font-weight: 700;
    font-size: 17px;
  }

  header .chip {
    width: 50px;
  }

  h6 {
    color: white;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 12px;
  }

  h5.number {
    margin-top: 4px;
    font-size: 18px;
    font-weight: 300;
  }

  h6.name {
    margin-top: 20px;
    font-size: 16.5px;
    font-weight: 600;
  }

  h6.card-num {
    font-weight: 600;
  }

  .container .card {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const DivInputCard = styled.div`
  display: block;

  .card {
    display: block;

    .securityCode {
      max-width: 115px;
      padding: 5px 10px;
      font-size: 20px;
      &::placeholder {
        font-size: 13.5px;
      }
    }
  }

  input {
    display: block;
    width: 100%;
    margin: 15px 0;
    padding: 10px;
    border: 1px solid ${theme.black};
  }

  select {
    padding: 5px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;

  button {
    padding: 10px 20px;
    color: ${theme.white};
    background-color: #ffa724;
    border-radius: 4px;
    &:hover {
      filter: brightness(1);
    }
    &:active {
      filter: brightness(0.9);
    }
  }
`;

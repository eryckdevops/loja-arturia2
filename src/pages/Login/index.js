import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import backgroundImage from '../../assets/arturia.jpeg'; // Importe a imagem de fundo

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn, loadingAuth, user } = useContext(AuthContext);

  function formSubmit(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {
      logIn(email, password);
      history.push('/');
    }
  }

  return (
    <>
      <S.ContainerMain style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '30%', backgroundPosition: 'left' }}>
        <S.Breadcrumb>
          <a href='/'>Início</a>
          <span>/</span>
          <a href='#'>Minha conta</a>
          <span>/</span>
          <p>Login</p>
        </S.Breadcrumb>

        <S.ContainerForm onSubmit={formSubmit}>
          <div className='divLabelInput'>
            <label>
              Endereço de Email
              <input
                type="email"
                placeholder='Seuemail@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          <div className='divLabelInput'>
            <label>
              Senha
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>

          <S.ForgotPassword>
            <a href='/reset'>Esqueceu a senha?</a>
          </S.ForgotPassword>

          <S.ButtonLogin>
            <button type="submit">Entrar</button>
          </S.ButtonLogin>
          <p>Não possui uma conta? <a href='/register'>Registre-se</a></p>
        </S.ContainerForm>
      </S.ContainerMain>
    </>
  );
}

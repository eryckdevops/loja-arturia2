// Importe as bibliotecas e componentes necessários
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';  // Importe os estilos corretamente
import backgroundImage from '../../assets/arturia.jpeg';

// Esquema de validação usando Yup
const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 dígitos').required('A senha é obrigatória'),
  confirmPassword: yup
    .string()
    .required('A Confirmação de Senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});

// Componente de registro
export default function Register() {
  const history = useHistory();
  const { signUp, loadingAuth } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Função para lidar com o envio do formulário
  const formSubmit = async (data) => {
    try {
      await signUp(data.email, data.name, data.password);
      setName('');
      setEmail('');
      setPassword('');
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  // Renderização do componente
  return (
    <S.ContainerMain style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '60%', backgroundPosition: 'left' }}>
      <S.Breadcrumb>
        <a href='/'>Início</a>
        <span>/</span>
        <a href='#'>Minha conta</a>
        <span>/</span>
        <p>Register</p>
      </S.Breadcrumb>

      <S.ContainerForm>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='divLabelInput'>
            <label>
              Nome completo
              <input
                className={`input ${errors.name ? 'error' : ''}`}
                type='text'
                placeholder='Seu nome'
                {...register('name')}
              />
              {errors.name && <span>{errors.name?.message}</span>}
            </label>
          </div>

          <div className='divLabelInput'>
            <label>
              Endereço de Email
              <input
                className={`input ${errors.email ? 'error' : ''}`}
                type='email'
                placeholder='Seuemail@email.com'
                {...register('email')}
              />
              {errors.email && <span>{errors.email?.message}</span>}
            </label>
          </div>

          <div className='divLabelInput'>
            <label>
              Senha
              <input
                className={`input ${errors.password ? 'error' : ''}`}
                type='password'
                {...register('password')}
              />
              {errors.password && <span>{errors.password?.message}</span>}
            </label>
          </div>

          <div className='divLabelInput'>
            <label>
              Confirmação de senha
              <input
                className={`input ${errors.confirmPassword ? 'error' : ''}`}
                type='password'
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}
            </label>
          </div>

          {/* Use o componente ButtonRegister do estilo S */}
          <S.ButtonRegister>
            <button type='submit'>Registrar</button>
          </S.ButtonRegister>

          <p>
            Você já possui uma conta? <a href='/login'>Entrar</a>
          </p>
        </form>
      </S.ContainerForm>
    </S.ContainerMain>
  );
}

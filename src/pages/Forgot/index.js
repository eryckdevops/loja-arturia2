import React from 'react';
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import * as S from "./styles";

const schema = yup
    .object({
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
    })
    .required();

export default function Forgot() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(userData) {
        console.log(userData);
    }

    return (
        <>

            <S.ContainerMain>
                <S.Breadcrumb>
                    <a href='/'>Home</a>
                    <span>/</span>
                    <a href='#'>My account</a>
                    <span>/</span>
                    <p>Forgot Password</p>
                </S.Breadcrumb>

                <S.Information>
                    <p>Enviaremos um e-mail para que você possa alterar sua senha.</p>
                </S.Information>

                <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className='divLabelInput'>
                            <label>
                                Email Adress
                                <input
                                    type="email"
                                    placeholder='Seu@email.com'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span> {errors.email?.message}</span>}
                            </label>
                        </div>
                        <S.DivButton>
                            <button type="submit">Send email</button>
                        </S.DivButton>
                        <p>Back to <a href='/login'>Login</a></p>
                    </div>
                </S.ContainerForm>
            </S.ContainerMain>

        </>
    )
}
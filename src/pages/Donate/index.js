import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js'

import ModalPix from '../../components/ModalPix'

import pix from '../../assets/pix-106.svg'
import Swal from 'sweetalert2'

import donateSvg from '../../assets/creditcard.svg'

import * as S from "./styles";

export default function Donate() {
    const [showModal, setShowModal] =  useState(false)


    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Início</a>
                <span>/</span>
                <p>Teste Dev</p>
            </S.Breadcrumb>

            <S.ContainerMain>
                <img src={donateSvg} />
                <div>
                    <h1>
                        O Arturia não possui fins lucrativos, o projeto  foi desenvolvido apenas para teste.
                    </h1>
                    <p>Pix Ilustrativo <span>R$ 1,00</span>.</p>
                    <button onClick={() => setShowModal(true)}> <img src={pix} alt="Icone Pix" /> </button>
                    <PayPalButtons createOrder={ (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{ 
                                amount:{
                                    value: '1'
                                }
                            }]
                        })
                    }} 
                    onApprove={(data, actions) => {
                        return actions.order.capture().then( details => {
                            Swal.fire(
                                'Você apoiou o nosso projeto.',
                                'Agradecemos pelo apoio!',
                                'success'
                              )
                        })
                    }} />
                </div>
            </S.ContainerMain>

            {showModal && <ModalPix onClick={() => setShowModal(false)} active={showModal} />}
        </>
    )
}

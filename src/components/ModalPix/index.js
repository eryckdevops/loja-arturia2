import React, { useState } from 'react';
import { FiX, FiCopy } from 'react-icons/fi'
import * as S from './style';

import copy from "copy-to-clipboard"

import qrcode from '../../assets/qrcode-pix.png'

export default function ModalPix({ active, onClick }) {

    const [showModal, setShowModal] = useState(active);

    function copyPix() {
        let pix = 'Testedev'
        copy(pix)
    }

    return (
        <>
            <S.BackgroundModal>
                <S.ContainerModal>
                    <img src={qrcode} alt="qr code" />
                    <span><strong>Valor:</strong> R$ 1,00</span>
                    <span><strong>Destino:</strong> ArturiaTech</span>
                    <p>Ou</p>
                    <button onClick={copyPix}><FiCopy /> Copiar para área de transferência</button>
                    <div><FiX onClick={onClick} /></div>
                </S.ContainerModal>
            </S.BackgroundModal>
        </>
    )
}
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'

import { FaTimes, FaTrash, FaStore, FaAngleDown } from 'react-icons/fa'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as S from './style';


export default function ShopCart({ sidebar }) {

    const [showCart, setShowCart] = useState(sidebar)

    const [productsOnCart, setProductsOnCart] = useState([])
    const [total, setTotal] = useState(0)
    const [qtdItems, setQtdItems] = useState(0)
    const [optionsCart, setOptionsCart] = useState(false)

    useEffect(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
        console.log(productsOnCart)
    }, [])

    useCallback(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])

    }, [productsOnCart])


    function deleteProduct(productId) {
        let filtroProducts = productsOnCart.filter((item) => {
            return (item.id != productId)
        })

        setProductsOnCart(filtroProducts)
        localStorage.setItem('products', JSON.stringify(filtroProducts))
        toast.success('Produto removido do carrinho com sucesso.', {
            position: "top-left",
            autoClose: 900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function removeQuantity(qtd, index) {
        if (productsOnCart[index].quantity === 1) {
            toast.info('No mínimo 1 produto!', {
                position: "top-left",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        productsOnCart[index].quantity = qtd - 1
    }

    function addQuantity(qtd, index) {
        productsOnCart[index].quantity = qtd + 1
    }

    useEffect(() => {
        let totalPrice = 0;
        let qtd = 0;

        productsOnCart.forEach((item, index) => {
            totalPrice += item.price * item.quantity
            qtd += item.quantity
        })
        setTotal(totalPrice.toFixed(2))
        setQtdItems(qtd)
    })



    return (
        <>
            {showCart && (
                <S.Modal>
                    <S.ShopCart>
                        <S.TitleShopCart>
                            <h1>Carrinho de compras</h1>
                            <FaTimes onClick={() => setShowCart(!sidebar)} />
                        </S.TitleShopCart>

                        <S.TitleProducts>
                            <h1>PRODUTO</h1>
                            <h1>SUBTOTAL</h1>
                        </S.TitleProducts>

                        <S.ListProducts>
                            {productsOnCart.map((item, index) => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.title} />
                                    <div className="boxInfoCart">
                                        <h1>{item.title}</h1>
                                        <div className="quantity">
                                            <button type="button" onClick={() => removeQuantity(item.quantity, index)}>-</button>
                                            <input type="text" value={item.quantity} disabled />
                                            <button type="button" onClick={() => addQuantity(item.quantity, index)}>+</button>
                                        </div>
                                    </div>
                                    <span>R${(item.price).toFixed(2)}</span>
                                    <FaTrash onClick={() => deleteProduct(item.id)} />
                                </li>
                            ))}
                        </S.ListProducts>

                        {productsOnCart.length > 0 ? (
                            <S.BottomCart>
                                <S.OurShops>
                                    <p><FaStore /> Nossas lojas</p>
                                    <article>
                                        <span onClick={() => setOptionsCart(!optionsCart)}>VER OPÇÕES <FaAngleDown /></span>
                                        <div className={optionsCart ? 'containerInputs' : 'containerInputsOff'}>
                                            <div className="inputOptions">
                                                <input type="radio" name="option" />
                                                Arturia - Recife <p>R$12,90</p>
                                            </div>
                                            <div className="inputOptions">
                                                <input type="radio" name="option" />
                                                Arturia - São Paulo <p>R$22,90</p>
                                            </div>
                                            <div className="inputOptions">
                                                <input type="radio" name="option" />
                                                Arturia - Minas Gerais <p>R$32,90</p>
                                            </div>
                                        </div>
                                    </article>

                                </S.OurShops>
                                <S.Total>
                                    <h2>Total (sem frete):</h2>
                                    <div className="total">
                                        <h2>R$ {total}</h2>
                                        <p>Ou até 10x de R$ {(total / 10).toFixed(2)}</p>
                                    </div>
                                </S.Total>
                                <S.FinishBuy>
                                    <Link
                                        to="/products"
                                        className="linkToProducts"
                                        onClick={() => setShowCart(false)}>
                                        <a>Ver mais produtos</a>
                                    </Link>
                                    <Link
                                        to="/delivery"
                                        className="linkToPayment"
                                        onClick={() => setShowCart(false)}>
                                        Finalizar compra
                                    </Link>
                                </S.FinishBuy>
                            </S.BottomCart>) : (
                            <S.DontHasProduct>
                                <p>Não há produtos no carrinho.</p>
                            </S.DontHasProduct>
                        )}

                    </S.ShopCart>
                </S.Modal>)}

        </>
    )
}
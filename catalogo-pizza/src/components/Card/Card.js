import React, { useEffect, useState } from "react";
import "./Card.css"

const Card = ({carrinho, produto, updateCarrinho}) => {
    const [selecao, setSelecao] = useState(carrinho.indexOf(produto.id) >= 0)

    const cardSelecao = () => {
        setSelecao(!selecao)
        updateCarrinho(produto.id)
    }
    

    return (
        <div className={selecao ? "Card-Select" : "Card"} onClick={cardSelecao}>
            <img src={produto.src}></img>
            <div className="Infomacao">
                <div className="Nota">
                    <i id="star" className="fa fa-star" aria-hidden="true"></i>
                    <div id="star-info"> 4.8</div>
                </div>
                <div id="pizza">{produto.nome}</div>
                <div id="ingredientes">{produto.ingredientes}</div>
                <div id="preco">
                    <div>R$&nbsp;</div>
                    {produto.promocao ? <div>{(produto.preco-(produto.preco * 0.20)).toFixed(2)}</div>
                    :<div>{produto.preco}</div>}
                    <div>&nbsp;&nbsp;&nbsp;</div>
                    {produto.promocao && <button>20% Off</button>}
                </div>
            </div>
            
        </div>
    )
}

export default Card
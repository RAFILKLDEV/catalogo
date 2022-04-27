import React from "react";
import produtos from "../../constants"

const ChartItem = ({ id }) => {
    const productData = produtos.find(it => it.id === id);

    const moneyMask = (str) => `R$ ${str.toString().replace('.', ',')}`;

    return(
        <div className="chartItem">
            <img src={productData.src} height="100%" />
            <h2>{productData.nome}</h2>

            <div>{moneyMask(productData.preco)}</div>

            <p><small>{productData.ingredientes}</small></p>
        </div>
    )
}

export default ChartItem
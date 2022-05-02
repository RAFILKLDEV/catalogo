import React from "react";
import produtos from "../../constants";

const Checkout = ({id}) => {
    
    const moneyMask = (str) => `R$ ${str.toString().replace('.', ',')}`;
    let total = 0

    id.forEach(element => {
        const productData = produtos.find(it => it.id === element);
        console.log(productData.nome)
        total = total + productData.preco
    });

    console.log(total)

    return(
        <div className="checkoutItem">
            <div>Total</div>
            <div>{id.length}</div>
            <div>{moneyMask(total)}</div>
        </div>
    )
}

export default Checkout
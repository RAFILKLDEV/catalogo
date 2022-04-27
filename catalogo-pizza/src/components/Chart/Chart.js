import React from "react";
import ChartItem from "../ChartItem/CharItem";
import Checkout from "../Checkout/Checkout";
import produtos from "../../constants"

const Chart = ({chartzim}) => {

    const idPizza = () => {

        let background = produtos.find(it => it.id === chartzim).nome



        console.log(background)
    }

    return(
    <div className="chartMenu" onClick={idPizza}>
        <div className="chartContainer">
            <ChartItem/>
            <ChartItem/>
            <ChartItem/>
            <ChartItem/>
            <ChartItem/>
            <div>{produtos[0].id}</div>
            <div>{chartzim}</div>
        </div>
        <div className="checkoutContainer">
            <Checkout/>
        </div>
    </div>
    )
}

export default Chart
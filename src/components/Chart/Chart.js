import React from "react";
import ChartItem from "../ChartItem/CharItem";
import Checkout from "../Checkout/Checkout";

const Chart = ({chartzim}) => {

    return(
    <div className="chartMenu">
        <div className="chartContainer">
            {chartzim.map(it => <ChartItem key={it} id={it}/> )}
        </div>
        <div className="checkoutContainer">
            <Checkout id={chartzim}/>
        </div>
    </div>
    )
}

export default Chart
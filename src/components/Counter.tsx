
import { useState } from "react";

export function Counter(){
    const [counter, setCounter] = useState(0)

    function counterPlus(){
        setCounter(counter + 1) //Set Counter é referente aos valores restantes
    }

    function counterMinus(){
        setCounter(counter - 1)
    }

    return (

        <>
        <h1>{counter}</h1>
        <button onClick={counterPlus}>+</button>
        <button onClick={counterMinus}>-</button>
        </>

    )


}
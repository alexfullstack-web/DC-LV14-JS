import { useState } from "react";

export default function Tabuada() {
    const [tabuada, setTabuada] = useState(2);

   return (
    <>
        <button onClick={() => setTabuada(1)}>1</button>
        <button onClick={() => setTabuada(2)}>2</button>
        <button onClick={() => setTabuada(3)}>3</button>
        <button onClick={() => setTabuada(4)}>4</button>
        <button onClick={() => setTabuada(5)}>5</button>
        <button onClick={() => setTabuada(6)}>6</button>
        <button onClick={() => setTabuada(7)}>7</button>
        <button onClick={() => setTabuada(8)}>8</button>
        <button onClick={() => setTabuada(9)}>9</button>

        <div>
            <h1>tabuada de {tabuada}</h1>
            <ul>
                <li>{tabuada} x 1 = {tabuada * 1}</li>
                <li>{tabuada} x 2 = {tabuada * 2}</li>
                <li>{tabuada} x 3 = {tabuada * 3}</li>
                <li>{tabuada} x 4 = {tabuada * 4}</li>
                <li>{tabuada} x 5 = {tabuada * 5}</li>
                <li>{tabuada} x 6 = {tabuada * 6}</li>
                <li>{tabuada} x 7 = {tabuada * 7}</li>
                <li>{tabuada} x 8 = {tabuada * 8}</li>
                <li>{tabuada} x 9 = {tabuada * 9}</li>
            </ul>
        </div>
    </>
   );
}
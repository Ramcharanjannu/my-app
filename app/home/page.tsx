'use client'
import { useState } from 'react';
import Welcome from "../welcome/page";
import { Apple, Mango, Grapes, Oranges, Banana } from "../welcome/page";

export default function Home() {
    const [message, setmessage] = useState("")
    const [count, setcount] = useState(0)
    function increment() {
        setcount(count + 1)
    }
    function display() {
        setmessage('RAM')
    }

    return (
        <div>
            <Welcome />
            <Apple />
            <Mango name='charan' id={12} />
            <Grapes name='ramcharan' id={19} />
            <Oranges onClick={display} />
            <Banana onClick={increment} />

            <h1>{message}</h1>
            <h1>{count}</h1>


        </div>
    );
}


import React, { Component,useState} from "react";
import "./App.css";

console.log('sss')

export default function App (props){
    const [name,setName] = useState('react11')

    setTimeout(()=>{
        setName('react12')
    },1000)

    return (
        <div className="App">
            <h3>{name}</h3>
        </div>
    )
}

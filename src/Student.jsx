import { useState } from "react";

function Student(){
    const[nom,setNom]= useState("")
    function greet (name){
        setNom(name)
    }

    return (
        <>
        <button onClick={()=>greet("yasser")} className='bg-red-500 text-white hover:bg-gray-300'></button>
        <p> YOKOSO {nom}</p> 
        

        </>
    )
}
export default Student
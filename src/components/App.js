
import React, {useState,useEffect} from "react";

function App(){
    const [dogImage,setDogImage]= useState("")

    const url = "https://dog.ceo/api/breeds/image/random"

    useEffect(()=>{
        fetch(url)
        .then(resp=> resp.json())
        .then(data=>{
            console.log(data.message)
            setDogImage(data.message)
        })
    },[])
    if(dogImage===""){
        return <p>Loading...</p>
    }

    return(
        <div>
            <img src={dogImage} alt="A Random Dog" />
        </div>
    )


}

export default App;

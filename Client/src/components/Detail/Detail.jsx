import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(data);
                
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);


    return (
        <div>
            <h1>Soy el DETAIL</h1>
            <h1> Name: "{character?.name}"</h1>
            <h1> Status: "{character.status && character.status}"</h1>
            <h1> Species: "{character?.species}"</h1>
            <h1> Gender: "{character.gender && character.gender}"</h1>
            <h1> Origins: "{character?.origin?.name && character.origin?.name}"</h1>
            <img src={character?.image} alt=""/>
        </div>
    )
}

export default Detail;
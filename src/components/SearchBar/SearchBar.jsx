import style from "./SearchBar.module.css";
import imageLogo from "../Imagenes/Logo.png";
import { useState } from "react";

function SearchBar({onSearch}) {
  
   const [id,setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <img src={imageLogo} alt="logo rick and morty" className={style.logo} />
         <input className={style.input} onChange={handleChange}  value={id} />
        
         <button className= {style.buton} onClick={()=> {onSearch(id);setId("")}}>Agregar </button>
      </div>
   )
}
export default SearchBar;
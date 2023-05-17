import style from "./card.module.css";
import { Link, useLocation  } from "react-router-dom";
import { addFav, removeFav } from '../../Redux/action';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

   const [isFav, setIsFav] = useState(false);
   const location = useLocation()

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
      setIsFav(!isFav)
   }; 

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {
            (<button onClick={handleFavorite}>{isFav ? '❤️' : '🖤'}</button>)
         }
         <img src={image} className={style.img} alt='' />
         <Link to={`/detail/${id}`} >
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Genero: {gender}</h2>
         <h2>Origen: {origin.name}</h2>
         {
            location.pathname !== "/favorites"
               ? <button className={style.button} onClick={() => { onClose(id) }}>Cerrar</button>
               : null
         }
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card)
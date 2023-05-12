import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
// import characters, { Rick } from './data.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites";

const email = "hola@gmail.com";
const password = "1234abc";

function App() {

   const location = useLocation()
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   const login = (userData) => {
      if (userData.email === email && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(()=>{
      !access && navigate("/")
   },[access])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
   };

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   };


   return (
      <div className='App'>

         {
            location.pathname !== "/"
               ? <Nav onSearch={onSearch} />
               : null
         }

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="/favorites" element={<Favorites/>}/>
         </Routes>

      </div>
   );
}

export default App;


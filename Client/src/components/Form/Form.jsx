
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {

    const [errors, setErrors] = useState({})
    const [userData, setuserData] = useState({
        email: '',
        password: ''
    });

    const handleruserDataChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value 
        }))   
        }

    
    const handlerSubmit = (event) =>{
        event.preventDefault();
        login(userData);

    }

return (
    <div>
        <form onSubmit={handlerSubmit}>
            <h1>Soy el primer Form!!</h1>
            <label htmlFor="email">Email:</label>
            <input value={userData.email} type="text" name="email" onChange={handleruserDataChange} placeholder="hola@gmail.com" autoComplete="off" />
            {errors.email && <p>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password</label>
            <input value={userData.password} type="text" name='password' placeholder="1234abc" onChange={handleruserDataChange} />
            {errors.password && <p>{errors.password}</p>}
            <hr />
            <button type="submit" disabled={!userData.email || !userData.password || errors.email || errors.password} >ENVIAR</button>
        </form>
    </div>
)
;
}
export default Form;

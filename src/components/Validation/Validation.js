const validation = (userData) =>{
    const errors = {};
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "el email ingresado no es valido mi queen"
    }
    if(!userData.email){
        errors.email = "debe ingresar un email"
    }
    if(userData.email.length > 35){
        errors.email="el email debe ser menor a 35 caracteres"
    }

    if (!/.*\d+.*/.test(userData.password)){
        errors.password = "Debe tener por lo menos un número"
    }

    if ( userData.password.length <6 || userData.password.length>10){
        errors.password = "la contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation
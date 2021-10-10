import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from "@material-ui/icons/Facebook";



function signup () {
    return <div className="mainsign">
        
        <section className="form">
            <h4>Registro | P2G Shoes</h4>
            <input className="control" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
            <input className="control" type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido"/>
            <input className="control" type="email" name="contraseña" id="contraseña" placeholder="Ingrese su contraseña"/>
            <input className="control" type="password" name="correo" id="correo" placeholder="Ingrese su correo"/>
            <input className="boton" type="submit" value="Registrarse"/>
            <p><a href="./login.html"> ¿Ya tengo Cuenta?</a></p>

            <div className="linklogin">
                <button className="btnfb">
                    <i className="fab fa-facebook-f"></i>
                    <a className="btn-fb" href="https://web.facebook.com/login.php?_rdc=1&_rdr">Facebook</a>
                </button>
                <button className="btng">
                    <i className="fas fa-envelope"></i> 
                    <a className="btn-correo" href="https://mail.google.com/mail?hl=es">Gmail</a>
                </button>
            </div>
        </section>
        
    </div>
}

export default signup

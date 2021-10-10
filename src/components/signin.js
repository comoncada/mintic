import React from 'react'
import '../styles/signin.css'

function signin() {
    return (
        <div className="container">
        <div className="login-container">
            <div className="login">
                <h2>Iniciar Sesión</h2>
                <form action="">
                    <input type="text" placeholder="Usuario" className="Nombre"/>
                    <input type="password" placeholder="Contraseña" className="pass"/>
                     <p><label class="cb"> Entrar como Vendedor
                        <input className="checkmark" type="checkbox" checked="checked"/>
                      </label>
                    </p>
                    <input type="submit" className="submit" value="Login"/>
                </form>
            </div>
            <div className="link-login">
                <h2> Iniciar con: </h2>
                <div className="login-items">
                    <button className="fb">
                         <i className="fab fa-facebook-f"></i>
                         <a className="btn-fb" href="https://web.facebook.com/login.php?_rdc=1&_rdr">Facebook</a>
                    </button>
                    <button className="correo">
                        <i className="fas fa-envelope"></i> 
                        <a className="btn-correo" href="https://mail.google.com/mail?hl=es">Gmail</a>
                    </button>
                </div>
            </div>
        </div>
    </div>

    )
}

export default signin

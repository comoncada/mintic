import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../fotos/shoe1.jpg";
import '../styles/Home.css'
import bild from '../fotos/shoes3.png';


function Home() {
    return <div className="home">
        <div className="headerContainer" /*style={{backgroundImage: `url(${BannerImage})`}}*/>
            <h1>Nuevas Marcas</h1>
            <p> "Estilo en Cada paso"</p>
            <Link to="/products">
            <button>Comprar ahora</button>
            </Link>
        </div>
        <div className="bild">
            <img src={bild} />
        </div>
   
    </div>;
    
}

export default Home;

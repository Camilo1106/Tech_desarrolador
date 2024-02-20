import React, { useState } from 'react';
import '../estilos/Perfil.css';

function Perfil(props) {
    const [contadorInstagram, setContadorInstagram] = useState(0);
    const [contadorFacebook, setContadorFacebook] = useState(0);
    const [contadorTwitter, setContadorTwitter] = useState(0);

    const handleClickInstagram = () => {
        setContadorInstagram(contadorInstagram + 1);
        window.open(props.Instagram, '_blank');
    };

    const handleClickFacebook = () => {
        setContadorFacebook(contadorFacebook + 1);
        window.open(props.Facebook, '_blank');
    };

    const handleClickTwitter = () => {
        setContadorTwitter(contadorTwitter + 1);
        window.open(props.twitter, '_blank');
    };

    return (
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
                src={require(`../imagenes/${props.imagen}.png`)}
                alt='imagen' />
            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-perfil'>
                    {props.carrera} en <strong>{props.equipo}</strong>
                </p>
                <p className='texto-perfil'>"{props.perfil}" </p>
            </div>
            {/* Botones para seguir en redes sociales */}
            <div className='contenedor-botones'>
            <button onClick={handleClickInstagram}>
                Seguir en Instagram (Has hecho clic {contadorInstagram} veces)
            </button>
            <button onClick={handleClickFacebook}>
                Seguir en Facebook(Has hecho clic {contadorFacebook} veces)
            </button>
            <button onClick={handleClickTwitter}>
                Seguir en Twitter (Has hecho clic {contadorTwitter} veces)
            </button>
            </div>
        </div>
    );
}

export default Perfil;

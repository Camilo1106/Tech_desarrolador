import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';

function App() {
  // Declarar un nuevo estado de contador
  // const [contador, setContador]= useState(0);
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Los mejores futbolistas del mundo</h1>
      <Perfil 
        nombre='Cristiano Ronaldo'
        pais='Portugal'
        imagen='cristiano'
        carrera='Futbolista Profesional'
        equipo='Al-Nassr Football Club'
        perfil='Es señalado como uno de los mejores futbolistas del mundo, con su gran cantidad de titulos y desempeñando una carrera impecable, lider y goleador'
        Instagram='https://www.instagram.com/cristiano/'
        Facebook='https://www.facebook.com/Cristiano/?locale=es_LA'
        twitter='https://twitter.com/cristiano?lang=es'      
        />
         <Perfil 
       nombre='Leonel Messi'
       pais='Argentina'
       imagen='leonel'
       carrera='Futbolista Profesional'
       equipo='Inter de Miami'
       perfil='Es de los mejores lideres que podras encontrar en la cancha, catalogado como el astro argentino y siendo el mas ganador de balones de oro'
       Instagram='https://www.instagram.com/leomessi/'
       Facebook='https://www.facebook.com/leomessi/?locale=es_LA'
       twitter='https://messi.com/'
        />
        <Perfil 
       nombre='Kylian Mbappe'
       pais='Francia'
       imagen='mbappe'
       carrera='Futbolista Profesional'
       equipo='Paris Saint Germain'
       perfil='Es una de las promesas del futbol actual, con gran potencial y siendo el proximo mejor jugador del mundo, querido por todos'
       Instagram='https://www.instagram.com/k.mbappe/'
       Facebook='https://www.facebook.com/kylianmbappeofficiel/?locale=es_LA'
       twitter='https://twitter.com/KMbappe'
        />
       {/* Agregamos un contador y un botón para incrementarlo */}
      <Contador />
     </div>
    </div>

  );
}

export default App;
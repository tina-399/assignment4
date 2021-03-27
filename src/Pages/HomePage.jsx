import "../styles/HomePage.css"
import React from 'react'
import {useState} from 'react';

const HomePage = () => {
    const [user,setUser]=useState()
    return (
      <div className="home">
        <h1>Female Empowerment Initiative(FEEM)</h1>
        <h1> A prosperous and a promising future <br/>for Ghana devoid of poverty lies
          in <br/>the hands of a well educated and <br/> informed woman.
        </h1>
        <h1>FEEM!</h1>
        <h1>Catch them young and they <br/> shall be successful forever</h1>
      </div>
    );
}

export default HomePage;

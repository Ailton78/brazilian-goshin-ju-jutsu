import React from "react";
import "./style.css";

export default function Topo() {
  return (
    <header>
      <div className="largura-limitada">
        <a href="#sobre">
          <figure>
            <img src="/SVGs/logo.png"></img>
            <figcaption>BRAZILIAN GOSHIN JU JUTSU</figcaption>
          </figure>
        </a>
        <nav className="topo-links">
          <a href="#sobre">Sobre</a>
          <a href="#">Nossa_equipe</a>
          <a href="#">Contatos</a>
        </nav>
      </div>
    </header>
  );
}

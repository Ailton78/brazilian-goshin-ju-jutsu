import React from "react";
import Topo from "../Topo";
import "./style.css";

export default function Conteudo() {
  return (
    <main>
      <section className="container-baner">
        <div className="conteudo-baner largura-limitada">
          <h1>
            Treinamento de<br></br> Defesa pessoal e <br></br>Combate Urbano
          </h1>
          <p>06 e 07 de Agosto </p>
        </div>
      </section>

      <section className="container-conteudo">
        <div id="sobre" className="box-conteudo largura-limitada">
          <h2 className="titulo-conteudo">
            SISTEMA DE DEFESA PESSOAL<br></br> BRAZILIAN GOSHIN JU JUTSU
            T.A.I.S.O
          </h2>

          <p className="paragrafo-1">
            O nome BRASILIAN GOSHIN JU JUTSU T.A.I.S.O trata-se de uma expressão
            que significa CIÊNCIA SUAVE DA DEFESA PESSOAL URBANA MODERNA
            BRASILEIRA.
          </p>
          <ul className="lista-conteudo">
            <li>GO: cinco, duro, guerra e defesa;</li>
            <li>SHIN: Alternativa, Possibilidade, Pessoal e Próprio;</li>
            <li>JU: Suavidade</li>
            <li>JUTSU: Arte marcial, Técnica, Estudos, Ciência;</li>
            <li>T: Treinamento;</li>
            <li>A: Aperfeiçoamento;</li>
            <li>I: Inteligência;</li>
            <li>S: Sobrevivencia e Segurança;</li>
            <li>O: Operacional;</li>
            <li>BRAZILIAN: Método/Sistema voltado a realidade Brasileira.</li>
          </ul>

          <p className="paragrafo-2">
            Desenvolvido como um Sistema de Defesa Pessoal em 2010 a partir da
            experiência de 32 anos de práticas ininterruptas e pesquisas, em
            diversas Artes Marciais, dos Grão-Mestres Agner Jhan Costa Favacho e
            Sandro Nuayed Rocha. Figura 1. O BGJJTAISO é um Sistema Didático de
            Treinamento de Defesa Pessoal Moderna voltado para a formação em
            defesa pessoal e segurança em geral visando à realidade brasileira.
          </p>
          <img src="/SVGs/logo.png"></img>
        </div>
      </section>

      <section className="icones-cofederacao largura-limitada">
        <img src="./SVGs/logo 3.svg"></img>
        <img src="./SVGs/fikman 1.svg"></img>
        <img src="./SVGs/actKan 1.svg"></img>
        <img src="./SVGs/Background copy.svg"></img>
        <img src="./SVGs/combate-urbano 1.svg"></img>
        <img src="./SVGs/godhin 1.svg"></img>
        <img src="./SVGs/imobilizacaoes-taticas 1.svg"></img>
        <img src="./SVGs/internaciona-combat-organ 1.svg"></img>
        <img src="./SVGs/logo 3.svg"></img>
        <img src="./SVGs/logo-federacao-paraense 1.svg"></img>
      </section>

      <section></section>
    </main>
  );
}

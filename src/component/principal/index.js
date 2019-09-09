import React, { Component } from "react";
import "./style.css";

class Probare extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">
          <span className="subtitle-1">
            <b>Ouvidoria do Programa de Auto-Regulamentação</b>
          </span>
          <span className="subtitle-2">
            <b>NOTICIA DE VIOLAÇÃO AO CÓDIGO DE ÉTICA</b>
          </span>
        </div>
        <div className="texto">
          <p className="paragrafo-1">
            O Probare tem como objetivo promover a conduta ética de contatos com
            o consumido, através do Código de Ética do Probare que define aquilo
            que as empresas aderentes a esse programa se comprometem a fazer ou
            a não fazer na relação com o consumidor.
          </p>
          <p className="paragrafo-1">
            Já a Ouvidoria do Probare desempenha o papel de conferir ao cidadão
            a possibilidade denunciar violação a esse Código de Ética. Conheça o
            código de ética, clicando aqui Veja ainda um vídeo que explica as
            principais regras do Código de Ética do Probare clicando aqui
          </p>
          <p className="paragrafo-1">
            As reclamações que chegarem ao conhecimento da Ouvidoria serão
            consolidadas e utilizadas no âmbito do processo de renovação do Selo
            de Étifca das empresas aderentes aos programa, assim como poderão
            ser encaminhadas para o Poder Público para eventuais providências.
          </p>
        </div>
        <div>
        <span className="border-one"></span>
        </div>
      </div>
    );
  }
}

export default Probare;

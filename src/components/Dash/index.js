import React from "react";
import { Container, Aluno, Cursos, Empresas } from "./styles";
import { cursos, empresas } from "./mock";

export default function Dash() {
  return (
    <Container>
      <Aluno>
        <h1>
          Bem vindo, aluno <span>Fulano</span> !!
        </h1>
        <h2>
          Você está na trilha <span>Frontend</span>
        </h2>
      </Aluno>
      <h1>Caminhos</h1>
      <Cursos>
        {cursos.map(cursos => (
          <div key={cursos.nome}>
            <img src={cursos.img} alt={cursos.nome} />
            <div>
              <h1>{cursos.nome}</h1>
              <p>
                Linguagem: <span>{cursos.linguagem}</span>
              </p>
              Tags:
              <div>
                {cursos.tags.map(item => (
                  <label key={item}>{item}</label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Cursos>
      <h1>Destinos</h1>
      <Empresas>
        {empresas.map(empresas => (
          <h1 key={empresas.nome}>{empresas.nome}</h1>
        ))}
      </Empresas>
    </Container>
  );
}

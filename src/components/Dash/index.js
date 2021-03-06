import React from "react";
import { Container, Aluno, Cursos, Empresas } from "./styles";
import { cursos, empresas } from "./mock";

export default function Dash({ location }) {
  return (
    <Container>
      <Aluno>
        <h1>
          Bem vindo, aluno <span>{location.state.name}</span>!
        </h1>
        <h2>
          Você está na trilha <span>
            {location.state.back > location.state.front ? 'Backend' : 'Frontend'}
          </span>
        </h2>
      </Aluno>
      <h1>Trilhas que te levam a sua formação...</h1>
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
              {cursos.tags.map(item => (
                <label key={item} className={item}>
                  {item}
                </label>
              ))}
            </div>
          </div>
        ))}
      </Cursos>
      <h1>...chegada da Trilha, e esses caras aí vão te contratar!!</h1>
      <Empresas>
        {empresas.map(empresas => (
          <div key={empresas.nome}>
            <div>
              <h1>{empresas.nome}</h1>
              Requisitos:
              <div>
                {empresas.requisitos.map(item => (
                  <label key={item} className={item}>
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Empresas>
    </Container>
  );
}

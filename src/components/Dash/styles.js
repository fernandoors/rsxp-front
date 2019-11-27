import styled from "styled-components";
import { colors, size } from "../../assets/references";

export const Container = styled.div`
  padding: 20px 40px;
  color: ${colors.black};
  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 0 0 5px 0;
    font-size: 16px;
    color: #444;
  }
`;
export const Aluno = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    color: blue;
    span {
      font-size: 20px;
      color: #666;
    }
  }
  h2 {
    font-size: 18px;
    color: blue;
    span {
      font-size: 20px;
      color: orange;
    }
  }
`;
export const Cursos = styled.div`
  display: flex;
  border: 1px solid blue;
  border-radius: 6px;
  padding 20px;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    width: 300px;

    div {
      display: flex;
      flex-direction: column;
      padding: 10px;
      font-size: 14px;

      div {
        display: flex;
        flex-wrap: wrap;

        label {
          border: 1px solid #aaa;
          border-radius: 4px;
          margin: 4px 0px;
          padding: 4px;
          width: fit-content;
          background: #eee;
        }
      }
    }

    img {
      width: 100px;
      border-radius: 10px;
    }
    h1 {
      font-size: 20px;
      margin: 0 0 5px 0;
      padding: 0;
    }
    p {
      margin: 0 0 5px 0;
      padding: 0;
      font-size: 14px;
      span {
        margin: 0;
        padding: 0;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;
export const Empresas = styled.div`
  display: flex;
  border: 1px solid blue;
  border-radius: 6px;
  padding 20px;
`;

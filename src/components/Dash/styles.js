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
  align-items: center;
  h1 {
    font-size: 18px;
    color: blue;
    margin: 0;
    margin-bottom: 20px;
    span {
      font-size: 20px;
      color: #666;
    }
  }
  h2 {
    font-size: 18px;
    color: blue;
    margin: 0;
    margin-bottom: 20px;
    span {
      font-size: 20px;
      color: orange;
    }
  }
`;
export const Cursos = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid blue;
  border-radius: 6px;
  padding 20px;
  margin-bottom: 20px;
  height: 205px;
  background: #eee;

  div {
    flex-direction: column;
    width: 300px;
    height: 205px;
    margin-right: 15px;
    background: #fff;
    border: 1px solid #aaa;
    border-radius: 4px;

    img {
      width: 35%;
      height: 180px;
      object-fit: contain;
      object-position: top;
      padding: 10px;
    }

    div {
      margin-top: -194px;
      margin-left: 128px;
      width: 140px;
      height: 145px;
      background: #fff;
      border: none;

      label {
        border: 1px solid #aaa;
        border-radius: 4px;
        margin: 4px -10px;
        padding: 4px;
        width: fit-content;
        background: #eee;
        display: flex;
        margin: 5px 0;
      }

      label.Node {
        background: #95C64B;
      }

      label.React {
        background: #48C3E3;
      }

      label.React-Native {
        background: #aaa
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

  }
`;
export const Empresas = styled.div`
  display: flex;
  border: 1px solid blue;
  border-radius: 6px;
  padding 20px;
  margin-bottom: 20px;
  background: #eee;

  div {
    display: flex;
    flex-direction: row;
    width: 300px;

    div {
      display: flex;
      flex-direction: column;
      padding: 0;
      font-size: 14px;

      div {
        display: flex;
        flex-direction: row;

        label {
          border: 1px solid #aaa;
          border-radius: 4px;
          margin: 4px 6px 0 0;
          padding: 4px;
          width: fit-content;
          background: #fff;
        }
        label.Node {
          background: #95C64B;
        }
  
        label.React {
          background: #48C3E3;
        }
  
        label.React-Native {
          background: #aaa
        }
      }
    }

    h1 {
      font-size: 20px;
      margin: 0 0 5px 0;
      padding: 0;
    }
  }
`;

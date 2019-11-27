import styled from 'styled-components';
import { colors } from "../../assets/references";

export const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  border-top: 1px solid;
  color: ${colors.black};
  background: ${colors.white};
  display: flex;
  justify-content: center;
  a, a:active {
    color: ${colors.black};
    font-size: 18px;
    align-self: center;
  }
  label{
    align-self: center;
    font-size: 16px;
    margin-right: 10px;
  }
`
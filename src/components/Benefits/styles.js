import styled, { keyframes } from 'styled-components';
import { colors } from '../../assets/references';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const outBox = keyframes`
  from {
    background: black;
  }
  to {
    background: white;
  }
`
export const Box = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  width: 80px;
  height: 80px;
  border: 5px solid ${colors.black};
  border-radius: 5px;
  background: ${colors.black};
  color: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all ease 0.5s;
  animation: ${outBox} 2000ms;
`;


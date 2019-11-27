import styled, { keyframes } from 'styled-components';
import { colors } from '../../assets/references';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const outBox = keyframes`
  0% {
    background: rgba(2,2,2,0.1);
  }
  50% {
    background: rgba(100,100,100,0.1);
  }
  100% {
    background: ${colors.white};
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
  label {
    display: none;
  }
  
  &:hover{
    transition: all 1s;
    animation: ${outBox} 5000ms;
    label {
      display: block;
    }
  }
`;


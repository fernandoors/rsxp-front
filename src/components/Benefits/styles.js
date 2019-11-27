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
    opacity: 0
  }
  to {
    opacity: 1;
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
    animation: ${outBox} 2000ms;
    label {
      display: block;
    }
  }
`;


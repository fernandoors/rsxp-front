import styled from 'styled-components';
import { colors, size } from "../../assets/references";

export const Container = styled.div`
  padding: 10px;
  color: ${colors.black};
  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
  }
`
export const Title = styled.h2`
  color: ${colors.blue};
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`
export const Col = styled.div`
  width: 50%;
  margin-bottom: 20px;
  label {
    font-size: 22px;
  }
`
export const Box = styled.div`
  border: 1px solid;
  border-radius: 20px;
  padding: 20px;
  p {
    font-size: 18px;
  }
`
export const Option = styled.div`
  cursor: pointer;
  border: 1px solid;
  height: 15px;
  padding: 20px;
  border-radius: 10px;
  &:hover{
    background: ${colors.blue};
    color: ${colors.white};
  }
`
export const Input = styled.input`
  margin-left: 20px;
  border: none;
  border-bottom: 1px solid;
  width: 250px;
  
`
export const Button = styled.button`
  cursor: pointer;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  background: ${colors.white};
  font-size: 18px;
  &:hover{
    background: ${colors.blue};
    color: ${colors.white};
  }
`
import styled from 'styled-components';
import { colors, size } from "../../assets/references";

export const Container = styled.div`
  padding: 10px;
  padding-bottom: 40px;
  color: ${colors.black};
  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
  }
`
export const Welcome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Title = styled.h3`
  color: ${colors.blue};
  font-size: 24px;
`
export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  width: 200px;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  background: ${colors.white};
  color: ${colors.black};
  text-decoration: initial;
  font-size: 16px;
  color: ${colors.blue};
  &:hover{
    background: ${colors.blue};
    color: ${colors.white};
  }
`
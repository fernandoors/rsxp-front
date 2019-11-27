import styled from 'styled-components';
import { size } from '../../assets/references';

export const Container = styled.div`
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`;
export const Col = styled.div`
  width: 400px;
  iframe{
    height: 280px;
    width: 100%;
  }
  h3 {
    margin-top: 13px;
  }
  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 400px;
  height: 40px;
  font-size: 25px;
  svg {
    cursor: pointer;
  }
  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;



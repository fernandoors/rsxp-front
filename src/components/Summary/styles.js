import styled from 'styled-components';
import { colors, size } from '../../assets/references';

export const Faq = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 200px;
  justify-content: space-around;
  position: fixed;
  left: 10px;
  font-size: 16px;
  @media (max-width: ${size.tablet}) {
    flex-direction: row;

  }
`

export const Icon = styled.div`
  margin: 0;
  padding: 0;
  width: auto;
  display: flex;
  color: ${({ color }) => color === 'true' ? colors.blue : colors.black};
  cursor: pointer;
  label{
    cursor: pointer;
    margin-left: 5px;
    display: none;
  }
  &:hover {
    width: 150px;
    background: rgba(255,255,255, 0.9);
    label{
      display: inherit;
    }
  }
`
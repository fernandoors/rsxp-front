import styled from 'styled-components';
import { colors, size } from "../../assets/references";

export const Head = styled.nav`
  width: 100vw;
  height: 40px;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  color: ${colors.black};
  a, a:active {
    text-decoration: initial;
    color: ${colors.black};
    margin-bottom: 10px;
  }
  @media (max-width: ${size.tablet}) {
    a > label {
      display: none;
    }
  }
  label {
    font-size: 38px
  }
`
export const Links = styled.div`
  background: ${colors.white};
  color: ${colors.black};
  display: flex;
  margin-right: 10px;
  a {
    padding: 3px;
    width: 50px;
    margin-right: 10px;
    color: ${colors.black};
    text-align: center;
    text-decoration: initial;
    align-self: center;
  }
  a:hover, a:active {
    color: ${colors.white};
    background: ${colors.blue};
    border-radius: 20px;
  }
`
export const Img = styled.img`
  width: auto;
  height: 30px;
  margin: 5px 0 0 5px ;
`

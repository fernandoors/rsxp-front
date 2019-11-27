import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Head, Img, Logo } from './styles'
import logo from '../../assets/img/logo.jpg'

function Header() {
  return (
    <Head>
      <Logo>
        <Link to='/'>
          <Img src={logo} alt='logo' />
          <label>Black Box Open</label>
        </Link>
      </Logo>
    </Head>
  )
}

export default withRouter(Header)
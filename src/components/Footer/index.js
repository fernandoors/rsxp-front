import React from 'react'
import { Foot } from './styles'
import { FaGithub, FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <Foot>
      <label>
      <FaRegCopyright />
      </label>
      <a href='https://github.com/fernandoors/get-docker' target='/' >
        <FaGithub />
      </a>
    </Foot>
  )
}
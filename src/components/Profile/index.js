import React, { useState } from 'react'
import { Container, Title, Row, Col, Input, Option, Box, Button } from './styles'
import { question } from '../../assets/Rsxp/question'
import { Link } from 'react-router-dom'

export default function Profile() {
  const [name, setName] = useState('')
  const [back, setBack] = useState(0)
  const [front, setFront] = useState(0)
  const [questionIndex, setDocIndex] = useState(0)

  function handleSetName({ target }) {
    setName(target.value)
  }
  function handleSetBack() {
    setBack(back + 1)
    setDocIndex(questionIndex + 1)
  }
  function handleSetFront() {
    setFront(front + 1)
    setDocIndex(questionIndex + 1)
  }
  return (
    <Container>
      <Title>Criar Profile</Title>

      <Row>
        <Col>
          <label>Nome:</label>
          <Input value={name} onChange={handleSetName}></Input>
        </Col>
      </Row>
      {questionIndex < question.length ?
        <Box>
          <p>{question[questionIndex].question}</p>
          <Row>
            <Option onClick={handleSetBack}>{question[questionIndex].op1}</Option>
            <Option onClick={handleSetFront}>{question[questionIndex].op2}</Option>
          </Row>
        </Box>
        : <Box>
          <p>Obrigado por participar</p>
          <Row>
            {name
              ?
              <Link to={{ pathname: '/dash', state: { name, back, front } }} >
                <Button>Avaliar</Button>
              </Link>
              : <p>Preencha o seu nome</p>
            }
          </Row>
        </Box>
      }

    </Container>
  )
}
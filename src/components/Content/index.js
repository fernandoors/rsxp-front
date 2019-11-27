import React, { useState } from 'react';

import { Container, Col, Row, Control } from './styles';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { data } from '../../assets/Rsxp/data';

export default function Content({ type }) {
  const [docIndex, setDocIndex] = useState(0)
  function increaseIndex() {
    if (data.length - 1 === docIndex)
      return setDocIndex(0)
    setDocIndex(docIndex + 1)
  }
  function decreaseIndex() {
    if (docIndex === 0)
      return setDocIndex(data.length - 1)
    setDocIndex(docIndex - 1)
  }
  return (
    <Container>
      <Row>
        <Col>
          <h3>{data[docIndex].person}</h3>
          <label>
            {data[docIndex].text}
          </label>
        </Col>
        <Col>
          <iframe title={`view`} width="380" height="315" src={data[docIndex][type]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Col>
      </Row>
      <Row>
        <Control>
          <FaAngleLeft onClick={decreaseIndex} />
          <FaAngleRight onClick={increaseIndex} />
        </Control>
      </Row>
    </Container>
  );
}

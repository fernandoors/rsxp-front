import React from 'react';

// import { Container } from './styles';

export default function Media({ index }) {
  return (
     index === 0 ? <iframe title={`view`} width="380" height="315" src={'https://www.youtube.com/watch?v=XSO3CNS_-Io'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:
     index === 0 ? <iframe title={`view`} width="380" height="315" src={media} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:
     index === 0 ? <iframe title={`view`} width="380" height="315" src={media} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:
     index === 0 ? <iframe title={`view`} width="380" height="315" src={media} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:
     <iframe title={`view`} width="380" height="315" src={media} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  );
}

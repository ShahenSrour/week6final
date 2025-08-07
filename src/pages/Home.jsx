import React from 'react'
import Landing from '../Landing.jsx';
import Results from '../Results.jsx';

export default function Home({ cat }) {
  return (
    <>
      <Landing />
      <Results cat={cat} />
    </>
  )
}

import React, { useState, useEffect } from 'react'

// Middlewares
import FormatBytes from '../../middleware/FormatBytes'

// Types
import IAboutFile from './type'

// Styles
import { Container } from './styles'

const AboutFile: React.FC<IAboutFile> = ({ name, size }) => {
  const [ receives, setReceives ] = useState<string>('')

  useEffect(() => {
    setReceives(FormatBytes(size, 2))
  }, [ size ])

  return (
    <Container >
      <span>
        {name}
      </span>
      <span>
        {receives}
      </span>
    </Container >
  )
}
export default AboutFile

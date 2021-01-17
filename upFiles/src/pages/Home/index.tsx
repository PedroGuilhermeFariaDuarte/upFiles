import React from 'react'

// Components
import DropZone from '../../components/DropZone'
import Preview from '../../components/Preview'

// Context
import WrapPreviewContext from '../../context/Preview'

// Styles
import { Container, Content, LogoContainer } from './styles'

const Home: React.FC = () => (
  <Container>
    <Content>
      <LogoContainer>
        upFiles
      </LogoContainer>
      <WrapPreviewContext>
        <DropZone />
        <Preview />
      </WrapPreviewContext>
    </Content>
  </Container>
)

export default Home

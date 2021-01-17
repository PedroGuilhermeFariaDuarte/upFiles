// eslint-disable-next-line no-use-before-define
import React from 'react'

// Routers
import Router from './routers/Home'

// Styles
import GlobalStyles from './styles/global'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router />
  </>
)

export default App

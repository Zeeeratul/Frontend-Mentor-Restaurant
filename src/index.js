/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const theme = {
  colors: {
    primary: {
      white: '#FFFFFF',
      black: '#000000',
      beaver: '#9e7f66',
      gray: '#111111'
    },
    secondary: {
      mirage: '#17192b',
      clay: '#242b37',
      gray: '#5c6779',
    },
    error: '#B54949'

  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
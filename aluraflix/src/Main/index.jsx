import React from 'react'
import styled from 'styled-components'

const MainStyle = styled.main`
    background-color: black;
`

const Main = ({children}) => {
  return (
    <MainStyle>
      {children}
    </MainStyle>
  )
}

export default Main

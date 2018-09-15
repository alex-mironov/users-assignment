import React from 'react'
import styled from 'styled-components'

const ColumnContainer = styled.div`
  padding: 32px 8px;
`

const Title = styled.h4`
  fontSize: 18;
  lineHeight: 22;
  color: #2d2926;
  font-weight: bold;
`

const Column = ({ children, title }) => (
  <ColumnContainer>
    <Title>
      {title}
    </Title>

    {children}
  </ColumnContainer>
)

export default Column

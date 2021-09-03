import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  margin-top: .5rem;

  &.displayNone {
    display: none;
  }
`

export const Span = styled.span `
  margin-left: .7rem;
  color: #f00;
  
  &.fieldEmptyState {
    display: none;
  } 

`
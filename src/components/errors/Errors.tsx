import { ErrorsProps } from './types/types'
import { BiX } from 'react-icons/all'
import { useState } from 'react'
import * as S from './styles'

export function Errors({ text, isDisplaying = false, isFieldOnBlur = false }: ErrorsProps) {

  const [isFieldEmptyState, setFieldEmptyState] = useState(false)
  
  const handleFocusField = (isFieldEmpty: boolean) => {
    if(isFieldEmpty) {
      setFieldEmptyState(true)
    }else{
      setFieldEmptyState(false)
    }
  }
  
  return (
    <>
      <S.Container className={`${isDisplaying ? 'displayNone': ''}`}>
        <S.Span 
          className={`${isFieldEmptyState && 'fieldEmptyState'}`} 
          onBlur={() => handleFocusField(isFieldOnBlur)}
        >
          { text }
        </S.Span>
        <BiX size={23.3} color='#f00' />
      </S.Container>
    </>
  )
}
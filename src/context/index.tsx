import { createContext, ReactNode } from 'react'
import { useState } from 'react';

type ContextsTypes = {
  showError: () => void
  isDisplayingError: boolean
  errors: Record<string, Object>
}

export const Context = createContext({} as ContextsTypes)

type ProviderProps = {
  children: ReactNode
}

export const ContextProvider = ({ children }: ProviderProps) => {
  const [isDisplayingError, setIsDisplayingError] = useState(false)
  
  const errors = {
    email: 'Você deve inserir seu e-mail.',
    confirmEmail: 'Você deve confirmar seu e-mail.',
    password: 'Você precisa inserir uma senha.',
    name: 'Insira um nome para seu perfil.',
    day: 'Insira um dia válido para o mês.',
    born: 'Selecione o mês de nascimento.',
    year: 'Insira um ano válido.',
  }
  
  const showError = () => {
    if(isDisplayingError) {
      setIsDisplayingError(true)
    }
  }
  
  return(
    <Context.Provider value={{
      isDisplayingError,
      showError,
      errors
    }}>
      { children }
    </Context.Provider>
  )
}
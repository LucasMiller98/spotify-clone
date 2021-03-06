import { useContext } from 'react'
import { Context } from '../index'

export const useContextAPI = () => {
  return useContext(Context)
}
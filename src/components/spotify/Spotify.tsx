import { FaSpotify } from 'react-icons/fa'
import { SpotifyProps } from './types/types'
import * as S from './styles'

export function Spotify({ spotify, color }: SpotifyProps) {
  return(
    <S.Title>
      <FaSpotify size={50} color={color} />
            
      <S.Span style={{color: color}}>{ spotify }</S.Span>
    </S.Title>
  )
}
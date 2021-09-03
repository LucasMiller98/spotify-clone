import { Spotify } from '../../components/spotify/Spotify'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/all'
import { Button } from '../../components/button/Button'

export function SpotifyFirstPage() {
  return(
    <>
      <S.Page>
        <S.Container>
          <S.Header>
            <Spotify 
              spotify='Spotify'
              color='#f1f1f1'
            />

            <S.Navigate>
              <Link to='#'>Premium</Link> {/* Premium */}
              <Link to='#'>Suporte</Link> {/* Suporte */}
              <Link to='#'>Baixar</Link> {/* Baixar */}

              <S.Separator />
              
              <Link to='/br/signup/'>Inscrever-se</Link> {/* Inscrever-se */}
              <Link to='#'>Entrar</Link> {/* Entrar */}
            </S.Navigate>
          </S.Header>

          <S.ContainerContent>
            <S.ListenTitle>Escutar muda tudo</S.ListenTitle>
            <S.Paragraph>
              Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
            </S.Paragraph>

            <Button 
              type='button'
              onClick={() => {}}
              isBlueColor={false}
              isGreenDarkLogin={false}
              isGreenDarkRegister={false}
            >
              Baixe o spotify free
            </Button>
          </S.ContainerContent>
        </S.Container>
        <S.Footer>
          <S.Nav>
            <S.SpotifySection>
              <S.ContainerSpotify>
                <Spotify 
                  spotify='Spotify'
                  color='#f1f1f1'
                />
              </S.ContainerSpotify>
            </S.SpotifySection>

            <S.Company>
              <S.FooterTitles>EMPRESA</S.FooterTitles>

              <Link to='#' className='link-container-spotify'>Sobre</Link>
              <Link to='#' className='link-container-spotify'>Empregos</Link>
              <Link to='#' className='link-container-spotify'>For the Record</Link>
            </S.Company>

            <S.Communitys>
              <S.FooterTitles>COMUNIDADES</S.FooterTitles>
              
              <Link to='#' className='link-container-spotify'>Para Artistas</Link>
              <Link to='#' className='link-container-spotify'>Desenvolvedores</Link>
              <Link to='#' className='link-container-spotify'>Publicidade</Link>
              <Link to='#' className='link-container-spotify'>Investidores</Link>
              <Link to='#' className='link-container-spotify'>Fornecedores</Link>
            </S.Communitys>

            <S.UtelsLinks>
              <S.FooterTitles>LINKS ÚTEIS</S.FooterTitles>

              <Link to='#' className='link-container-spotify'>Suporte</Link>
              <Link to='#' className='link-container-spotify'>Player da Web</Link>
              <Link to='#' className='link-container-spotify'>Aplicativo móvel grátis</Link>
            </S.UtelsLinks>

            <S.ContainerSocialNetwork>
              <Link to='#' className='link-social-network'>
                <FaInstagram size={35} />
              </Link>
              <Link to='#' className='link-social-network'>
                <FaTwitter size={35} />
              </Link>
              <Link to='#' className='link-social-network'>
                <FaFacebookF size={35} />
              </Link>
            </S.ContainerSocialNetwork>
          </S.Nav>
        </S.Footer>
      </S.Page>
    </>
  )
}
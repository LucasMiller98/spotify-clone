import styled from 'styled-components'

export const Page = styled.div `
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div `
  background-color: #2941ab;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
`

export const Header = styled.header `
  position: absolute;
  top: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f1f1f1;
  padding: 0 5rem;
  height: 14%;
  width: 100%;
`

export const ListenTitle = styled.h1 `
  color: #1ed760;
  font-size: 10rem;
  margin-bottom: 1rem;
  margin-top: 6rem;
`

export const ContainerContent = styled.div `
  width: 80vw;
  text-align: center;
  margin-bottom: 5rem;
`

export const Navigate = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  
  a {
    color: #f1f1f1;
    text-decoration: none;
    font-size: 16.1px;
    font-weight: 700;
    transition: all ease .1s;

    &:hover {
      color: #1ed760;
    }
  }
`

export const Paragraph = styled.p `
  color: #1ed760;
  font-size: 1.4rem;
`

export const Separator = styled.div `
  height: 3vh;
  border-left: 2px solid #f1f1f1;
`

export const Footer = styled.footer `
  background: #000;
  width: 100%;
  height: 89vh;
  gap: 1rem;
  padding-top: 4.2rem;
  display: flex;
  justify-content: center;
`

export const Nav = styled.nav `
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  padding-top: 1.7rem;
  transition: all ease .2s;

  .link-container-spotify {
    text-decoration: none;
    color: #f1f1f1;
    font-size: 17px;
  }

  a:hover {
    color: #1ed760;
  }
`

export const Company = styled.section `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  height: 100%;
`

export const FooterTitles = styled.h5 `
  color: #919496;
`

export const Communitys = styled.section `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  height: 100%;
`

export const UtelsLinks = styled.section `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  width: 100%;
  height: 100%;
`

export const ContainerSocialNetwork = styled.div `
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2rem;
  justify-content: center;
  margin-right: 2rem;

  .link-social-network {
    background: #222326;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f1f1f1;
  }

`

export const SpotifySection = styled.section `
  height: 100%;
  width: 100%;
  position: relative;
`

export const ContainerSpotify = styled.div `
  position: absolute;
  top: -20px;
  width: 100%;
`


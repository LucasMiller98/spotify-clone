import { useContextAPI } from '../../context/hooks/useContextAPI'
import { Spotify } from '../../components/spotify/Spotify'
import { Select } from '../../components/select/Select'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { Link } from 'react-router-dom'
import { FormEvent } from 'react'
import { useState } from 'react'
import * as S from './styles'

export function SpotifySignUp() {
  const { isDisplayingError, showError, errors } = useContextAPI()
  
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [dd, setDD] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [male, setMale] = useState('')
  const [female, setFemale] = useState('')
  const [dontBinary, setDontBinary] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  
  return (
    <>
      <S.Page>
        <S.Container>

          <S.Header>
            <S.Space />
            
            <Spotify 
              spotify='Spotify'
              color='#000'
            />

            <S.Space />
            
            <S.RegisterWithFacebook>
              <S.Title>Inscreva-se grátis e comece a curtir.</S.Title>

              <Button 
                type='button'
                isGreenDarkLogin={false}
                isGreenDarkRegister={false}
                isBlueColor
              >
                Inscreva-se com o facebook
              </Button>
            </S.RegisterWithFacebook>
          </S.Header>

          <S.Space />

          <S.Separator>ou</S.Separator>

          <S.Space />

          <S.Form onSubmit={handleSubmit}>
            <S.ContainerEmail>
              
              <Input
                isOnBlur={false}
                isAppearanceNone={false}
                isGender={false}
                htmlFor='Email'
                isStronger
                label='Qual é o seu e-mail?'
                onChange={event => setEmail(event.target.value)}
                value={email}
                autoComplete='off' 
                type='email'
                name='email'
                placeholder='Insira seu e-mail.'
                isGreater
                isRadio={false}
              />

              <Link to='#'>Usar número de telefone.</Link>

            </S.ContainerEmail>

            <S.ConfirmEmail>
              
              
              <Input
                isOnBlur={false}
                isAppearanceNone={false}
                isGender={false}
                htmlFor='Confirm email'
                isStronger
                label='Confirme seu e-mail'
                onChange={event => setConfirmEmail(event.target.value)}
                value={confirmEmail}
                autoComplete='off' 
                type='email'
                name='email'
                placeholder='Insira seu e-mail novamente'
                isGreater
                isRadio={false}
              />
              
            </S.ConfirmEmail>

            <S.CreatePassword>
              
              
              <Input
                isOnBlur={false}
                isAppearanceNone={false}
                isGender={false}
                htmlFor='Password'
                isStronger
                label='Crie uma senha'
                onChange={event => setPassword(event.target.value)}
                value={password}
                autoComplete='off' 
                type='password'
                name='password'
                placeholder='Crie uma senha'
                isGreater
                isRadio={false}
              />

            </S.CreatePassword>
            
            <S.ContainerName>
              
              
              <Input
                isOnBlur={false}
                isAppearanceNone={false}
                isGender={false}
                htmlFor='Name'
                isStronger
                label='Como devemos chamar você?'
                onChange={event => setName(event.target.value)}
                value={name}
                autoComplete='off' 
                type='text'
                name='name'
                placeholder='Insira um nome de perfil'
                isGreater
                isRadio={false}
              />
              
              <S.Span>Isso será exibido no seu perfil.</S.Span>
            </S.ContainerName>

            <S.DateBorn>
              

              <S.ContainerBirthday>
      
                <S.LabelBirthday htmlFor='gender'>Qual é o seu gênero?</S.LabelBirthday>

                <S.Birthday>
                  <Input
                    isOnBlur={false}
                    isAppearanceNone={false}
                    isGender={false}  
                    htmlFor='day'
                    isStronger={false}
                    label='Dia'
                    autoComplete='off'
                    name='dd'
                    value={dd}
                    onChange={event => setDD(event.target.value)}
                    placeholder='DD'
                    type='number'
                    isGreater={false}
                    isRadio={false}
                  />
                </S.Birthday>
                <S.Birthday>
                  
                  <Select
                    isStronger={false}
                    label='Mês'
                    htmlFor='mes'
                    onChange={event => setMonth(event.target.value)}
                    placeholder='Mês'
                    value={month}
                    isOnBlur
                  />
                </S.Birthday>
                <S.Birthday>
                  
                  
                  <Input
                    isOnBlur={false}
                    isAppearanceNone={false}
                    isGender={false}  
                    htmlFor='year'
                    isStronger={false}
                    label='Ano'
                    autoComplete='off'
                    name='year'
                    value={year}
                    onChange={event => setYear(event.target.value)}
                    placeholder='AAA'
                    type='number'
                    isGreater={false}
                    isRadio={false}
                  />
                </S.Birthday>
              </S.ContainerBirthday>

              <S.fieldset>
                <S.Legend>Qual é o seu gênero?</S.Legend>

                  <Input
                    isOnBlur
                    isAppearanceNone
                    isGender
                    htmlFor='male'
                    isStronger={false}
                    label='Masculino'
                    autoComplete='off'
                    isGreater
                    isRadio
                    name='gender'
                    onChange={event => setMale(event.target.value)}
                    placeholder=''
                    type='radio'
                    value={male}
                  />

                  <Input
                    isOnBlur
                    isAppearanceNone
                    isGender 
                    htmlFor='female'
                    isStronger={false}
                    label='Feminino'
                    autoComplete='off'
                    isGreater
                    isRadio
                    name='gender'
                    onChange={event => setFemale(event.target.value)}
                    placeholder=''
                    type='radio'
                    value={female}
                  />


                  <Input
                    isOnBlur
                    isAppearanceNone
                    isGender 
                    htmlFor='dontBinary'
                    isStronger={false}
                    label='Não binário'
                    autoComplete='off'
                    isGreater
                    isRadio
                    name='gender'
                    onChange={event => setDontBinary(event.target.value)}
                    placeholder=''
                    type='radio'
                    value={dontBinary}
                  />

              </S.fieldset>
            </S.DateBorn>  

            <Button 
              isBlueColor={false}
              isGreenDarkLogin={false}
              isGreenDarkRegister
              type='submit'
            >
              Inscrever-se
            </Button>          
          </S.Form>
        </S.Container>
      </S.Page>
    </>
  )
}
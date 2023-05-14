'use client';

import { useState } from 'react'
import { LeaderProfile } from './components/leaderProfile/leaderProfile'
import { DeveloperProfile } from './components/developerProfile/developerProfile'
import { createGlobalStyle, styled } from 'styled-components'
import starterImage from './images/start-background.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    font-family: 'Roboto', sans-serif !important;
  }
`;

export default function Home() {
  const [profileType, setProfileType] = useState('');

  function renderProfile() {
    // Shows profile
    switch (profileType) {
      case 'leader':
        sessionStorage.setItem('profile', 'leader');
        return <LeaderProfile />;
      case 'developer':
        sessionStorage.setItem('profile', 'developer');
        return <DeveloperProfile />;
      default:
        let profile: string | null = null;
        if (typeof window !== 'undefined') {
          profile = sessionStorage.getItem('profile');
        }
        return profile === 'leader' ? <LeaderProfile /> : <DeveloperProfile />;
    }
  }

  function handleButtonClick(profileType: string) {
    // Scrolls to profile wrapper
    if (typeof window !== 'undefined') {
      const element = document.getElementById('contentProfile');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Shows profile
    setProfileType(profileType);
  }

  function backToTop(){
    setProfileType('');
    document.body.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <GlobalStyle />
      <Navigator className={`bg-gray-900 p-4 fixed top-0 left-0 h-auto text-sm ${profileType ? '' : 'hidden'}`}>
        <ul>
          <li><button className={`contents font-bold ${profileType == 'leader' ? 'text-sky-500' : ''}`} onClick={() => handleButtonClick('leader')}>Leader</button></li>
          <li><button className={`contents font-bold ${profileType == 'developer' ? 'text-sky-500' : ''}`} onClick={() => handleButtonClick('developer')}>Developer</button></li>
          <li><button className={'contents font-bold'} onClick={() => backToTop()}>Back to top</button></li>
        </ul>
      </Navigator>
      <Wrapper className='first-content h-screen w-full flex justify-center flex-col items-center'>
        <Title className='mb-2'>Gabriel Feitosa</Title>
        <Skills className='mb-2'>Leader | Tech Coordinator | Writer | Instructor | #OpenToWork</Skills>
        <Socials className='flex mb-4'>
          <li className='border-double border-4 border-sky-500 mx-2 px-2 text-sm backdrop-blur-2xl'><a href='https://www.linkedin.com/in/kaisuki/' target='_blank'>LinkedIn</a></li>
          <li className='border-double border-4 border-sky-500 mx-2 px-2 text-sm backdrop-blur-2xl'><a href='https://github.com/kaisukidev' target='_blank'>Github</a></li>
          <li className='border-double border-4 border-sky-500 mx-2 px-2 text-sm backdrop-blur-2xl'><a href='https://medium.com/@kaisukidev' target='_blank'>Medium</a></li>
          <li className='border-double border-4 border-sky-500 mx-2 px-2 text-sm backdrop-blur-2xl'><a href='mailto:kaisukidev@gmail.com' target='_blank'>E-mail</a></li>
        </Socials>
        <div className='relative flex place-items-center'>
          <p className='fixed w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            Would you like to know more about my career as a:&nbsp;
            <button className='contents font-bold' onClick={() => handleButtonClick('leader')}>Leader</button> or&nbsp;
            <button className='contents font-bold' onClick={() => handleButtonClick('developer')}>Developer</button>?
          </p>
        </div>
      </Wrapper>
      <Wrapper className='h-screen container lg flex justify-center flex-col items-center p-4' id='contentProfile'>{renderProfile()}</Wrapper>
    </main>
  );
}

/* Styled Components */
const Wrapper = styled.section`
  &.first-content{
    background: url(${starterImage.src}) center center;
    background-size: cover;
  }

  &>div::-webkit-scrollbar {
    width: 8px;
  }
  
  &>div::-webkit-scrollbar-track {
    background-color: #000;
  }
  
  &>div::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }
  
  &>div::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  .profile-info{
    flex-basis: 20%;
    text-align: center;
  }

  .profile-history{
    flex-basis: 80%;
  }

  h2{
    margin: 10px 0 0;
  }

  p{
    margin: 10px 0;

    &:first-child{
      margin-top: 0;
    }
  }
`;

const Title = styled.h1`
  display: block;
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: .05em;
`;

const Skills = styled.small`/* Some animations in future */`;

const Socials = styled.ul`/* Some animations in future */`;

const Navigator = styled.section`

`
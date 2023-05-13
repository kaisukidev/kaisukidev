import Image from 'next/image'
import profileImage from '../../images/kaisuki.jpeg';
import { useState } from 'react';
import { styled } from 'styled-components';
import { AboutMe } from './aboutMe'
import { WhatIDo } from './whatIDo';
import { Objectives } from './objectives';
import { Scopes } from './scopes';

export function LeaderProfile() {
  const [profileInfo, setProfileInfo] = useState('');

  function renderProfileInfo() {
    // Shows profile info
    switch (profileInfo) {
      case 'aboutMe':
        return <AboutMe />;
      case 'whatIDo':
        return <WhatIDo />;
      case 'objectives':
        return <Objectives />;
      case 'scopes':
        return <Scopes />;
      default:
        return <AboutMe />;
    }
  }

  return (
    <div className='flex flex-wrap overflow-y-auto w-full'>
      <div className='profile-info'>
        <Image src={profileImage.src} alt="Profile Image" width={400} height={profileImage.height}></Image>
        <h2 className='text-lg'>Leader | Tech Coordinator</h2>
      </div>
      <div className='px-6 profile-history'>
        <ul className='flex justify-between mb-4'>
          <li>
            <h3 className={`text-2xl font-bold cursor-pointer ${profileInfo === 'aboutMe' ? 'text-sky-500' : ''}`} onClick={() => setProfileInfo('aboutMe')}>
              About me
            </h3>
          </li>
          <li>
            <h3 className={`text-2xl font-bold cursor-pointer ${profileInfo === 'objectives' ? 'text-sky-500' : ''}`} onClick={() => setProfileInfo('objectives')}>
              Objectives
            </h3>
          </li>
          <li>
            <h3 className={`text-2xl font-bold cursor-pointer ${profileInfo === 'whatIDo' ? 'text-sky-500' : ''}`} onClick={() => setProfileInfo('whatIDo')}>
              What I do
            </h3>
          </li>
          <li>
            <h3 className={`text-2xl font-bold cursor-pointer ${profileInfo === 'scopes' ? 'text-sky-500' : ''}`} onClick={() => setProfileInfo('scopes')}>
              Scopes
            </h3>
          </li>
        </ul>
        <Wrapper> {renderProfileInfo()} </Wrapper>
      </div>
    </div>
  );

}
/* Styled Components */
const Wrapper = styled.div`
`
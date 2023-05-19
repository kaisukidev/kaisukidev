import { useState } from "react";
import { styled } from 'styled-components';
import { AboutMe } from "./aboutMe";
import { Technologies } from "./technologies";
import { Carrer } from "./carrer";
import { Portfolio } from "./portfolio";
import Image from 'next/image'

export function DeveloperProfile() {
  const [developerInfo, setDeveloperInfo] = useState('aboutMe');

  function renderDeveloperProfile(){
    switch (developerInfo) {
      case 'aboutMe':
        return <AboutMe />;
      case 'carrer':
        return <Carrer />;
      case 'technologies':
        return <Technologies />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <AboutMe />;
    }
  }

  return (
    <div className='flex flex-wrap overflow-y-auto w-full'>
      <div className='profile-info'>
        <Image src='/img/kaisukidev.jpg' alt="Profile Image" width={400} height={400}></Image>
        <h2 className='text-lg lg:my-2 my-4'>Software Engineer</h2>
      </div>
      <div className='px-6 profile-history'>
        <ul className='flex justify-between mb-4'>
          <li>
            <h3 className={`lg:text-2xl font-bold cursor-pointer ${developerInfo === 'aboutMe' ? 'text-sky-500' : ''}`} onClick={() => setDeveloperInfo('aboutMe')}>
              About me
            </h3>
          </li>
          <li>
            <h3 className={`lg:text-2xl font-bold cursor-pointer ${developerInfo === 'carrer' ? 'text-sky-500' : ''}`} onClick={() => setDeveloperInfo('carrer')}>
              Carrer
            </h3>
          </li>
          <li>
            <h3 className={`lg:text-2xl font-bold cursor-pointer ${developerInfo === 'technologies' ? 'text-sky-500' : ''}`} onClick={() => setDeveloperInfo('technologies')}>
              Technologies
            </h3>
          </li>
          <li>
            <h3 className={`lg:text-2xl font-bold cursor-pointer ${developerInfo === 'portfolio' ? 'text-sky-500' : ''}`} onClick={() => setDeveloperInfo('portfolio')}>
              Portfolio
            </h3>
          </li>
        </ul>
        <Wrapper> {renderDeveloperProfile()} </Wrapper>
      </div>
    </div>
  );

}
/* Styled Components */
const Wrapper = styled.div`
`
import { useState } from "react";
import { AboutMe } from "./aboutMe";
import { Skills } from "./skills";
import { Emotional } from "./emotional";
import { Portfolio } from "./portfolio";

export function DeveloperProfile() {
  const [developerInfo, setDeveloperInfo] = useState('');

  function renderDeveloperProfile(){
    switch (developerInfo) {
      case 'aboutMe':
        return <AboutMe />;
      case 'skills':
        return <Skills />;
      case 'emotional':
        return <Emotional />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <AboutMe />;
    }
  }

  return (
    <div className='flex flex-wrap overflow-y-auto w-full'>
      <div className='profile-info'>
        <h2 className='text-lg'>Leader | Tech Coordinator</h2>
      </div>
    </div>
  );
}
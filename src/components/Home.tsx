import { Icon } from '@iconify/react';
import React, { FC, useState } from 'react';
import { ProfileView } from './ProfileView';
import { FeedView } from './FeedView';

export const Home: FC = () => {
  const [homeRoute, setHomeRoute] = useState('Feed');
  return (
    <>
      <div className="flex flex-col flex-initial w-1/6 h-100% items-end border-r border-rgb(239, 243, 244)">
        <button onClick={() => setHomeRoute('Feed')}>
          <Icon icon="devicon:twitter" fontSize={30} className="mr-5 mt-5" />
        </button>
        <button onClick={() => setHomeRoute('Profile')}>
          <Icon icon="bi:person" fontSize={30} className="mr-5 mt-5" />
        </button>
      </div>
      <div className="w-2/3 max-w-2/3 overflow-scroll">
        {homeRoute === 'Profile' ? <ProfileView /> : <FeedView />}
      </div>
      <div className="w-1/6 border-l border-rgb(239, 243, 244)"></div>
    </>
  );
};

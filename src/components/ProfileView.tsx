import React, { FC, useContext, useState } from 'react';
import { AuthContext } from '../providers/AppProviders';
import { updateProfile } from '../services/twitterApi';

export const ProfileView: FC = () => {
  const { session } = useContext(AuthContext);
  const {
    username = '',
    password = '',
    firstname: sessionFirstname = '',
    lastname: sessionLastname = '',
    profilePictureUrl: sessionProfilePictureUrl = '',
  } = session ?? {};
  const [firstname, setFirstname] = useState(sessionFirstname);
  const [lastname, setLastname] = useState(sessionLastname);
  const [profilePictureUrl, setProfilePictureUrl] = useState(
    sessionProfilePictureUrl,
  );
  const handleSubmit = () => {
    console.log('Submitting profile update.');
    updateProfile({
      username,
      password,
      firstname,
      lastname,
      profilePictureUrl,
    })
      .then((_) => console.log('Successfully updated profile.'))
      .catch(console.error);
  };
  return (
    <>
      <h1 className="text-xl font-bold px-4 pt-4 pb-8 border-b border-rgb(239, 243, 244)">
        Profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col m-auto p-4 w-5/12">
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First Name"
          className="flex-1 m-2 p-2 border rounded-full outline-none"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Last Name"
          className="flex-1 m-2 p-2 border rounded-full outline-none"
        />
        <input
          type="text"
          value={profilePictureUrl}
          onChange={(e) => setProfilePictureUrl(e.target.value)}
          placeholder="Profile Picture URL"
          className="flex-1 m-2 p-2 border rounded-full outline-none"
        />
        <button
          type="submit"
          disabled={!(firstname || lastname || profilePictureUrl)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full m-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

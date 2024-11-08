// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [profileLink, setProfileLink] = useState('');

  const handleSearch = () => {
    if (username.trim()) {
      // Construct a Roblox profile link
      setProfileLink(`https://www.roblox.com/users/profile?username=${username}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Roblox Player Finder</h1>
        <p className="text-gray-400 text-center mb-8">Enter a Roblox username to get the profile link</p>

        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 p-3 rounded-l-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 px-4 py-3 rounded-r-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {profileLink && (
          <div className="text-center">
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Go to {username}'s Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

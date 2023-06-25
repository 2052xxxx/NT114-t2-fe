import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [realName, setRealName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleRealNameChange = (e) => {
    setRealName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API call to update user settings
    // ...
  };

  return (
    <div className="settings-container">
      <h1 className="settings-heading">Settings</h1>
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="realName" className="form-label">Real Name:</label>
          <input
            type="text"
            id="realName"
            value={realName}
            onChange={handleRealNameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio" className="form-label">Bio:</label>
          <input
            type="text"
            id="bio"
            value={bio}
            onChange={handleBioChange}
            className="form-input"
          />
        </div>
       
        <button type="submit" className="submit-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;

import logo from './logo.svg';
import './App.css';

import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div>
      <h1>Hello {user.username}</h1>
      <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      </div>
  );
}

export default withAuthenticator(App);

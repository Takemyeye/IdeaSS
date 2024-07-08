import { useEffect, useContext } from 'react';
import ActiveContext from '../components/ActiveContext';
const Client = require('discord-oauth2-api');

const x = new Client({
  clientID: process.env.REACT_APP_DISCORD_CLIENT_ID,
  clientSecret: process.env.REACT_APP_DISCORD_CLIENT_SECRET,
  scopes: process.env.REACT_APP_DISCORD_SCOPES.split(','),
  redirectURI: process.env.REACT_APP_DISCORD_REDIRECT_URI,
});

const AuthComponent = () => {
  const { user, updateUser } = useContext(ActiveContext);

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const code = queryParameters.get("code");

    if (code && !user) {
      x.getAccessToken(code)
        .then(async token => {
          const user = await x.getUser(token.accessToken).catch(e => console.log(e));
          if (user) {
            updateUser(user);
          }
        })
        .catch(e => console.log(e));
    }
  }, [user, updateUser]);

  return null; 
};

export default AuthComponent;

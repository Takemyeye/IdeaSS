import { useEffect, useContext } from 'react';
import ActiveContext from '../components/ActiveContext';
const Client = require('discord-oauth2-api');

const x = new Client({
  clientID: "1258613251705671690",
  clientSecret: "oR-bG5mQmB4_6BYaLxHlzQNLn_vWm3mq",
  scopes: ['guilds', 'email', 'identify'],
  redirectURI: "https://belance.netlify.app/home"
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

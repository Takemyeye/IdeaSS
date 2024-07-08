import { useEffect, useContext } from 'react';
import axios from 'axios';
import ActiveContext from '../components/ActiveContext';

const CLIENT_ID = 'Ov23livGOC5F5BsZaTo9';
const CLIENT_SECRET = '362249a3ac074bf83900b9ab3a6948fbc185a653';
const REDIRECT_URI = 'https://belance.netlify.app/'; 

const GitHubAuthComponent = () => {
  const { user, updateUser } = useContext(ActiveContext);

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const code = queryParameters.get("code");

    if (code) {
      console.log(`Received code from GitHub: ${code}`); 

      axios.post('https://github.com/login/oauth/access_token', new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        redirect_uri: REDIRECT_URI,
      }).toString(), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        if (response.data.access_token) {
          console.log('Access token received:', response.data.access_token);
          const accessToken = response.data.access_token;
          return axios.get('https://api.github.com/user', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
        } else {
          throw new Error('No access token received');
        }
      })
      .then(response => {
        const user = response.data;
        console.log('User data received from GitHub:', user);
        updateUser(user);
      })
      .catch(error => {
        console.error('Error during GitHub OAuth process:', error);
      });
    } else {
      console.log('No authorization code found in the URL'); 
    }
  }, [user, updateUser]);

  return null;
};

export default GitHubAuthComponent;

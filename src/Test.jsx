import SpotifyAuthButton from "./SpotifyAuthButton";
import {useState} from "react";
const Test = () => {
  const { VITE_CLIENT_ID } = import.meta.env;
const { VITE_REDIRECT_URI } = import.meta.env;
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-private",
];
  const [accessToken, setAccessToken] = useState(null);                  const handleAccessToken = (token) => {
      setAccessToken(token);
      console.log("Received Access Token:", token);
    };
return (
      <div>
        <h1>Spotify Authentication Example</h1>
        {!accessToken ? (
          <SpotifyAuthButton
            clientId= {VITE_CLIENT_ID}
            redirectUri={VITE_REDIRECT_URI}
            scopes={scopes}
            onAccessTokenReceived={handleAccessToken}
          />
        ) : (
          <p>Access Token: {accessToken}</p>
        )}
      </div>
    );
}
export default Test;
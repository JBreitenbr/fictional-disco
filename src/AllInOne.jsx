import {useState,useEffect} from "react";
const AllInOne = () => {
const [accessToken, setAccessToken] = useState(null);
const [count, setCount] = useState(0);
const { VITE_CLIENT_ID } = import.meta.env;
const { VITE_REDIRECT_URI } = import.meta.env;
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-private",
];
    useEffect(() => {
    const initiateAuth = () => {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${VITE_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
        VITE_REDIRECT_URI
      )}&scope=${encodeURIComponent(scopes.join(" "))}`;

      const width = 500;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      const popup = window.open(
        authUrl,
        "Spotify Authorization",
        `width=${width},height=${height},top=${top},left=${left}`
      );

      const timer = setInterval(() => {
        try {
          if (popup.closed) {
            clearInterval(timer);
            console.log("Popup closed before authorization.");
          }

          const hash = popup.location.hash;
          if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            const token = params.get("access_token");
            if (token) {
              setAccessToken(token); // Save token in state
              popup.close();
              clearInterval(timer);
            }
          }
        } catch (err) {
          // Ignore cross-origin errors until redirect_uri matches
        }
      }, 1000);
    };

    // Call initiateAuth on window load
    window.onload = initiateAuth;
  }, [count]);

  return (
    <div>
      <h1>Spotify Authentication</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button><p>{count}</p>
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <p>Authenticating with Spotify...</p>
      )}
    </div>
  );
};

export default AllInOne;










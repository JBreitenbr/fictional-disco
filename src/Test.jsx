import SpotifyAuthButton from "./SpotifyAuthButton";import * as SpotifyFunctions from './spotiFunctions.js'
import {useState,useEffect} from "react";
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
  const [favArtists, setFavArtists] = useState([]);
useEffect(() => {
    (async function() {
        await SpotifyFunctions.setAccessToken(accessToken);
        const artists = await SpotifyFunctions.getFavArtists();
//document.write(artists.items[0].images[2].url);
//document.write(artists.items.length);
let length=artists.items.length;
let artArr=[];
for(let i=0;i<length;i++){
  artArr.push({});
  artArr[i]["name"]=artists.items[i].name;
  artArr[i]["id"]=artists.items[i].id;
  artArr[i]["image"]=artists.items[i].images[2].url;
}
      setFavArtists(artArr);

    })();
  }, [accessToken])

return (
      <div>
        {!accessToken ? (
          <SpotifyAuthButton
            clientId= {VITE_CLIENT_ID}
            redirectUri={VITE_REDIRECT_URI}
            scopes={scopes}
            onAccessTokenReceived={handleAccessToken}
          />
        ) : (
          <ol>{favArtists.map((item)=><li key={item.id}><h2>{item.name}</h2><img style={{width:"100px",height:"100px"}} src={item.image}/></li>)}</ol>
)}</div>)
}
export default Test;
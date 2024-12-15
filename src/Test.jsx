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
  //const [cl,setCl]=useState("buttonA");
  const [accessToken, setAccessToken] = useState(null);                  const handleAccessToken = (token) => {
      setAccessToken(token);
      console.log("Received Access Token:", token);
    };
  const [favArtists1, setFavArtists1] = useState([]);
  const [favArtists2, setFavArtists2] = useState([]);
  const [favArtists3, setFavArtists3] = useState([]);

useEffect(() => {
    (async function() {
        await SpotifyFunctions.setAccessToken(accessToken);
  let artists1 = await SpotifyFunctions.getFavArtists1();
  let artists2 = await SpotifyFunctions.getFavArtists2();
  let artists3 = await SpotifyFunctions.getFavArtists3()
let length1=artists1.items.length;
let length2=artists2.items.length;
let length3=artists3.items.length;
let artArr1=[];
let artArr2=[];
let artArr3=[];
for(let i=0;i<length1;i++){
  artArr1.push({});
  artArr1[i]["name"]=artists1.items[i].name;
  artArr1[i]["id"]=artists1.items[i].id;
  artArr1[i]["image"]=artists1.items[i].images[2].url;}
for(let i=0;i<length2;i++){
  artArr2.push({});
  artArr2[i]["name"]=artists2.items[i].name;
  artArr2[i]["id"]=artists2.items[i].id;
  artArr2[i]["image"]=artists2.items[i].images[2].url;}
for(let i=0;i<length3;i++){
  artArr3.push({});
  artArr3[i]["name"]=artists3.items[i].name;
  artArr3[i]["id"]=artists3.items[i].id;
  artArr3[i]["image"]=artists3.items[i].images[2].url;
}
setFavArtists1(artArr1);
setFavArtists2(artArr2);
setFavArtists3(artArr3);
    })();
  }, [accessToken])

return (
      <div><SpotifyAuthButton
            clientId= {VITE_CLIENT_ID}
            redirectUri={VITE_REDIRECT_URI}
            scopes={scopes}
            onAccessTokenReceived={handleAccessToken}
            taekscht="Last four weeks"
          />
 {accessToken?(<div style={{backgroundColor:"purple"}}><ol style={{width:"100vw"}}>{favArtists1.map((item)=><li key={item.id}><h2>{item.name}</h2><img style={{width:"100px",height:"100px"}} src={item.image}/></li>)}</ol></div>):<div>Nix</div>}<SpotifyAuthButton
            clientId= {VITE_CLIENT_ID}
            redirectUri={VITE_REDIRECT_URI}
            scopes={scopes}
            onAccessTokenReceived={handleAccessToken}
            taekscht="Last six months"
          />
  {accessToken?(<div style={{backgroundColor:"papayawhip"}}><ol style={{width:"100vw"}}>{favArtists2.map((item)=><li key={item.id}><h2>{item.name}</h2><img style={{width:"100px",height:"100px"}} src={item.image}/></li>)}</ol></div>):<div>Nix</div>}<SpotifyAuthButton
            clientId= {VITE_CLIENT_ID}
            redirectUri={VITE_REDIRECT_URI}
            scopes={scopes}
            onAccessTokenReceived={handleAccessToken}
            taekscht="Last twelve months"
          />{accessToken?(<div style={{backgroundColor:"green"}}><ol style={{width:"100vw"}}>{favArtists3.map((item)=><li key={item.id}><h2>{item.name}</h2><img style={{width:"100px",height:"100px"}} src={item.image}/></li>)}</ol></div>):<div>Nix</div>}
      </div>)
}
export default Test;
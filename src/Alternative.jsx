//import React from "react";
import {useState,useEffect } from "react";
import * as SpotifyFunctions from "./spotiFunctions.js";
import './App.css';
const Alternative = () => {const { VITE_CLIENT_ID } = import.meta.env;
const { VITE_REDIRECT_URI } = import.meta.env;
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-private",
];
  const [accessToken, setAccessToken] = useState(null);  const [favArtists, setFavArtists] = useState([]);
  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${VITE_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
      VITE_REDIRECT_URI
    )}&scope=${encodeURIComponent(scopes.join(" "))}`;

    const width = 500;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
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
          const accessToken = params.get("access_token");
          if (accessToken) {
            setAccessToken(accessToken);
SpotifyFunctions.setAccessToken(accessToken);  
            let artists=  SpotifyFunctions.getFavArtists();
    let length=artists.items.length;
let artArr=[];
for(let i=0;i<length;i++){
  artArr.push({});
  artArr[i]["name"]=artists.items[i].name;
  artArr[i]["id"]=artists.items[i].id;
  artArr[i]["image"]=artists.items[i].images[2].url;
}
    setFavArtists(artArr);   //onAccessTokenReceived(accessToken); // Pass the token to the parent component
            popup.close();
            clearInterval(timer);
          }
        }
      } catch (err) {
        // Ignore cross-origin errors until redirect_uri matches
      }
    }, 500);
  };

  return <div style={{backgroundColor:"papayawhip"}}><button onClick={handleLogin} >Login with Spotify</button><div> {accessToken}</div><div style={{backgroundColor:"lightblue"}}><ol style={{width:"100vw"}}>{favArtists.map((item)=><li key={item.id}><h2>{item.name}</h2><img style={{width:"100px",height:"100px"}} src={item.image}/></li>)}</ol></div></div>;
};

export default Alternative;
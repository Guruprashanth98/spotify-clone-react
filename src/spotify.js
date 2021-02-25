export const authAPI = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clonewgang.netlify.app/";

const clientId = "1fda3a07e6f2418fb0b1f832b7119668";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authAPI}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${decodeURIComponent(scopes.join("%20"))}&response_type=token&show_dialog=true`;

//stripping the token from the responseUrl that has been sent back from spotify
export const getTokenFromResponse = () => {
    return window.location.hash.substring(1).split("&").reduce((acc, item) => {
        let parts = item.split("=")
        acc[parts[0]] = decodeURIComponent(parts[1])
        return acc;
    }, {})
}
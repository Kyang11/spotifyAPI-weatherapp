// console.log('hi world')
let playSong

const clientID = "fd6485eabf054cf19dab21709d07abc9"
const clientSecret = "57ddec7f46b046e6b125b9da31e52009"


// get token
const getToken = async () => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            "Authorization": `Basic ${btoa(clientID+':'+clientSecret)}`,
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    })
    const data = await res.json()
    // console.log(data)
    return data.access_token
}



// get Song
const getSong = async (track, artist) => {
    const token = await getToken()
    const res = await fetch(`https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist&limit=5`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await res.json()
    // console.log(data)
    return data.tracks.items[0]
}


const clickedEvent = async (figId) => {
    // console.log(figId)
    const img_index = parseInt(figId.slice(-1))-1
    const songInfo = document.getElementsByTagName('img')[img_index].attributes[2].value
    const track = songInfo.split(' - ')[0]
    const artist = songInfo.split(' - ')[1]
    const song = await getSong(track, artist)
    const preview_url = song.preview_url

    if (playSong) {
        stopSnippet()
    }
    startSnippet(preview_url)
};


const startSnippet = (url) => {
    playSong = new Audio(url);
    return playSong.play()
};
const stopSnippet = () => {
    playSong.pause()
    return 
};
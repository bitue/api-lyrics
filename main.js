//  async function (){
//     // fetch("https://api.lyrics.ovh/v1/Amenazzy/Baby")
//     const fetchData =fetch("https://api.lyrics.ovh/suggest/baby")
//     data =await fetchData.json()
//     console.log(data)
//     // .then(data=> console.log(`https://api.lyrics.ovh/v1/${data.artist.name}/${data.album.title}`))
// })


// function displayLyrics(song){
//     document.getElementById("lyrics").innerText = song.lyrics
// }



document.getElementById("search").addEventListener("click",function(){
   
   fetchData()
})

async function fetchData(){
    const songName =document.getElementById("songName").value

    const request = `https://api.lyrics.ovh/suggest/${songName}`
    const fetchData = await fetch(request)
    const data = await  fetchData.json()
    const dataArray = await data.data
    // console.log(dataArray)
    const dataNumber =dataArray.slice(0,5)
    for (let i = 0; i < dataNumber.length; i++) {
        const element = dataNumber[i];
        document.getElementById("title "+i).innerText = element.title
        document.getElementById("artist "+i).innerText=element.artist.name
        
       
        
    }
    // console.log(dataNumber)
    document.getElementById("sample").addEventListener("click",function(){
        const getidd =event.target
        const getAttr = getidd.getAttribute('id')
        // console.log(getAttr)
        getLyrics(getAttr)
        console.log(getAttr)
    })

     async function getLyrics(getid){
        // const id= document.getElementById("1")
        // const  getid = id.getAttribute('id')
        let titleName =document.getElementById("title "+getid).innerText 
        titleName == dataNumber[getid].album.title
        let artistName = document.getElementById("artist "+getid).innerText
        artistName = dataNumber[getid].artist.name
        // console.log(titleName)
        const lyricsApiTemplate = `https://api.lyrics.ovh/v1/${artistName}/${titleName}`
        // console.log(lyricsApiTemplate)
        // fetch("https://private-anon-14752d0fe4-lyricsovh.apiary-proxy.com/v1/Coldplay/Adventure of a Lifetime")
        const response = await fetch(lyricsApiTemplate)
        const resLyrics = await response.json()
        console.log(resLyrics["lyrics"])
        document.getElementById("lyrics").innerText=""
        
        document.getElementById("lyrics").innerText = resLyrics["lyrics"]
        // if(resLyrics["lyrics"]!=""){
        //     alert("Congrats Dear , I have  got this Lyrics , just scroll down")
        //     document.getElementById("lyrics").innerText = resLyrics["lyrics"]
        //     // console.log(resLyrics["lyrics"])
        // }
        // if(resLyrics["lyrics"]==""){
        //     document.getElementById("lyrics").innerText="" ;
        //     alert("Sorry Dear , I have not got this Lyrics , plz search another one")
        // }
       
        // const name = document.getElementById("title "+).innerText 
    }
    
    

    // if(document. getElementById(i). clicked == true){
    //     console.log(1)
    // }
   
    
    

}
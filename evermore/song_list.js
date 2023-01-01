//song list
let All_song = [
    {
      name: "Coney Island",
      path: "song/Taylor Swift - coney island ft. The National.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift ft. The National",
      
    },
    {
      name: "No body, No crime",
      path: "song/Taylor Swift - no body, no crime ft. HAIM.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift ft. HAIM"
    },
    {
      name: "Marjorie",
      path: "song/Taylor Swift - marjorie.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Cowboy Like Me",
      path: "song/Taylor Swift - cowboy like me.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Taylor Swift - ivy",
      path: "song/Taylor Swift - ivy.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Taylor Swift - happiness",
      path: "song/Taylor Swift - happiness.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Gold Rush",
      path: "song/Taylor Swift - gold rush.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Tolerate",
      path: "song/Taylor Swift - tolerate it.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Dorothea",
      path: "song/Taylor Swift - dorothea.mp3",
      img: "image/taylor-swift-evermore-tgj.jpeg",
      singer: "Taylor Swift"
    }
 ];
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
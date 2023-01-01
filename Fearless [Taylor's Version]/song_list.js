//song list
let All_song = [
    {
      name: "Fearless",
      path: "song/Taylor Swift - Fearless (Taylor's Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift",
      
    },
    {
      name: "Love story",
      path: "song/Taylor Swift - Love Story (Taylors Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "White Horse",
      path: "song/Taylor Swift - White Horse (Taylor's Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Hey Stephen",
      path: "song/Taylor Swift - Hey Stephen (Taylor's Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Tell Me Why",
      path: "song/Taylor Swift - Tell Me Why (Taylor's Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "You Belong With Me",
      path: "song/Taylor Swift - You Belong With Me (Taylors Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "The Way I Loved You",
      path: "song/Taylor Swift - The Way I Loved You (Taylors Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Superstar",
      path: "song/Taylor Swift - Superstar (Taylors Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Fifteen",
      path: "song/Taylor Swift - Fifteen (Taylors Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Change",
      path: "song/Taylor Swift - Change (Taylors Version).mp3",
      img: "image/fearless_taylors_version_album.jpg",
      singer: "Taylor Swift"
    },
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
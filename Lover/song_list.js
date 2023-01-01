//song list
let All_song = [
    {
      name: "Cruel Summer",
      path: "song/Taylor Swift - Cruel Summer.mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
      
    },
    {
      name: "I Forgot That You Existed",
      path: "song/Taylor Swift - I Forgot That You Existed.mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Lover",
      path: "song/Taylor Swift - Lover.mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "False God",
      path: "song/Taylor Swift - False God (Official Audio).mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "The Archer",
      path: "song/Taylor Swift - The Archer (Lyric Video).mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "The Man",
      path: "song/Taylor Swift - The Man (Lyric Video).mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Afterglow",
      path: "song/Taylor Swift - Afterglow (Official Audio).mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Paper Rings",
      path: "song/Taylor Swift - Paper Rings (Official Audio)-compressed.mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "ME!",
      path: "song/Taylor Swift - ME! (Lyrics) Ft. Brendon Urie-compressed.mp3",
      img: "image/Lover.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "It's Nice To Have A Friend",
      path: "song/Taylor Swift - It’s Nice To Have A Friend (Official Audio).mp3",
      img: "image/Lover.jpg",
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

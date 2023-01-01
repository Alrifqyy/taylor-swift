//song list
let All_song = [
    {
      name: "Question",
      path: "song/Taylor Swift - Question.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift",
      
    },
    {
      name: "Lavender Haze",
      path: "song/Taylor Swift - Lavender Haze.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Maroon",
      path: "song/Taylor Swift - Maroon.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift"
    }, 
    {
      name: "Snow On The Beach",
      path: "song/Taylor Swift ft. Lana del Rey - Snow On The Beach.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Midnight Rain",
      path: "song/Taylor Swift - Midnight Rain.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Anti-Hero",
      path: "song/Taylor Swift - Anti-Hero.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Sweet Nothing",
      path: "song/Taylor Swift - Sweet Nothing.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "Karma",
      path: "song/Taylor Swift - Karma.mp3",
      img: "image/midnight.jpeg",
      singer: "Taylor Swift"
    },
    {
      name: "VIGILANTE SHIT",
      path: "song/Taylor Swift - VIGILANTE SHIT.mp3",
      img: "image/midnight.jpeg",
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
//song list
let All_song = [
    {
      name: "All Too Well ",
      path: "song/Taylor Swift - All Too Well (Taylor's Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift",
      
    },
    {
      name: "I Knew You Were Trouble",
      path: "song/Taylor Swift - I Knew You Were Trouble.mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Red ",
      path: "song/Taylor Swift - Red (Taylor's Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    }, 
    {
      name: "We Are Never Ever Getting Back Together ",
      path: "song/Taylor Swift - We Are Never Ever Getting Back Together (Taylors Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Holy Ground ",
      path: "song/Taylor Swift - Holy Ground (Taylors Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Starlight ",
      path: "song/Taylor Swift - Starlight (Taylors Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "Begin Again ",
      path: "song/Taylor Swift - Begin Again (Taylors Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "22 ",
      path: "song/Taylor Swift - 22 (Taylors Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    },
    {
      name: "The Lucky One ",
      path: "song/Taylor Swift - The Lucky One (Taylors Version).mp3",
      img: "image/Red.jpg",
      singer: "Taylor Swift"
    },{
      name: "Stay Stay Stay ",
      path: "song/Taylor Swift - Stay Stay Stay (Taylors Version).mp3",
      img: "image/Red.jpg",
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
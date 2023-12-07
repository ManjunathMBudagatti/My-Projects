   let movies =[
{
  name:"Falcon and the winter soldiers",
  des:"Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.” The all-new series is directed by Kari Skogland; Malcolm Spellman is the head writer. Streaming exclusively on Disney",
  image:"images-20230717T163437Z-001/images/slider 2.PNG"
},
{
  name:"loki",
  des:"Loki was born a Frost Giant and abandoned as an infant by his father Laufey, only to be found by Odin during an invasion of the realm of the Frost Giants in Jotunheim. Odin used magic to make Loki appear Asgardian and raised him as a son alongside Odin's biological son, Thor.",
  image:"images-20230717T163437Z-001/images/slider 1.PNG"
},
{
  name:"wanda vision",
  des:"The series is a blend of classic television and the Marvel Cinematic Universe in which Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
  image:"images-20230717T163437Z-001/images/slider 3.PNG"
},
{
  name:"raya and the last dragon",
  des:"Kelly Marie Tran as Raya, the fierce and virtuous warrior princess of Heart who has been training to become a Guardian of the Dragon Gem. To change her father from stone back into himself and restore peace to Kumandra, she embarks on a search for the last dragon. Awkwafina as Sisu, the last dragon in existence.",
  image:"images-20230717T163437Z-001/images/slider 4.PNG"
},
{
  name:"luca",
  des:"A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
  image:"images-20230717T163437Z-001/images/slider 5.PNG"
}
];


const leftSlide=document.getElementById('slide-btn-left');
const rightSlide=document.getElementById('slide-btn-right');
const movieTitle=document.querySelector('.movie-title');
const movieDes=document.querySelector('.movie-des');
const movieImage=document.getElementById('movie-img');

let index=1;

leftSlide.addEventListener('click',()=>{
  index-=1;
  if(index<0){
    index=4;
  }
  index=index%movies.length;
  console.log(index);
  movieTitle.innerHTML=movies[index].name;
  movieDes.innerHTML=movies[index].des;
  movieImage.setAttribute('src',movies[index].image);
})

rightSlide.addEventListener('click',()=>{
  index+=1;
  index=index%movies.length;
  console.log(1);
  movieTitle.innerHTML=movies[index].name;
  movieDes.innerHTML=movies[index].des;
  movieImage.setAttribute('src',movies[index].image);
})


//Video Cards

const videoCards=[...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
item.addEventListener("mouseover", () => { 
  let video = item.children[1];
  video.play();
  });
item.addEventListener("mouse leave", () => { 
  let video = item.children[1];
  video.pause();
  });
});
I


//card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions= item.getBoundingClientRect();
    let containerwidth= containerDimensions.width;

nxtBtns[i].addEventListener('click', () => {
   item.scrollLeft += containerwidth - 200;
})

preBtns[1].addEventListener('click', () => {
  item.scrollLeft -= containerwidth + 200;
})
})
























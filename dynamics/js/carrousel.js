document.addEventListener('DOMContentLoaded',()=>{
  const trajes = document.querySelectorAll('.carousel');
  M.Carousel.init(trajes,{
    duration: 150,
    dist: -100,
    padding: 5,
    shift:5,
    numVisible:3,
    indicators: true,
    noWrap: false,

  });

});


function selectSuit(){
  
  current = document.querySelector('.active');
  
  sessionStorage.setItem("Suit",current.id);

  window.location.href = "./intro2.html";
}
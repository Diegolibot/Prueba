let suitcolor = sessionStorage.getItem("Suit");  


//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","Excellent choice, captain!",0,1],
    ["dialog","Like any great project, you will need the help of a great team, so we\n ask that you now pick your crewmates, remember that the ship has a maximum capacity\n of 6 crew members (including you).",2,1],
    ["dialog","Please choose wisely who you want to accompany you.",2,1],
    ["end","","http://localhost/Programa/templates/chteam.html"]
  ];
  
  let imagesrcs = ["JJfeliz.png","back1.png","JJserio.png"]; //las imágenes que se usarán
    

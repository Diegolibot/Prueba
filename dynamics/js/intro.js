let suitcolor = sessionStorage.getItem("Suit");  


//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","Good morning Captain, welcome to the ARES facilities.",2,1],
    ["dialog","We appreciate your participation as captain of the EROS 5\n mission to Mars with the purpose of advancing to phase II of colonization.",0,1],
    ["dialog"," We know that this great mission requires someone strong, intelligent \nand skilled like you, capable of carrying out the mission successfully.",2,1],
    ["dialog","But before going into any more specifics, please choose your suit.",2,1],
    ["end","","./menutraje.html",1,"chapter1"]
  ];
  
  let imagesrcs = ["JJfeliz.png","back1.png","JJserio.png"]; //las imágenes que se usarán
    

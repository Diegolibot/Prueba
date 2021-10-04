let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","What a good team you have formed, Captain!",0,1],
    ["dialog","As we finish with the preparations for the EROS 5 mission, I applaud you.",2,1],
    ["dialog","Godspeed, Captain!",0,1],
    ["dialog","Trust your abilities and make the right choices to complete this important mission successfully.",2,1],
    ["dialog","I'll see you soon.",2,1],
    ["end","","./chapters.html",1,"chapter1"]
  ];
  
  let imagesrcs = ["JJfeliz.png","back1.png","JJserio.png"]; //las imágenes que se usarán
    

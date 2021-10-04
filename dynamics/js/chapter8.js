  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    //Litera
    ["start",1,0],
    ["dialog","Okay crew, our time to return to Earth has come,\n gather your things because tomorrow we leave Mars.",3,1],
    ["dialog","*sad*",4,1],
    ["dialog","*exited*",5,1],
    ["dialog","Ewww",6,1],
    ["dialog","*Next day*",0,1],
    ["dialog","Please get into the vehicle. Akira, are you excited  to fly the spaceship again?",2,1],
    ["dialog","Yes, captain! I'm really excited. Once more, thank you for worrying about me.",7,1],
    ["dialog","*1 hour later*",0,9],
    ["dialog","We will begin takeoff in 10, 9, 8, 7, 6, 5, 4, 3, 2, 1...",10,9],

    ["dialog","It's so odd to come back. What are you guys doing when we get back on Earth?",11,9],
    ["dialog","I'm going on vacation for a looong while.",10,9],
    ["dialog","I'm probably visiting my family, and then I'll  treat myself like royalty",11,9],
    ["dialog","I'm going to pack my stuff and move with one of my friends to her apartment",12,9],
    ["dialog","I think I'll go to Hawaii with my girlfriend",7,9],
    ["end","","http://localhost/Programa/templates/chapter7exp.html",1,"chapter7"]
  ];
  
    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
  
  let imagesrcs = ["blank.png","marte.png",suitcolor+"-confused.png",suitcolor+"-neutral.png","geologo-concerned.png","biologo-relieved.png","geologo-mand.png","piloto.png","piloto-seria.png","control.png","ingeniero.png","medico.png","geologo.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así



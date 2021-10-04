  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",3,0],
    ["dialog","*One takeoff later...*",0,3],
    ["dialog","*Inside the spaceship*",0,3],
    ["dialog","I think this is a good moment to build stronger relationships within our group.\n What would you like to talk about?",4,3],
    ["options",5,3,"Movies","Hobbies","Favorite planet",0,1,5,11,17],
    ["dialog","My favorite movie is Star Trek.",6,3],
    ["dialog","Mine is Madagascar.",7,3],
    ["dialog","I believe mine would be Inception.",8,3],
    ["dialog","The best movie is Pixar's Planes, hands down.",9,3],
    ["dialog","My choice would definitely be Howl's Moving Castle.",10,3],
    ["skip",23],
    ["dialog","I really enjoy oil painting",6,3],
    ["dialog","My favorite activity is hiking, I go every summer",7,3],
    ["dialog","Travelling is my jam",8,3],
    ["dialog","For me, music is what gives me purpose.\nI play the guitar",10,3],
    ["dialog","Ooh! I love baking cookies",9,3],
    ["skip",23],
    ["dialog","My favorite planet is Saturn, I really like those big rings.",6,3],
    ["dialog","My choice would be Jupiter, I believe",7,3],
    ["dialog","Planets are overrated, for me nebulae are the best:\n  my favorite is the Roseta nebula",8,3],
    ["dialog","How come? Venus is for sure the best one",10,3],
    ["dialog","I think that my favorite one is Pluto, but it's \nactually considered a dwarf planet",9,3],
    ["skip",23],
    ["dialog","Remember we have pills that will protect us from radiation.\nCaptain, should we take them now?",11,3],
    ["twoop",5,3,"Take them now","Later",0,"important","Pills"],
    ["dialog","Captain, would you mind coming to check the flight report at the comm center?",9,3],
    ["end","","./chapter2exp.html",1,"chapter3"]
  ];

    


  

    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
  
  let imagesrcs = ["blank.png",suitcolor+".png","back1.png","nave.png","biologo-relieved.png",suitcolor+"-confused.png","Medico.png","biologo.png","ingeniero.png","piloto-seria.png","geologo.png","medico-concerned.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así



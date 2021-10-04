  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","Welcome to the ARES facilities, this is the gym where you're \ngoing train in order for you to go to Mars in the best possible shape as well \nas 100% prepared for the challenges that may arise.",2,1],
    ["dialog","Thank you! I'm impressed with your facilities, and I can tell that the \ntraining that I'm going to receive will be the best",3,1],
    ["dialog","Soldier Francis, come here!. He's going to be in charge of your training.",2,1],
    ["dialog","Yes Sir, how may I help you?",4,1],
    ["dialog","Francis, let me introduce you, from now on is your duty \nto prepare him for the next mission to Mars",2,1],
    ["dialog","It's a pleasure to meet you, I'll be more than pleased to train you",4,1],
    ["dialog","Francis, let's allow our guest to choose today's meal",2,1],
    ["options",2,1,"Fish stick","Salada","Steak",0],
    ["dialog","We'll see each other at the end of today's training.",2,1],
    ["dialog","Please, follow me right this way.",2,1],
    ["dialog","6 months later and 1 day before takeoff...",2,1],
    ["dialog"," Congratulations! You have completed your training outstandingly,\n but now we need you to answer one question. Are you willing to continue exercising \nduring and after your journey to Mars?",0,1],
    ["twoop",2,1,"Yes","No",0,"important","Train"],
    ["dialog","As you wish. I hope everything goes according to plan tomorrow.\n Good luck!",0,1],
    ["end","","./chapters.html",1,"chapter2"]
  ];
    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta,1 (solo si desencadena múltiples situaciones),# de situación 1,# de situación 2,#número de situación 3]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
    //Para saltar a un cierto paso: ["skip",#]

  let imagesrcs = ["JJfeliz.png","giroscopio.png","JJserio.png",suitcolor+"-neutral.png","Soldado.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así
  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","Crew, get ready because we are about to land on Mars.\n Fasten your seatbelts and let's begin our landing",3,1],
    ["dialog","We have arrived, it's time to inform the base of our \narrival and get on our way to the habitats with the Martian vehicle.",3,1],
    ["options",4,1,"Congratulate crew","Scold crew","Stay in silence",0,1,4,6,8],
    ["dialog","Great job crew!",5,1],
    ["skip",10],
    ["dialog","That was a terrible landing!",6,1],
    ["skip",10],
    ["dialog","...",7,1],
    ["skip",10],
    ["dialog","* 1 hr later *",0,1],
    ["dialog","They're here! Let's go, I'm hungry",8,2],
    ["dialog","* 30 mins later *",0,2],
    ["dialog","Driver: Uh-oh, Houston we have a problem...",9,2],
    ["dialog","Driver: The GPS of the vehicle isn't working. We've lost the habitat's coordinates!",9,2],
    ["dialog","",8,2],
    ["dialog","Keep calm, if everyone panics then were not going to be able to solve the problem.\n Captain, what should we do?",10,2],
    ["options",4,2,"Keep walking","Wait for rescue","Try to communicate with Earth",0,1,18,23,27],
    //Dead 1
    ["dialog","Shortly after the hike had begun, the night fell, and it was deadly cold.",0,2],
    ["dialog","Eventually the spacesuits ran out of battery before the astronauts had reached the base.",0,2],
    ["dialog","The crew and the driver all die due to the lack of oxygen and warmth provided by the suits.",0,2],
    ["end","","./chapter4exp.html"],
    ["skip",32],
    //Dead 2
    ["dialog","After waiting for the rescue to come, the night fell and the vehicle ran out of battery.\nBecoming useless to all the passengers inside.",0,2],
    ["dialog","The cold starts to make its way inside and without a life support system provided \nfrom the vehicle, the crew and the driver die.",0,2],
    ["end","","./chapter4exp.html"],
    ["skip",32],
    //Correct
    ["dialog","*Almost one hour later, the base coordinates arrive*",0,2],
    ["dialog","Driver: Thanks to the captain's choice to communicate with Earth, we have received the \ncoordinates and can continue on our way to the habitat.",9,2],
    ["dialog","Driver: Hold on and prepare to meet the other humans living in the first human colony on Mars.",9,2],
    ["dialog","",11,2],
    //Ing 
    ["dialog","See, I told you to trust the Captain. We made it!",12,2],
    ["end","","./chapter4exp.html",1,"chapter5"]
  ];
  
    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
  
  let imagesrcs = ["blank.png","control.png","marte.png","piloto.png",suitcolor+"-confused.png",suitcolor+"-calm.png",suitcolor+"-enojado.png",suitcolor+".png","medico-panic.png","astronauta-azul.png","ingeniero-piensa.png","medico-concerned.png","ingeniero.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así



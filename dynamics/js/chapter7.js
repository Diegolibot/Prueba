  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    //Litera
    ["start",1,0],
    ["dialog","Ugh, Akira is making so much noise again. I cannot sleep anymore because of that.",6,1],
    ["dialog","I know, I think they might be really stressed, they have been really moody lately.",7,1],
    ["dialog","You're right, a few days ago, when we were collecting soil samples together he looked very pissed.",8,1],
    ["dialog","Yeah, I have also noticed that they are isolated from everybody, sometimes they eat less or way more.\n Now that I think of it, Akira came to visit me because their hair was falling and they had a few rashes on their skin",7,1],
    ["dialog","I think this should be discussed with the captain.",8,1],
    ["dialog","* Next morning *",0,1],

    ["dialog","Captain, Renee and I would like to talk to you about a delicate matter. Akira has been really\n distracted as of late. We think they might be depressed.",8,1],
    ["dialog","From my medical experience I can tell you that Akira is under huge amounts of stress, and \nthey have rejected treatment.",7,1],
    ["dialog","Captain, we believe that you are closer to Akira than us, so we ask you please to talk with\n them about the situation and convince them to get help.",8,1],
    ["options",2,1,"Talk to him together","Talk to him alone","Ignore",0,1,11,19,22],
    //Correct
    ["dialog","Akira, we need to talk, please come with me",9,4],
    ["dialog","Yes, captain, what is it?",10,4],
    ["dialog","I've noticed that you are extremely anxious or stressed, I know our current situation can be\n considered complex, due to the workload we have every day,\n but don't forget we are here as a crew and we are all very concerned about you.",9,4],
    ["dialog","Let us help you– I promise you will feel better soon if you tell us what's wrong.\n If you want to talk again sometime, feel free to come to me anytime. ",9,4],
    ["dialog","I think you're right captain, thank you so much for the support, I know I can\n trust you no matter what. I think it's time to get the help I need.",11,4],
   
    ["dialog","* In the doctor's office *",0,12],
    ["dialog","Hi Rene, can we talk? ",11,12],
    ["skip",23],
    
    //Dead 1
    ["dialog","I've noticed that you are extremely anxious or stressed, \nI know our current situation can be considered complex, \ndue to the workload we have every day, but aren't keeping in line. ",5,4],
    ["dialog","You should be less selfish, remember that you are no longer a child.\n Think about the rest of us. This is your last warning Akira, \n if you do not obey and change your attitude you will be expelled from this habitat.",5,4],
    ["dialog","Understood, captain.",10,1],
    ["dialog","The next day, Akira commited suicide and because thereare no other pilots available, \n the crew of mission Eros 5 must remain longer on Mars till the next mission arrives",13,4],
   
    ["end","","http://localhost/Programa/templates/chapter7exp.html",1,"chapter8"]
  ];
  
    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
  
  let imagesrcs = ["blank.png","litera.png",suitcolor+"-confused.png","geologo.png","pasillo.png",suitcolor+"-enojado.png","geologo-mand.png","medico-concerned.png","geologo-concerned.png",suitcolor+"-neutral.png","piloto-preocupada.png","piloto.png","consultorio-espacio.png","piloto-muriendo.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así

 


  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","Luca, I'm glad I ran into you. Thanks for cooking breakfast today, it was delicious.\n Would you like to go for a walk with me to...?",2,1],
    ["options",3,1,"Laboratory","Medical Ward","Command room",0],
    ["dialog","Yes, captain! I'd be honored.",4,1,],
    
    ["dialog","* The biologist approaches *",6,5],
    ["dialog","Ehwwww",7,5],
    ["dialog","We have a problem. All our crops are wilting! If they continue like that\n we are going to run out of food and starve. \nWe need to do something!",8,5],
    ["dialog","I understand, but you are the specialist in that area, why are you looking for my help?",9,5],
    ["dialog","Oh, I'm sorry captain, but I was looking for Luca, not you.",11,5],
    ["dialog","Ehwwww",7,5],
    ["dialog","Nevermind, I'll come with you to the greenhouse",9,5],

    ["dialog","We've come to 3 possible solutions.",12,10],
    ["dialog","But we need you to make the final decision.",8,10],
    ["options",3,10,"Tell the doctor to decide","Change fertilizer and plant again","Wait until the crops get better",0,1,14,20,16],
    //Dead 1
    ["dialog","I am no expert in this matter, but they might stop wilting on their own.\n Let's be patient",13,10],
    ["skip",17],
    //Dead 2
    ["dialog","Oh no, not only did we lose the wheat and potato crops, but also our other crops began to wither.",8,10],
    ["dialog","It's too late to save the crops, the base is running out of food supplies \nand the next cargo with food will come months from now.\n A lot of people died of undernourishment and heart problems.",0,10],
    ["end","","./chapter6exp.html",1],
    ["skip",22],
    //Correct
    ["dialog","10 days later...",0,10],
    ["dialog","Great! A miracle happened! The crops are saved and we have enough\n food for the entire base.",6,10],

    ["end","","./chapter6exp.html",1,"chapter7"]
  ];
  
    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
  
  let imagesrcs = ["blank.png","marte.png",suitcolor+"-calm.png",suitcolor+"-confused.png","geologo.png","pasillo.png","biologo-relieved.png","geologo-mand.png","biologo-concern.png",suitcolor+"-enojado.png","invernadero.png","biologo-cerebro.png","geologo-concerned.png","medico-concerned.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así

 
  
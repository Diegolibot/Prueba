  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","Captain, what are your plans for today?",2,1],
    ["options",3,1,"Comms maintenance","Fix energy generator","Greenhouse work",0],
    ["dialog","Oh such a pity! I thought it would be fun to do something together.",4,1],
    ["dialog","* Base corridor *",0,5],
    
    ["dialog","* A wire comes loose and makes a sparkling sound *",0,6],
    ["dialog","* It hits your arm and makes a deep burning cut *",0,6],
    ["options",3,6,"Go to the doctor","Ignore","Treat the wound",0,1,18,8,8],
    //Dead
    ["dialog","* 15 days later *",0,1],
    ["dialog","Good afternoon doctor. Sorry for the intrusion.",7,8],
    ["dialog","I came to you because a few days ago a cable hit me, and left me with a wound\n that I did not consider serious enough to come to the infirmary, but now I have had pain\n in my arm for a few days. It has a bad smell and It has a blackish appearance,\n I thought it was a bruise, but yesterday I had a horrible fever.",7,8],
    //Medic concerned
    ["dialog","That doesn't sound too good. Let me give you a quick checkup.",9,8],
    ["dialog","Hmm, this seems to be caused by anaerobic bacteria, I'll be honest, I will\n have to take a sample, to know what we are dealing with.",9,8],
    ["dialog","A few hours later...",0,8],
    ["dialog","There is no doubt, it is an infection caused by anaerobic bacteria, we will\n have to remove all the necrotic tissue and you will be under treatment of strong antibiotics.",9,8],
    ["dialog","* The infection caused bacterial sepsis and he died *",9,8],
    ["end","","./chapter5exp.html"],
    ["skip",22],
    //Correct
    //Medico sure
    ["dialog","I'm glad you came! Your wound looks a little bit deep, but don't worry, \nit’s going to heal soon. ",10,8],
    ["dialog","Let me disinfect the wound first, this may hurt and then I'm going to stitch it and hopefully it won't scar.",10,8],
    ["dialog","* some suttures later *",10,8],
    ["dialog","All done! If you feel any pain, come with me again and I will give you some pills.",10,8],
    ["end","","./chapter5exp.html",1,"chapter6"]
  ];
  
    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
  
  let imagesrcs = ["blank.png","marte.png","biologo-relieved.png",suitcolor+"-concerned.png","biologo-concern.png","pasillo.png","cables-rotos.png",suitcolor+"-enfermo.png","consultorio-espacio.png","medico-concerned.png","medico-sure.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así



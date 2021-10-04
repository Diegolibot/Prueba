  
let suitcolor = sessionStorage.getItem("Suit");  

//Secuencia
  //un arreglo de arreglos
  //Primera variable en los arreglos: tipo de secuencia, si es un diálogo,
  //para tomar desiciones, etc.
  let sequence = [ 
    ["start",1,0],
    ["dialog","Captain, we have an emergency!",2,1],
    ["dialog","There's a systemic  failure in the spaceship. Multiple systems have broken down",2,1],
    ["dialog","Quick, we need to do something!",2,1],
    ["dialog","What are you talking about? You're the engineer!",3,1],    
    ["dialog","I am, but there are three issues happening at once",2,1],
    ["dialog","Something is wrong with the air purification filter, the thermostat and the pressure.",2,1],
    ["dialog"," I can't fix them all at once! Besides, I need the Captain's green light.\n What should we fix first, Sir?",2,1],
    ["options",4,1,"Pressure","Filter","Temperature",0,1,9,17,17],
    ["dialog","The pressure has stabilized cap, now what?",5,1],
    ["options",4,1,"Presure","Filter","Temperature",2,1,9,13,11],
    ["dialog","Temperature systems have been repaired, now what?",5,1],
    ["options",4,1,"Presure","Filter","Temperature",1,1,11,21,11],
    //Dead 2
    ["dialog","Everything seemed to have frozen in time, and what seemed to be a never\n ending story, came to a halt.",0,6],
    ["dialog","The crew started to feel very cold. It was too late to repair the thermostat of the ship.",0,6],
    ["dialog","Sadly, the crew of the Eros 5 mission was no more.",0,6],
    ["skip",27],
    //Dedad 1
    ["dialog","Everything seemed to have frozen in time, and what seemed to be a never\n ending story, came to a halt.",0,6],
    ["dialog","The captain started feeling suffocated, as if the air had vanished.",0,6],
    ["dialog","The cabin was losing oxygen and in matter of seconds the crew or the\n Eros 5 mission to Mars was no more.",0,6],
    ["skip",27],
    //Win
    ["dialog","Understood captain!",7,1],
    ["dialog","Phew, that was tough, but everything is working properly now.\n The vital support systems and the ship are now out of danger.",7,1],
    ["dialog","Everyone, gather 'round. It's almost time to go to sleep and \nwe haven't chosen our bunk bed partners.",8,1],
    ["dialog","Captain, you go first, who would you like to be your bunk bed partner?",9,1],
    ["twoop",4,1,"Biogist","Geologist",0],
    ["skip",27],
    ["end","","http://localhost/Programa/templates/chapter3exp.html",1,"chapter4"]
  ];

   
  
  
    //Para el inicio: ["start",imagen de fondo, imagen de personaje]
    //Para diálogos: ["sialog",text, imagen de personaje,imagen de fondo]
    //Para opciones: ["options",imagen de personaje, imagen de fondo,respuesta 1, respuesta 2, respuesta 3, respuesta correcta]
    //Para dos opcoones: ["twoop",imagen de personaje, imagen de fondo, texto 1, texto 2, respuesta correcta, "important" (solo si se debe guardar para consecuencias después), identificador (único para cada pregunta importante)]
    //Para terminar: ["end","",link hacia donde redirigir,1 (solo si desbloquea un capítulo),"chapter#" (el capítulo que desbloquea)]
  
  let imagesrcs = ["blank.png","nave-alarma.png","ingeniero-panic.png","piloto-seria.png",suitcolor+"-confused.png","ingeniero-piensa.png","marte.png","ingeniero.png","piloto.png","biologo.png"]; //las imágenes que se usarán
  //Arreglo de fotos, el orden en el que se ponen corresponde al orden en como se van a referenciar en sequence,
  //Ej. "JJfeliz.png" es 0, "giroscopio.png" es 1 y así



function setup() { //Inicializa la ventana para dibujar
    createCanvas(window.innerWidth, 550);
    textSize(25);
    textAlign(CENTER, CENTER);

    w = width;
    h = height;
    
    dialogbox = [10, h-120-15,  w-20, 130];
    buttobox = [w-20-(w/10), h-55, w/10, 40];

    optionsboxes = [
      [w/2-w/8, h-120-5 , w/4, 30],
      [w/2-w/8, h-120-5 +40, w/4, 30],
      [w/2-w/8, h-120-5 +80, w/4, 30]
    ];

    centerbuttonbox = [w/2-w/16, h-75, w/8, 50];
    imgs = [];
    for(i=0;i < imagesrcs.length;i++){ //carga imágenes
      imgs.push(loadImage("../statics/media/img/"+imagesrcs[i]));
    }
    i = 0;
    imgbck = 0;
    img = 0;
    next(i,sequence,imgs); //carga la primera ventana
    
  }
    
  function draw() { //ciclo para dibujar

    background(imgbck); //Dibuja el fondo
    image(img, 0, 0, w/2, h); //Dibuja imagen
    next(i,sequence,imgs); //Dibuja cuadros de texto, opciones, etc

  }
    
  function mousePressed() {  //Acciones para cuando das click, checa que botones se presionan
    if((inside( buttobox ,[mouseX,mouseY]) || inside( centerbuttonbox ,[mouseX,mouseY])) && sequence[i][0] !="options" && sequence[i][0]!="twoop") {
      i++;
    }
    else if((inside(optionsboxes[0],[mouseX,mouseY]) ||
           inside(optionsboxes[1],[mouseX,mouseY]) ||
            inside(optionsboxes[2],[mouseX,mouseY])) && 
            sequence[i][0]!="twoop"
            ){
      if(sequence[i][7]==1){
        if(inside(optionsboxes[0],[mouseX,mouseY]))
          i = sequence[i][8];
        else if(inside(optionsboxes[1],[mouseX,mouseY])){
          i = sequence[i][9];
        }else if(inside(optionsboxes[2],[mouseX,mouseY])){
          i = sequence[i][10];
        }
      }else{
        if((inside(optionsboxes[0],[mouseX,mouseY]) && sequence[i][6]==0) ||
        (inside(optionsboxes[1],[mouseX,mouseY]) && sequence[i][6]==1) ||
        (inside(optionsboxes[2],[mouseX,mouseY]) && sequence[i][6]==2)){
          i++;
        }
        else{
          i++;
        }
      }

    }else if((inside(optionsboxes[0],[mouseX,mouseY]) ||
     inside(optionsboxes[2],[mouseX,mouseY])) && sequence[i][0]!="options"
     ){
      sessionStorage.setItem(sequence[i][7], false);
      if((inside(optionsboxes[0],[mouseX,mouseY]) && sequence[i][5]==0) ||
        (inside(optionsboxes[2],[mouseX,mouseY]) && sequence[i][5]==1)){
          if(sequence[i][6]=="important")
            sessionStorage.setItem(sequence[i][7], true);
      }
      i++;
    }
  }


  function next(j,sequence,imgs){ //Va pasando las secuencias de la historia.

    var curr = sequence[j];

    if(curr[0]=="dialog"){ //en caso de que sea un diálogo
        imgbck = imgs[curr[3]];
        img = imgs[curr[2]];
        dialog(curr[1],w,h);
    }
    else if(curr[0]=="options"){ //En caso de que sea una cosa para opciones
        img = imgs[curr[1]];
        imgbck = imgs[curr[2]];
        options(curr[3],curr[4],curr[5]);
    }else if(curr[0]=="twoop"){ //En caso de que sea una cosa para 2 opciones
      img = imgs[curr[1]];
      imgbck = imgs[curr[2]];
      twoop(curr[3],curr[4]);
    }else if(curr[0]=="skip"){
      i = curr[1];
    }
    else if(curr[0]=="end"){ //Para terminar
        if(curr[3]==1)
          sessionStorage.setItem(sequence[i][4], true);
        window.location.href = curr[2];
    }
    else if(curr[0]="start"){ //Para empear
        imgbck = imgs[curr[1]];
        img = imgs[curr[2]];
        startdrawing();
    }

}

function inside(limits,position){ //Chceca si una posición está dentro de ciertos límites (Se usa para ver a qué da click el mouse)
    xmin = limits[0];
    xmax = limits[2]+limits[0];
    ymin = limits[1];
    ymax = limits[3]+limits[1];
  
    if(
      position[0] >= xmin &&
      position[0] <= xmax &&
      position[1] >= ymin &&
      position[1] <= ymax
    ){
      return true
    }
    else{
      return false
    }
  
}


function startdrawing(){  //Dibuja la cajita de diálogo con el texto textring y el botón para continuar
    stroke("#22639D");
    fill("#22639D");
    rect(dialogbox[0], dialogbox[1], dialogbox[2], dialogbox[3], 10);

    stroke("#38B6FF");
    fill("#38B6FF");
    rect( centerbuttonbox[0],  centerbuttonbox[1],  centerbuttonbox[2],  centerbuttonbox[3], 30);
    textSize(15);
    stroke(255);
    fill(255);
    text("Begin",  centerbuttonbox[0]+ centerbuttonbox[2]/2,  centerbuttonbox[1]+ centerbuttonbox[3]/2);
 }

function dialog(textstring){  //Dibuja la cajita de diálogo con el texto textring y el botón para continuar
    stroke("#22639D");
    fill("#22639D");
    rect(dialogbox[0], dialogbox[1], dialogbox[2], dialogbox[3], 10);
    textSize((w/95) + 10);
    stroke(255);
    fill(255);
    text(textstring, dialogbox[0]+dialogbox[2]/2, dialogbox[1]+dialogbox[3]/2);
    
    stroke("#38B6FF");
    fill("#38B6FF");
    rect( buttobox [0],  buttobox [1],  buttobox [2],  buttobox [3], 30);
    textSize(15);
    stroke(255);
    fill(255);
    text("Next",  buttobox [0]+ buttobox [2]/2,  buttobox [1]+ buttobox [3]/2);
 }
 function options(o1,o2,o3){

    stroke("#22639D");
    fill("#22639D");
    rect(dialogbox[0], dialogbox[1], dialogbox[2], dialogbox[3], 10);
        
    stroke("#38B6FF");
    fill("#38B6FF");
    
    rect( optionsboxes[0][0],  optionsboxes[0][1],  optionsboxes[0][2],  optionsboxes[0][3], 30);
    rect( optionsboxes[1][0],  optionsboxes[1][1],  optionsboxes[1][2],  optionsboxes[1][3], 30);
    rect( optionsboxes[2][0],  optionsboxes[2][1],  optionsboxes[2][2],  optionsboxes[2][3], 30);

    textSize(15);
    stroke(255);
    fill(255);
    text(o1,  optionsboxes[0][0]+optionsboxes[0][2]/2,  optionsboxes[0][1]+ optionsboxes[0][3]/2);
    text(o2,  optionsboxes[1][0]+optionsboxes[1][2]/2,  optionsboxes[1][1]+ optionsboxes[1][3]/2);
    text(o3,  optionsboxes[2][0]+optionsboxes[2][2]/2,  optionsboxes[2][1]+ optionsboxes[2][3]/2);
 }

 function twoop(o1,o2){

  stroke("#22639D");
  fill("#22639D");
  rect(dialogbox[0], dialogbox[1], dialogbox[2], dialogbox[3], 10);
      
  stroke("#38B6FF");
  fill("#38B6FF");
  
  rect( optionsboxes[0][0],  optionsboxes[0][1],  optionsboxes[0][2],  optionsboxes[0][3], 30);
  rect( optionsboxes[2][0],  optionsboxes[2][1],  optionsboxes[2][2],  optionsboxes[2][3], 30);

  textSize(15);
  stroke(255);
  fill(255);
  text(o1,  optionsboxes[0][0]+optionsboxes[0][2]/2,  optionsboxes[0][1]+ optionsboxes[0][3]/2);
  text(o2,  optionsboxes[2][0]+optionsboxes[2][2]/2,  optionsboxes[2][1]+ optionsboxes[2][3]/2);
}




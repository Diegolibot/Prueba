
sessionStorage.setItem("chapter1","true");

let chapters = ["chapter1","chapter2","chapter3","chapter4","chapter5","chapter6","chapter7","chapter8"];


function putlocks(){
    var results = [];
    for(i=0;i<chapters.length;i++){
        results.push(sessionStorage.getItem(chapters[i]));
    }
    var lock = document.querySelectorAll('.lockimg');
    lock.forEach(element => {
        if(results[chapters.indexOf(element.id)]=='true'){
            element.style.display = 'none';
        }
        else
            element.style.display = 'visible';
    });
}

function startchapter(chapter){
    var results = [];
    for(i=0;i<chapters.length;i++){
        results.push(sessionStorage.getItem(chapters[i]));
    }
    console.log(results);

    if(results[chapters.indexOf(chapter)]=='true')
        location.href=chapter+'.html';
    else{
        console.log("you dont have acces");
    }
}

putlocks();
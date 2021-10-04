





if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    //document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}



//Remover personajes
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    console.log(crew.length);
    crew.pop();
    console.log(crew)

    switch (crew.length) {
      case 1:
      document.getElementById("sombras").src = '../statics/media/img/suno.png';
    break;
      case 2:
      document.getElementById("sombras").src = '../statics/media/img/sdos.png';
    break;
    break;
      case 3:
      document.getElementById("sombras").src = "../statics/media/img/stres.png";
    break;
    case 4:
      document.getElementById("sombras").src = "../statics/media/img/scuatro.png";
    break;
    case 5:
      document.getElementById("sombras").src = "../statics/media/img/scinco.png";
    break;
     default:
     document.getElementById("sombras").src = "../statics/media/img/nadie.png";
    break;
    }
    upDateTotalCrew()

}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    upDateTotalCrew()
}
var crew = [];
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var count = crew.push(title);
    console.log(count);
    console.log(crew);

    switch (crew.length) {
      case 1:
      document.getElementById("sombras").src = '../statics/media/img/suno.png';
    break;
      case 2:
      document.getElementById("sombras").src = '../statics/media/img/sdos.png';
    break;
    break;
      case 3:
      document.getElementById("sombras").src = "../statics/media/img/stres.png";
    break;
    case 4:
      document.getElementById("sombras").src = "../statics/media/img/scuatro.png";
    break;
    case 5:
      document.getElementById("sombras").src = "../statics/media/img/scinco.png";
      var cartItems = document.getElementsByClassName('cart-items')[0]
      var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
      for (var i = 0; i < cartItemNames.length; i++) {
          if (cartItemNames[i].innerText == title) {
              crew.pop();
              error = document.getElementById("congrat");
              deletebtn=document.getElementById("YES")
              deletebtn.remove()
              error.innerText="Already in your team";
              error.style.textAlign = "right"
              modal.style.display = "block";
              return
            }else {
              modal.style.display = "block";
              console.log(crew);
              let correctcrew = ["Akira", "Luca", "Renee","Zasha","Cameron"];
              let arrTwo = crew;
              let result =
                correctcrew.length === arrTwo.length &&
                correctcrew.every(function (element) {
                  return arrTwo.includes(element);
                });
              if (result){
                modal.style.display = "block";
                window.location.href = "./intro3.html";

              }else{
                error = document.getElementById("congrat");
                deletebtn=document.getElementById("YES")
                deletebtn.remove()
                var quotes = [
                 "Your crew doesn't fulfill all the requirements",
                 "Remember you need a multidisciplinary crew",
                 "Not really, don't give up",
                 "In space you might need some medical help",
                 "Space jail, really?",
                 "Getting married?",
                 ];
                 var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
                error.innerText=q;
                modal.style.display = "block";
                //window.setTimeout(function(){location.reload()},1000)

                return;
                


              }
            }
          }
      break;
      default:
      document.getElementById("sombras").src = "../statics/media/img/nadie.png";
      break;










    }

    addCrew(title, price)
    upDateTotalCrew()
}



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}













function addCrew(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            crew.pop();
            console.log(crew);
            error = document.getElementById("congrat");
            deletebtn=document.getElementById("YES")
            deletebtn.remove()
            error.innerText="Already in your team";
            error.style.textAlign = "right"
            modal.style.display = "block";
            switch (crew.length) {
              case 1:
              document.getElementById("sombras").src = '../statics/media/img/suno.png';
            break;
              case 2:
              document.getElementById("sombras").src = '../statics/media/img/sdos.png';
            break;
            break;
              case 3:
              document.getElementById("sombras").src = "../statics/media/img/stres.png";
            break;
            case 4:
              document.getElementById("sombras").src = "../statics/media/img/scuatro.png";
            break;
            case 5:
              document.getElementById("sombras").src = "../statics/media/img/scinco.png";
            break;
             default:
             document.getElementById("sombras").src = "../statics/media/img/nadie.png";
            break;
            }
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">

            <span id="teamname" class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
}

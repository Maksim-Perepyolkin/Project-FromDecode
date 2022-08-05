
let div = document.querySelector(".modal-window")

function openModal(){
    div.classList.add("active")
}

function closeModal(){
    div.classList.remove("active")
}





let burger = document.querySelector(".burger-menu")

function openBurger(){
    burger.classList.add("active2")
}


function closeBurger(){
    burger.classList.remove("active2")
}





let block2 = document.querySelector(".middle-item-2-block-2")
let button1 = document.querySelector(".button-1-block-2")
let button2 = document.querySelector(".button-2-block-2")

function openDiv(){
    block2.classList.add("active-block-2")
    button1.classList.add("active-block-2")
    button2.classList.add("active-block-2")
}

function closeDiv(){
    block2.classList.remove("active-block-2")
    button1.classList.remove("active-block-2")
    button2.classList.remove("active-block-2")
}










let people = [
    {
        name: "Igor",
        nomber: 87072344546 
    },
    {
        name: "Max",
        nomber: 123
    },
    {
        name: "Vova",
        nomber: 87714568723 
    },
    {
        name: "Masha",
        nomber: 87005671234
    }
]

let userName = document.getElementById("user-name")
let userNomber = document.getElementById("user-nomber")




function check(){
    people.filter((user) => user.name == userName.value && user.nomber == userNomber.value).length > 0 ? alert("Вы уже зарегистрированны") : alert("Вы незарегистрированны")
}









const words = [
    'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
    
]

const output = document.getElementById("print")

let wordTurn = 0
let charTurn = 0

printWord()

function printWord(){
    if(charTurn <= words[wordTurn].length){
        let str = words[wordTurn].substring(0, charTurn)
        output.innerHTML = str
        charTurn +=1

        setTimeout(printWord, 80)
    }else{
        setTimeout(deleteWord, 700)
    }
}

function deleteWord(){
    if(charTurn >= 0){
        let str = words[wordTurn].substring(0, charTurn)
        output.innerHTML = str
        charTurn--
        setTimeout(deleteWord, 30)
    }else{
        wordTurn +=1
        if(wordTurn >= words.length){
            wordTurn = 0
        }
        setTimeout(printWord, 100)
    }
}



$('.block-5').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });


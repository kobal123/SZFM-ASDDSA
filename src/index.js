const ZERO = document.getElementById("0");
const ONE = document.getElementById("1");
const TWO = document.getElementById("2");
const THREE = document.getElementById("3");
const FOUR = document.getElementById("4");
const FIVE = document.getElementById("5");
const SIX = document.getElementById("6");
const SEVEN = document.getElementById("7");
const EIGHT = document.getElementById("8");
const NINE = document.getElementById("9");

const DEL = document.getElementById("delete");
const CLEAR = document.getElementById("clear");
const CLEAR_ENTRY = document.getElementById("clear-entry");
const PI_ = document.getElementById("pi")

const pi = Math.PI.toFixed(5);

const RESULT = document.getElementById("result");
let wasConstantClicked = false;


const numbers = document.getElementsByClassName("number");
Array.from(numbers).forEach(
    number =>{
        number.addEventListener('click',
        ()=>{
            if(RESULT.innerText === '0'){
                if(number.innerText === '0')
                    return
                else{

                    RESULT.innerText = number.innerText;
                }
            }else{
                if(wasConstantClicked){
                    RESULT.innerText = number.innerText;
                    wasConstantClicked = false;
                }
                else
                    RESULT.innerText += number.innerText;
            }
        });
    }
);




CLEAR_ENTRY.addEventListener("click",()=>{
    RESULT.innerText = "0";
})

CLEAR.addEventListener("click",()=>{
    RESULT.innerText = "0";
})

DEL.addEventListener("click",()=>{
    const old_len = RESULT.innerText.length;
    RESULT.innerText = RESULT.innerText.substring(0,old_len-1);
})

PI_.addEventListener("click",()=>{

    RESULT.innerText = pi.toString();
    wasConstantClicked = true;
});

EULER.addEventListener("click",()=>{
    RESULT.innerText = Math.E.toFixed(5).toString();
    wasConstantClicked = true;
})

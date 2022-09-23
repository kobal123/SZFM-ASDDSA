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
const PI_ = document.getElementById("pi");
const EULER = document.getElementById("euler");

const equalsBtn = document.getElementById("equals");
const pi = Math.PI.toFixed(5);

const RESULT = document.getElementById("results");
const PREVIOUS_ENTRY = document.getElementById("previous-entry");

let wasConstantClicked = false;
let currentOperation = "";
let computation_finished = false;
let beforeComputation = false;

let calculatorHistory = [];

const numbers = document.getElementsByClassName("number");
Array.from(numbers).forEach(
    number =>{
        number.addEventListener('click',
        ()=>{
            if(computation_finished){
                clearDisplay();
                clearCurrentInput();
                resetVariables();
            }
            
            if(beforeComputation){
                clearCurrentInput();
                beforeComputation = false;
            }
            

            if(RESULT.innerText === '0'){
                if(number.innerText === '0')
                    return
                else{

                    RESULT.innerText = number.innerText;
                }
            }else{
                if(wasConstantClicked || computation_finished){
                    RESULT.innerText = number.innerText;
                    wasConstantClicked = false;
                }
                else
                    RESULT.innerText += number.innerText;
            }
        computation_finished = false;
        });
    }
);

function clearDisplay(){
    console.log("clearing the display");
    PREVIOUS_ENTRY.innerText = "";
    computation_finished = false;
    currentOperation = '';
}

function resetVariables(){
    wasConstantClicked = false;
    currentOperation = "";
    computation_finished = false;
    beforeComputation = false;
}

function clearCurrentInput(){
    RESULT.innerText = "";
}


const operations = document.getElementsByClassName("operator");

Array.from(operations).forEach(operation =>{
    operation.addEventListener("click",(e)=>{
    currentOperation = operation.innerText;
    PREVIOUS_ENTRY.innerText = RESULT.innerText+" "+ currentOperation+ " ";
    beforeComputation = true;
    computation_finished = false;
    console.log(currentOperation);
    });
})

equalsBtn.addEventListener("click",()=>{
    console.log("clicked")
    applyOperation();
})

const applyOperation = () =>{
    if(currentOperation === ""){
        console.log("returning")
        return;
    }
    let computation = 0;

    let prev = parseFloat(PREVIOUS_ENTRY.innerText)
    let current = parseFloat(RESULT.innerText)

    if(computation_finished){
        prev = parseFloat(RESULT.innerText);
        current = parseFloat(PREVIOUS_ENTRY.innerText.split(/[\s,]+/)[2]);
        console.log(`${prev} ${current}`);
    }

    switch (currentOperation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '/':
            computation = prev / current
            break
        default:
            return
        }
    
        if(computation_finished){
            PREVIOUS_ENTRY.innerText = `${prev} ${currentOperation} ${current} =`;
            RESULT.innerText = computation.toString();
            addToHistory({
                "operation":PREVIOUS_ENTRY.innerText,
                "result":computation
            });        
            return;
        }
        PREVIOUS_ENTRY.innerText += " " + RESULT.innerText + " " + "="; 
        RESULT.innerText = computation.toString();
        computation_finished = true;
        addToHistory({
            "operation":PREVIOUS_ENTRY.innerText,
            "result":computation
        });        
        
}

function addToHistory(history){

    if(calculatorHistory.length == 3){
        calculatorHistory = calculatorHistory.slice(1,3);
    }
    calculatorHistory.push(history);
    console.table(calculatorHistory);
}

CLEAR_ENTRY.addEventListener("click",()=>{
    RESULT.innerText = "0";
    if(computation_finished){
        PREVIOUS_ENTRY.innerText = "";
        resetVariables();
    }
})

CLEAR.addEventListener("click",()=>{
    RESULT.innerText = "0";
    PREVIOUS_ENTRY.innerText = "";
    resetVariables();
})

DEL.addEventListener("click",()=>{
    if(wasConstantClicked){
        return;
    }
    const old_len = RESULT.innerText.length;
    if(old_len -1== 0){
        RESULT.innerText = "0";
        return;
    }
    RESULT.innerText = RESULT.innerText.substring(0,old_len-1);
    
})

PI_.addEventListener("click",()=>{

    RESULT.innerText = Math.PI.toFixed(5).toString();
    wasConstantClicked = true;
});

EULER.addEventListener("click",()=>{
    RESULT.innerText = Math.E.toFixed(5).toString();
    wasConstantClicked = true;
})


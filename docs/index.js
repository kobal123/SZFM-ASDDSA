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
const MOD = document.getElementById("mod");
const CARET = document.getElementById("^");
const DIVISON = document.getElementById("/");
const MULTIPLY = document.getElementById("*");
const ADDITION = document.getElementById("+");
const ROOT = document.getElementById("root");
const DEDUCTION = document.getElementById("-");

const equalsBtn = document.getElementById("equals");
const pi = Math.PI.toFixed(5);

const RESULT = document.getElementById("results");
const PREVIOUS_ENTRY = document.getElementById("previous-entry");
const HISTORY_DATA = document.getElementById("history-data");
const DOT = document.getElementById("dot");
const NEGATE = document.getElementById("plus-minus");

const MATH_FUNCTIONS = document.getElementsByClassName("function");

let wasConstantClicked = false;
let currentOperation = "";
let computation_finished = false;
let beforeComputation = false;
let errorHappened = false;
let currentMathFunction = "";

let calculatorHistory = [];

const numbers = document.getElementsByClassName("number");
Array.from(numbers).forEach(
    number =>{
        number.addEventListener('click',
        ()=>{
            enbalesOperationsFunctions();
            if(computation_finished){
                clearDisplay();
                clearCurrentInput();
                resetVariables();
            }
            if(beforeComputation){
                clearCurrentInput();
                beforeComputation = false;
            }
            
            if(RESULT.innerText.length==15){
                return;
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

function errorAnimation(errorMsg){
    RESULT.innerText = errorMsg;
      document.getElementById('results').animate([
        {color: 'red'},
        {transform: 'translateX(-5%)'},
        {transform: 'translateX(5%)'},
        {transform: 'translateX(0%)'}
      ], {
        duration: 1000,
        iterations: 1
      })
}

function clearDisplay(){
    console.log("clearing the display");
    PREVIOUS_ENTRY.innerText = "???";
    computation_finished = false;
    currentOperation = '';
}

function resetVariables(){
    wasConstantClicked = false;
    currentOperation = "";
    computation_finished = false;
    beforeComputation = false;
    errorHappened = false;
    PREVIOUS_ENTRY.innerText = "???";
}

function clearCurrentInput(){
    RESULT.innerText = "";
}

function enbalesOperationsFunctions() {
    MOD.classList.remove('disabled');
    CARET.classList.remove('disabled');
    DIVISON.classList.remove('disabled');
    MULTIPLY.classList.remove('disabled');
    ADDITION.classList.remove('disabled');
    ROOT.classList.remove('disabled');
    DEDUCTION.classList.remove('disabled');
    EULER.classList.remove('disabled');
    PI_.classList.remove('disabled');
    NEGATE.classList.remove('disabled');
    DOT.classList.remove('disabled');
}

function disablesOperationsFunctions() {
    MOD.classList.add('disabled');
    CARET.classList.add('disabled');
    DIVISON.classList.add('disabled');
    MULTIPLY.classList.add('disabled');
    ADDITION.classList.add('disabled');
    ROOT.classList.add('disabled');
    DEDUCTION.classList.add('disabled');
    EULER.classList.add('disabled');
    PI_.classList.add('disabled');
    NEGATE.classList.add('disabled');
    DOT.classList.add('disabled');
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
            if(current == 0){
                //clearCurrentInput();
                clearDisplay();
                
                //RESULT.innerText = "Null??val nem lehet osztani";
                errorAnimation("Null??val nem lehet osztani");
                
                disablesOperationsFunctions();
                
                resetVariables();
                computation_finished=true;
                errorHappened = true;
                return;
            }
            computation = prev / current
            break;
        case 'mod':
            computation = prev % current;
            break;
        case '^':
            computation = Math.pow(prev,current);
            break;
        default:
            return
        }
    
        if(!Number.isInteger(computation)){
        computation = computation.toFixed(5);
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

        if(RESULT.innerText === 'NaN'){
            clearDisplay();
                
            errorAnimation("Nem egy sz??m!");
            
            resetVariables();
            computation_finished=true;    
            return;
        }

        computation_finished = true;
        addToHistory({
            "operation":PREVIOUS_ENTRY.innerText,
            "result":computation
        });        
        
}

function renderHistoryData(){
    HISTORY_DATA.innerHTML = "";
    
    calculatorHistory.slice().reverse().forEach(data =>{
        console.log("adding elements")

        let data_element = document.createElement('div');
        let prev = document.createElement('div');
        let result = document.createElement('div');
        prev.innerText = data['operation'];
        result.innerText = data['result'];

        data_element.appendChild(prev);
        data_element.appendChild(result);
        data_element.classList.add("history-data-entry");
        

        HISTORY_DATA.appendChild(data_element);
        console.table(HISTORY_DATA.children)
    });
}

function addToHistory(history){

    if(calculatorHistory.length == 15){
        calculatorHistory = calculatorHistory.slice(1,15);
    }
    calculatorHistory.push(history);
    console.table(calculatorHistory);
    renderHistoryData();

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
    if(old_len == 2 && RESULT.innerText[0] === "-"){
        RESULT.innerText = "0";
        return;
    }
    
    if(old_len -1== 0 ){
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


DOT.addEventListener("click", (e)=>{
    if(RESULT.innerText.includes(".")){
        return;
    }
    RESULT.innerText += ".";

});


Array.from(MATH_FUNCTIONS).forEach(button =>{
    button.addEventListener("click",(e)=>{
        
        applyMathFunction(button.innerText);
    })
})



function applyMathFunction(mathFunction) {

    computation = 0;
    current = RESULT.innerText;
    computation_finished = false;

    if (currentMathFunction === "") {
        console.log(mathFunction);
    }
    
    if(computation_finished){
        clearDisplay();
        clearCurrentInput();
        resetVariables();
    }

    switch (mathFunction) {
        case "???":
            computation = Math.sqrt(RESULT.innerText);
            break;
        default:
            return;
    }

    if (parseFloat(RESULT.innerText) < 0) {
        
        clearDisplay();
                
        errorAnimation("Gy??k alatt negat??v sz??m!");
        
        resetVariables();
        computation_finished=true;    
        disablesOperationsFunctions();
        return;
    }

    if (!Number.isInteger(computation)) {
        computation = computation.toFixed(5);
    }

    PREVIOUS_ENTRY.innerText = ` ${mathFunction} (${current}) =`;
    RESULT.innerText =  computation.toString();
    addToHistory({
        "operation": PREVIOUS_ENTRY.innerText,
        "result": computation
    });
    computation_finished = true;
    return;
}


NEGATE.addEventListener("click", (e)=>{

    if(RESULT.innerText === "0"){
        return;
    }


    if(RESULT.innerText[0] === "-"){
        RESULT.innerText = RESULT.innerText.slice(1,RESULT.innerHTML.length);
    }else{
        RESULT.innerText = "-" + RESULT.innerText;
    }
})
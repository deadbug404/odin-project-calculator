//getting all the dom elements
let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.display-value');
let totalScreen = document.querySelector('.total-value');
let operator = '';


buttons.forEach(button => {
    let id = button.id;
    if(id == 'del'){
        button.addEventListener('click',del);
    }else if(id == 'clear'){
        button.addEventListener('click',clr);
    }else{
        button.addEventListener('click',display);
    }
});


function add(x,y){
    totalScreen.textContent = x+y;
}

function substract(x,y){
    totalScreen.textContent = x-y;
}

function multiply(x,y){
    totalScreen.textContent = x*y;
}

function divide(x,y){
    totalScreen.textContent = x/y;
}

function operate(operator,num1,num2){
    if(operator == '+'){
        add(num1,num2);
    }else if(operator == '-'){
        substract(num1,num2);
    }else if(operator == '*'){
        multiply(num1,num2);
    }else if(operator == '/'){
        divide(num1,num2);
    }
}

function display(e){
    let value = e.target.id;
    let currentValue = parseInt(screen.textContent);
    if(screen.textContent.length < 23){
        if(parseInt(screen.textContent) == 0){
            if(isNaN(value)){
            }else{
                screen.textContent = value;
            }
        }else{
            if(isNaN(value)){
                if(operator == ''){
                    operator = value;
                    totalScreen.textContent = screen.textContent + " " + value;
                    screen.textContent = 0;
                }else{
                    let numberOperatorArray = totalScreen.textContent.split(' ');
                    let lastValue = parseInt(numberOperatorArray[0]);
                    operate(operator,lastValue,currentValue);
                    totalScreen.textContent += ` ${value}`;
                    operator = value;
                    screen.textContent = 0;
                }

            }else{
                screen.textContent += value;  
            }
        }
    }else{
        alert('Maximum limit reached');
    }
    
}

function del(){
    let newString = screen.textContent.substring(0,screen.textContent.length-1);
    if(screen.textContent.length == 1){
        screen.textContent = newString;
        screen.textContent = 0;
    }else{
        screen.textContent = newString;
    }
}

function clr(){
    screen.textContent = '0';
    totalScreen.textContent = '';
    operator = '';
}
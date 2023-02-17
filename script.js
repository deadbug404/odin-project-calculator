//getting all the dom elements
let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.display-value');
let totalScreen = document.querySelector('.total-value');


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
    return x+y;
}

function substract(x,y){
    return x-y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x/y;
}

function operate(operator,num1,num2){
    if(operator == '+'){
        add(num1,num2);
    }else if(operator == '-'){
        substract(num1,num2);
    }else if(operator == '*'){
        multiply(num1,num2);
    }else if(operator == "/"){
        divide(num1/num2);
    }else{
        alert('Invalid operator, only use (+) (-) (*) (/)');
    }
}

function display(e){
    let value = e.target.id;
    let prevTotal = parseInt(totalScreen.textContent);
    let total = parseInt(screen.textContent);
    if(screen.textContent.length < 23){
        if(value == '+' || value == '-' || value == '/' || value == '*'){
            totalScreen.textContent = total;
            screen.textContent = value;
        }else{
            if(total == 0) {
                screen.textContent = value;
            }else{
                if(Number.isInteger(parseInt(screen.textContent))){
                    screen.textContent += value;
                }else{
                    screen.textContent = value;
                }
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
}
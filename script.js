//getting all the dom elements
let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.display-value');
buttons.forEach(button => {
    button.addEventListener('click',display);
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
    let total = parseInt(screen.textContent);
    if(screen.textContent.length < 23){
        if(total == 0){
            screen.textContent = value;
        }else{
            screen.textContent += value;
        }
    }else{
        alert('Maximum limit reached');
    }
    
}
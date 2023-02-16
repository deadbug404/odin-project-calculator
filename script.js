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
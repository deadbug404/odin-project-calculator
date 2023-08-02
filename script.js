const bottomScreen = document.querySelector('.bottom-screen');
const topScreen = document.querySelector('.top-screen');
const buttons = document.querySelectorAll('button');

let firstNum = 0;
let secondNum = 0;
let previousOp = '';
let currentOp = '';

buttons.forEach(b => {
    b.addEventListener('click', e => {
        let value = e.target.textContent;
        if(value == 'Clear'){
            clear();
        }else if(value == 'Delete'){
            del();
        }else if(!(isNaN(value))){
            if(bottomScreen.textContent == '0' && value == '0'){
            }else{
                (bottomScreen.textContent == '0') ? bottomScreen.textContent='' : console.log();
                bottomScreen.textContent += value;
            }        
        }else{
            assignValues(value);
        }
    });
});


function assignValues(value){
    if(!(topScreen.textContent)){
        if(value == '='){
        }else{
            firstNum = parseInt(bottomScreen.textContent);
            previousOp = value;
            topScreen.textContent = `${firstNum} ${previousOp}`;

            bottomScreen.textContent = '';
        }
    }else{
        let tempVal = topScreen.textContent.split(' ');

        if(tempVal.length == 1){
            if(value == '='){
            }else{
                topScreen.textContent += ` ${value}`;
            }
        }else{
            if(value == '=' && isNaN(parseInt(bottomScreen.textContent))){
            }else{
                firstNum = parseInt(tempVal[0]);
                secondNum = parseInt(bottomScreen.textContent);
                previousOp = tempVal[1];
                currentOp = value;

                switch(currentOp){
                    case '=':
                        topScreen.textContent = equal(firstNum,previousOp,secondNum);
                        break;
                    case '+':
                    case '-':
                    case 'x':
                    case '/':
                        topScreen.textContent = `${equal(firstNum,previousOp,secondNum)} ${currentOp}`;
                        break;
                }
            }   
        }
        bottomScreen.textContent = '';
    }
}

function equal(num1,operator,num2){
    return (isNaN(secondNum)) ? `${num1}` :
    (operator == '+') ? num1 + num2 :
    (operator == '-') ? num1 - num2 :
    (operator == 'x') ? num1 * num2 :
    (operator == '/') ? num1 / num2 :
    console.log('undefined operator');
}

function clear(){
    topScreen.textContent = '';
    bottomScreen.textContent = '0';
}

function del(){
    bottomScreen.textContent = bottomScreen.textContent.slice(0, bottomScreen.textContent.length -1);
}

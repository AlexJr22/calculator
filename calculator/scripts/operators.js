function insertOperators(num){

  const lastOperator = displayCalculator.innerHTML[displayCalculator.innerHTML.length - 1];
  
  if (lastOperator == '+'|| lastOperator == '-' || lastOperator == '*' || lastOperator == "/") {

    displayCalculator.innerHTML = displayCalculator.innerHTML.substring(0, displayCalculator.innerHTML.length -1)

    displayCalculator.innerHTML += num

  } else{

    displayCalculator.innerHTML += num

  }
}

function result(){

  if(eval(displayCalculator.innerHTML) == undefined){

    displayCalculator.innerHTML += ''

  }else{

    displayCalculator.innerHTML = eval(displayCalculator.innerHTML)

  }
}
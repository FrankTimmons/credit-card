function cardValidator(number){
  const numberArray = number.split("");
  console.log(numberArray);
  if (!Number(number)){
    return "Put a number in, please";
  }else if(Number(number) && number.length != 16){
    return "Your number is not the correct length";
  }else if(Number(number) && number.length === 16){
    numberArray.forEach(function(number){})
    return luhns(numberArray);
  }
}

function luhns(input) {
  let finalSum = 0;
  let newArray = [];
  for (let i = input.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      newArray.unshift(input[i]);
    }else{
      if((input[i]*2) > 9){
        newArray.unshift(((input[i]*2) - 10) + 1);
      }else{
        newArray.unshift(input[i]*2);
      }
    }
  }
  console.log(newArray);
  
  newArray.forEach(function(number){
  	finalSum += number;
  });
  
 	if(finalSum % 10 == 0){
    console.log(finalSum);
  }else {
    console.log("not a valid credit card number");
  }
}


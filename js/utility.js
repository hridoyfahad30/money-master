function inputAmount(inputId) {
  const input = document.getElementById(inputId);
  const inputString = input.value;
  const inputAmount = parseFloat(inputString);
  return inputAmount;
}

function textAmount(elementId) {
  const text = document.getElementById(elementId);
  const textString = text.innerText;
  const textAmount = parseFloat(textString);
  return textAmount;
}

function displayBlock(elementId) {
  const block = document.getElementById(elementId);
  block.style.display = "block";
}

function displayNone(elementId) {
  const none = document.getElementById(elementId);
  none.style.display = "none";
}

function calculateButtonCode (){
  const totalIncomeString = (inputAmount("incomeFild")).toFixed(2);
  const totalIncomeNumber = parseFloat(totalIncomeString);
  if(isNaN(totalIncomeNumber)){
    displayBlock ('incomeErr');
    return;
  }
  else{
    displayNone('incomeErr');
  }

  const foodExpense = inputAmount("foodExpense").toFixed(2);
  const foodExpenseNumber = parseFloat(foodExpense);

  if(isNaN(foodExpenseNumber)){
    displayBlock ('foodErr');
    return;
  }
  else{
    displayNone('foodErr');
  }

  const rentExpense = inputAmount("rentExpense").toFixed(2);
  const rentExpenseNumber = parseFloat(rentExpense);

  if(isNaN(rentExpenseNumber)){
    displayBlock ('rentErr');
    return;
  }
  else{
    displayNone('rentErr');
  }

  const clotheExpense = inputAmount("clotheExpense").toFixed(2);
  const clotheExpenseNumber = parseFloat(clotheExpense);

  if(isNaN(clotheExpenseNumber)){
    displayBlock ('clotheErr');
    return;
  }
  else{
    displayNone('clotheErr');
  }

  const totalExpensesElement = document.getElementById("totalCost");
  const totalExpenseString = (foodExpenseNumber + rentExpenseNumber + clotheExpenseNumber).toFixed(2);
  const totalExpenseAmount = parseFloat(totalExpenseString);
  const balanceAfetrExpenceString = (totalIncomeNumber - totalExpenseAmount).toFixed(2);
  const balanceAfetrExpence = parseFloat(balanceAfetrExpenceString);


  if(totalExpenseAmount > totalIncomeNumber){
    displayBlock ('expErr');
    return;
  }
  else{
    displayNone('expErr');
  }
  

  totalExpensesElement.innerText = totalExpenseAmount;

  const balance = document.getElementById("balance");

  balance.innerText = (balanceAfetrExpence);

    return balance;
}

function saveButtonCode(){
  const savingElement = document.getElementById("savingsPercent");
  const remainElement = document.getElementById("remainBalance");
  const totalBalanceF = textAmount("balance");

  const percent = (inputAmount("savefild") / 100) * inputAmount("incomeFild");
  
  if(percent > totalBalanceF){
    displayBlock ('saveErr');
    return;
  }
  else{
    displayNone('saveErr');
  }

  const savingAmount = (savingElement.innerText = percent);

  const remainAmount = totalBalanceF - savingAmount;
  remainElement.innerText = remainAmount;
}
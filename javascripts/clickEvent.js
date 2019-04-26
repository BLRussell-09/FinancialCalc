function buttonClick()
{
   var button = document.getElementById('totalButton')
   button.addEventListener("click", grossTotal)
}

function grossTotal()
{
  var gross = document.getElementById('grossAmount').value * 1;
  var federalWith = document.getElementById('federalWith').value * 1;
  var stateWith = document.getElementById('stateWith').value * 1;
  var fee = document.getElementById('fee').value * 1;
  var sum = (gross * federalWith /100) + (gross * stateWith / 100) + fee + gross;
  var total = document.getElementById('total');
  total.value = sum.toFixed(2);
}

function initializer()
{
  buttonClick();
}

exports.data = initializer;
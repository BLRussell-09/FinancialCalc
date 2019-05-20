function buttonClick()
{
   var button = document.getElementById('totalButton')
   button.addEventListener("click", netTotal)
}

function netTotal()
{
  var desiredNet = document.getElementById('desNet').value * 1;
  var federalWithholdings = document.getElementById('federalWith').value * 1;
  var stateWithholdings = document.getElementById('stateWith').value * 1;
  var totalWithholdings = (federalWithholdings + stateWithholdings);
  var total = document.getElementById('total');
  totalWithholdings = 1 - (totalWithholdings / 100);
  var sum = desiredNet / totalWithholdings;
  total.value = sum.toFixed(2)
}

function initializer()
{
  buttonClick();
}

exports.data = initializer;
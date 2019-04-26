function buttonClick()
{
   var button = document.getElementById('totalButton')
   button.addEventListener("click", netTotal)
}

function netTotal()
{
  var desiredNet = document.getElementById('desNet').value * 1;
  var withholdings = document.getElementById('totalWith').value * 1;
  var fee = document.getElementById('fee').value * 1;
  var total = document.getElementById('total');
  withholdings = 1 - (withholdings / 100);
  var sum = desiredNet / withholdings;
  sum = sum + fee
  total.value = sum.toFixed(2)
}

function initializer()
{
  buttonClick();
}

exports.data = initializer;
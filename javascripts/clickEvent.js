function buttonClick()
{
   var button = document.getElementById('totalButton')
   button.addEventListener("click", netTotal)
}

function netTotal()
{
  var desiredNet = document.getElementById('desNet').value * 1;
  var withholdings = document.getElementById('totalWith').value * 1;
  var stateWithholdings = document.getElementById('fee').value * 1;
  var totalWithholdings = (withholdings + stateWithholdings);
  //var fee = document.getElementById('fee').value * 1;
  var total = document.getElementById('total');
  console.log(totalWithholdings);
  totalWithholdings = 1 - (totalWithholdings / 100);
  var sum = desiredNet / totalWithholdings;
  console.log(totalWithholdings);
  total.value = sum.toFixed(2)
}

function initializer()
{
  buttonClick();
}

exports.data = initializer;
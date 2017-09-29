function revAdd(num) {
  return num + Number(num.toString().split('').reverse().join(''));
}

function palindrome(str) {
  str = str.toString();
  // str = str.replace(/[^a-z|0-9]/gi,'');
  //str = str.toLowerCase();
  var strMirrored = str.split('').reverse().join('');
  if (strMirrored == str) {
    return true;
  }
  return false;
}

function oneNineSix(num, maxIt) {
  if (Number.isNaN(Number(num))) {
    $("#output").append("<br>'" + num + "'is not a number — Pls enter an Integer Number")
    return 0;
  };

  if (!Number.isInteger(num)) {
    num = parseInt(num);
  };

  var i = 0;
  var isPalindrome = palindrome(num);
  $("#output").append(num);

  while (!isPalindrome) {
    i++;
    num = revAdd(num);
    isPalindrome = palindrome(num);
    $("#output").append("<br>" + num);
    if (i >= maxIt) {
      break;
    }
  };
  if (isPalindrome) {
    $("#output").append("<p>Palindrome found at i =" + i + "<\/p>");
  } else {
    $("#output").append("<p>No Palindrome found. i = " + i + "<\/p>");
  };
}

$(document).ready(function() {
  $("#start").on('click', function() {
    $("#output").html("<br>");
    var num = document.getElementById('inputNumber').value;
    var itMax = document.getElementById('itMax').value;
    oneNineSix(num, itMax);
  })
});
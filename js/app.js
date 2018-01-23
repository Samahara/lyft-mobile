var $inputPhone = $('#icon_telephone');
var $nextButton = $('#next_button');
var $nextButton2 = $('#next_button2');
var $form = $('#form');
var number = 0;
var $resendcode = $('#resend_code');
var $inputcode1 = $('#first_code');
var $inputcode2 = $('#second_code');
var $inputcode3 = $('#third_code');

function loadPage() {
  $('select').material_select();
  $inputPhone.keyup(validatePhone);
  $nextButton.click(message);
  $resendcode.click(message);
  $inputcode1.keyup(codeReady)
  $inputcode2.keyup(codeReady)
  $inputcode3.keyup(codeReady);
}

function validatePhone() {

  if($(this).val().trim().length > 2) {
    $nextButton.removeAttr("disabled");
    number = $inputPhone.val();
    saveNumber(number);
  } else {
    $nextButton.attr("disabled", true);
  }
  console.log(number);
}

function saveNumber(number) {
  console.log(number);
  var $containernumber = $('#number_user');

  $containernumber.text(number);
}

function message() {
  var $random = Math.random()*1000;
  var $code = Math.floor($random);
  var $lab = "LAB-" + $code;
  alert("Tu código: " + $lab);
}

function codeReady() {
  if($(this).val().trim().length > 0) {
    $nextButton2.removeAttr("disabled");

  } else {
    $nextButton2.attr("disabled", true);
  }
}


$(document).ready(loadPage);

function validateForm() {
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('email');
  var message = document.getElementById('message');

  var firstnameError = document.getElementById('firstnameError');
  var lastnameError = document.getElementById('lastnameError');
  var emailError = document.getElementById('emailError');
  var messageError = document.getElementById('messageError');

  var formError = document.getElementById('formError');

  var inputs = [{ field: firstname, error: firstnameError }];
  inputs.push({ field: lastname, error: lastnameError });
  inputs.push({ field: email, error: emailError });
  inputs.push({ field: message, error: messageError });

  var isValid = true;

  for (i = 0; i < inputs.length; i++) {
    if (validateField(inputs[i].field, inputs[i].error)) {
      hideError(inputs[i].error);
    } else {
      isValid = false;
      showError(inputs[i].error);
    }
  }

  if (isValid) {
    hideError(formError);
    alert('Thank you. The Form has been submitted');
  } else {
    showError(formError);
  }
  return isValid;
}

function hideError(error) {
  error.classList.add('d-none');
}
function showError(error) {
  error.classList.remove('d-none');
}

function validateField(input, error) {
  return input.value.length >= 3;
}

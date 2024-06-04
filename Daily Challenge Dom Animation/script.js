const inputField = document.getElementById("letter-input");

inputField.addEventListener("keypress", (event) => {
  const keyCode = event.which || event.keyCode;
  const isLetter = (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122);

  if (!isLetter) {
    event.preventDefault();
  }
});
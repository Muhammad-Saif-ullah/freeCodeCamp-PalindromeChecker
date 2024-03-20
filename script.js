const inputEl = document.getElementById('text-input');
const checkBtnEl = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

// A function that removes the non-alphabets from a string
const removeNonAlphabets = str => {
  let newStr = str.replace(/[^a-zA-Z0-9]/g,'');
  return newStr.toLowerCase();
}

// A function that checks whether a provided string is a palindrome or not
const checkPalindrome = str => {
  if (str.length === 1) {
    return true;
  }
  else {
    const onlyAlphabetStr = removeNonAlphabets(str);
    const reversedStr = onlyAlphabetStr.split('').reverse().join('');
    
    return reversedStr === onlyAlphabetStr;
  }
}

// A function that is called when the check button is clicked
const checkBtnClicked = () => {
  const inputValue = inputEl.value;

  if (inputValue.length === 0) {
    alert("Please input a value");
  }
  else {
    const palindromeResult = checkPalindrome(inputValue);
    resultEl.textContent = inputValue + " is " + (palindromeResult? "" : "not ") + "a palindrome";

    inputEl.value = "";
  }
}

checkBtnEl.addEventListener('click', checkBtnClicked);

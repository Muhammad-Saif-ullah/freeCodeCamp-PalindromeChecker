const inputEl = document.getElementById('text-input');
const checkBtnEl = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

const removeNonAlphabets = str => {
  let newStr = str.replace(/[^a-zA-Z0-9]/g,'');
  return newStr.toLowerCase();
}

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
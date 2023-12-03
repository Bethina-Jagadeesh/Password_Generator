document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;
  
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    let validChars = '';
    if (useUppercase) validChars += uppercaseChars;
    if (useLowercase) validChars += lowercaseChars;
    if (useNumbers) validChars += numberChars;
    if (useSymbols) validChars += symbolChars;
  
    if (validChars === '') {
      alert('Please select at least one option (Uppercase, Lowercase, Numbers, or Symbols).');
      return;
    }
  
    const password = generatePassword(length, validChars);
    document.getElementById('output').textContent = password;
  });
  
  function generatePassword(length, characters) {
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    return password;
  }
  
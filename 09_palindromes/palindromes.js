const palindromes = function (word) {
    // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

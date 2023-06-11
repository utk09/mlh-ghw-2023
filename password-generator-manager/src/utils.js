// Function to generate a random password
export function generateRandomPassword(length) {
  const words = [
    "Abyssinian",
    "American Bobtail",
    "American Curl",
    "American Shorthair",
    "American Wirehair",
    "Balinese",
    "Bengal",
    "Fiesta",
    "Focus",
    "Taurus",
    "Mustang",
    "Explorer",
    "Expedition",
    "F-150",
    "Model T",
    "Ranchero",
    "Volt",
    "Cruze",
    "Malibu",
    "Impala",
    "Camaro",
    "Corvette",
    "Colorado",
    "Silverado",
  ];
  const specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];

  let password = "";

  // Generate a random word from the words array
  const randomWord = words[Math.floor(Math.random() * words.length)];
  password += randomWord;

  // Generate a random number
  const randomNumber = Math.floor(Math.random() * 10);
  password += randomNumber;

  // Generate a random special character
  const randomCharacter =
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  password += randomCharacter;

  // Generate the remaining characters
  const remainingLength = length - 3;
  const characters = words.join("") + randomNumber + specialCharacters.join("");
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  // Remove whitespace, if any
  password = password.replace(/ +/g, "");

  // Shuffle the password characters
  let shuffledPassword = shuffleString(password);

  shuffledPassword = shuffledPassword.slice(0, length);

  // Check if the shuffled password contains at least one number and one special character
  const hasNumber = /\d/.test(shuffledPassword);
  const hasSpecialCharacter = /[!@#$%&*]/.test(shuffledPassword);

  // If the password doesn't meet the requirements, generate a new password
  if (!hasNumber || !hasSpecialCharacter) {
    return generateRandomPassword(length);
  }

  return shuffledPassword;
}

// Function to shuffle the characters of a string
function shuffleString(string) {
  // Variable to hold the shuffled string
  let shuffledString = "";

  // Convert the string to an array of characters
  string = string.split("");

  // Shuffle the characters using Fisher-Yates algorithm
  while (string.length > 0) {
    shuffledString += string.splice(
      Math.floor(Math.random() * string.length),
      1
    );
  }

  // Return the shuffled string
  return shuffledString;
}

// URL Pattern to check whether valid URL
// const urlPattern = /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/\S*)?$/;

// URL Pattern to accomodate ghw.mlh.io
const urlPattern = /^(?:https?:\/\/)?(?:www\.)?(?:[a-zA-Z0-9-]+\.)+(?:com|io|ghw\.mlh\.io)(?:\/\S*)?$/;

export function isValidUrl(url) {
  return urlPattern.test(url);
};
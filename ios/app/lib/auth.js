import { AlertIOS } from 'react-native';

export function inputIsValid(input) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  console.log(emailRegex.test(input.email));

  if (!input.email.trim() || !input.password.trim() || !input.confirmPassword.trim()) {
    AlertIOS.alert('Fill out all form fields', 'One or more of your fields is empty');

    return false;
  }
  else if (input.password !== input.confirmPassword) {
    AlertIOS.alert('Passwords do not match', 'Check make sure your passwords are the same');

    return false;
  }
  else if (input.country === 'home country') {
    AlertIOS.alert('Home country not selected', 'Please select your home country by pressing the "home country" button');

    return false;
  }
  else if (!emailRegex.test(input.email)) {
    AlertIOS.alert('Invalid email', 'Example: valid-email@example.com');

    return false;
  }
  else if (input.username.length < 3) {
    AlertIOS.alert('Username under 3 characters', 'Your username seems to be Get more creative with your username!');

    return false;
  }
  else if (input.password.length < 8) {
    AlertIOS.alert('Password under 8 characters', 'For added security please make sure your password is 8+ characters, containing numbers (0-9) and symbols (!@#)');

    return false;
  }
}




export function isIncomplete(email, password, confirmPassword) {
  if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
    return true;
  }

  return false;
}

export function notMatching(password, confirmPassword) {
  if (password !== confirmPassword) {
    return true;
  }

  return false;
}

export function defaultCountry(country) {
  if (country === 'home country') {
    return true;
  }

  return false;
}

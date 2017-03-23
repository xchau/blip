import { AlertIOS, AsyncStorage } from 'react-native';

export async function storeJwt(item, jwt) {
  try {
    await AsyncStorage.setItem(item, jwt);
  }
  catch (err) {
    console.error(`AsyncStorage Error: ${err.message}`);
  }
};

export async function getJwt(item) {
  try {
    const token = await AsyncStorage.getItem(item);

    console.log(token);
  }
  catch (err) {
    console.error(`AsyncStorage Error: ${err.message}`);
  }
};

export function logInputIsValid(input) {
  if (!input.email.trim() && !input.password.trim()) {
    AlertIOS.alert('Missing credentials', 'Please fill out your email and password');

    return false;
  }
  if (!input.email.trim()) {
    AlertIOS.alert('Email field empty', 'Please fill out your email');

    return false;
  }
  else if (!input.password.trim()) {
    AlertIOS.alert('Password field empty', 'Please fill out your password');

    return false;
  }
  else {
    return true;
  }
}

export function regInputIsValid(input) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!input.email.trim() || !input.password.trim() || !input.confirmPassword.trim()) {
    AlertIOS.alert('Fill out all form fields', 'One or more of your fields is empty');

    return false;
  }
  else if (input.password !== input.confirmPassword) {
    AlertIOS.alert('Passwords do not match', 'Check make sure your passwords are the same');

    return false;
  }
  else if (!input.country) {
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
  else {
    return true;
  }
};

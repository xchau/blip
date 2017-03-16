export function validateLogin(email, password) {
  if (!this.state.email.trim()) {
    AlertIOS.alert('Please fill out your email.');
  }
  else if (!this.state.password.trim()) {
    AlertIOS.alert('Please fill out your password.');
  }
  else if (!this.state.email.trim() && !this.state.password.trim()) {
    AlertIOS.alert('Please sign in with your email and password.');
  }
}

export default class User {
  constructor(obj) {
    const { email, password } = obj;
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email');
    }

    if (!this.isValidPassword(password)) {
      throw new Error('Invalid password');
    }

    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  login() {
    return this.email.endsWith('@devmentor.pl');
  }

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  isValidPassword(password) {
    return password.length >= 6;
  }
}
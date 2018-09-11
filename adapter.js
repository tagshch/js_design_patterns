// PROBLEM

class FacebookAdapter {
  constructor() {
    this.adaptee = window.FB;
  }

  login(callback) {
    this.adaptee.login((response) => {
      callback(response);
    }, { scope: "email, user_likes" });
  }
}

class TwitterAdapter {
  constructor() {
    this.adaptee = window.twitter;
  }

  login(callback) {
    this.adaptee.makeLogin((response) => {
      callback(response);
    });
  }
}

// SOLUTION

class Authenticator {
  constuctor(adapter) {
    this.adapter = adapter;
  }

  login() {
    this.adapter.login();
  }
}

let authMechanism = isFacebook
  ? new FacebookAdapter()
  : new TwitterAdapter();

let authenticator = new Authenticator(authMechanism);

authenticator.login();
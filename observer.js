class Observable {
  constructor() {
    this.observers = {};
  }

  on(eventName, callback) {
    if (!this.observers[eventName]) {
      this.observers[eventName] = [];
    }

    this.observers[eventName].push(callback);
  }

  dispatch(eventName, eventData) {
    const eventObservers = this.observers[eventName];

    if (!eventObservers) {
      return false;
    }

    eventObservers.forEach((callback) => {
      callback(eventData);
    });
  }
}

class Input extends Observable {
  // constructor logic to find input in html
}

class ViewController {
  constructor(userService) {
    this.mailInput = new Input('.mail-input');
    this.nameInput = new Input('.name-input');

    this.mailInput.on('change', (event) => {
      const input = event.target;

      mailService.setUserMail(input.value);
    });

    this.nameInput.on('change', (event) => {
      const input = event.target;

      accountService.setUserName(input.value);
    });
  }

  onInputChange(type, e) {
    if (type === 'mail') {
      this.mailInput.dispatch('change', e);
    }
    if (type === 'name') {
      this.nameInput.dispatch('change', e);
    }

  }
}
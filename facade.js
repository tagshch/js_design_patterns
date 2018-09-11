// PROBLEM

class HeaderLayout {
  render() { } // render
}

class FooterLayout {
  render() { } // render
}

class LoginLayout {
  render() { } // render
}


// SOLUTION

// original solution

class LayoutFacade {
  constructor() {
    this.header = new HeaderLayout();
    this.footer = new FooterLayout();
  }

  render(layout) {
    this.main = layout;

    this.header.render();
    this.main.render();
    this.footer.render();
  }

  insertContent(content) {
    this.main.empty();
    this.main.insert(content);
    this.main.render();
  }
}

class Application {
  constructor() {
    const layout = new LayoutFacade();
    const login = new LoginLayout();
    layout.render(login);
  }
}

// my solutions

class LayoutFacade {
  constructor(layout) {
    this.header = new HeaderLayout();
    this.main = layout;
    this.footer = new FooterLayout();
  }

  render() {
    this.header.render();
    this.main.render();
    this.footer.render();
  }

  insertContent(content) {
    this.main.empty();
    this.main.insert(content);
    this.main.render();
  }
}

class Application {
  constructor() {
    const layout = new LayoutFacade(new LoginLayout());
    layout.render();
  }
}
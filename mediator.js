class Plane {
  constructor(mediator, options) {
    this.mediator = mediator;
    Object.assign(this, options);
  }

  takeOff() { this.mediator.message("takeOff", this); }

  putDown() { this.mediator.message("putDown", this); }
}


class ATSMediator {
  constructor() {
    this.planes = [
      new Plane(this, { name: 'p1' }),
      new Plane(this, { name: 'p2' }),
      new Plane(this, { name: 'p3' }),
      new Plane(this, { name: 'p4' }),
    ]
  }

  message(type, plane) {
    switch (type) {
      case "putDown": {
        this.movePlanes();
        this.setLandingString(plane);
        this.setLadder(plane);
      }
      case "takeOff": {
        this.generateQueue();
        this.setNextPlane();
      }
    }
  }
}
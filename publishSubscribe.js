class EventBus {
  constructor() {
    this.topics = {};
  }
  subscribe(topic, cb) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(cb);
  }
  publish(topic, eventData) {
    if (!this.topics[topic]) {
      return;
    }
    this.topics[topic].forEach((cb) => {
      cb(eventData);
    });
  }
}

const eventBus = new EventBus();

eventBus.subscribe('fox say', whatDoesTheFoxSay => {
  console.log(whatDoesTheFoxSay);
});

eventBus.publish('fox say', 'Ring-ding-ding-ding-ding!');
eventBus.publish('fox say', 'Wa-pa-pa-pa-pa-pa-pow!');
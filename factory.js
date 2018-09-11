class UserFactory {
  createUser(role, profile) {
    if (role === 'mentor') {
      return new Mentor(profile.name, profile.mentees);
    }

    if (role === 'mentee') {
      return new Mentee(profile.name, profile.mentor);
    }
  }
}

class Mentor {
  constructor(name, mentees) {
    this.name = name;
    this.mentees = mentees;
  }
  addMentee() { }
}

class Mentee {
  constructor(name, mentor) {
    this.name = name;
    this.mentor = mentor;
  }
  setMentor() { }
}
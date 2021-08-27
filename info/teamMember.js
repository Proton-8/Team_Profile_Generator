// The main or parent class

class TeamMember {
    constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "TeamMember";
  }
  getName() {
    return this.name
  }
  
  getId() {
    return this.id
  }
  
  getEmail() {
    return this.email
  }
  
  getRole() {
    return "TeamMember"
  }
  }
  

// export back to main
module.exports = TeamMember;

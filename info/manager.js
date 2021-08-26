const Team = require('./teamMember')

class Manager extends TeamMember {
    constructor(name, id, email, key) {
  // get info from Team
    super(name,id,email);
    this.key = key;
    this.role = "Manager"
    }

    getOfficeNumber(){
      return this.key
  }
  
  getRole() {
      return "Manager"
  }
  
  }
       // export back to main
  module.exports = Manager;
  
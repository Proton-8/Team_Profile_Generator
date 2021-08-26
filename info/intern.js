const Team = require('./teamMember')

class Intern extends TeamMember {
    constructor(name, id, email, key) {
 // get info from Team
    super(name,id,email);
    this.key = key;
    this.role = "Intern"
    }

    getSchool() {
        return this.specific
    }
    
    getRole() {
        return "Intern"
    }
    
    }
    
    // export back to main
    module.exports = Intern;
    
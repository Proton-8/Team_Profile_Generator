const TeamMember = require('./teamMember')

class Engineer extends TeamMember {
    constructor(name, id, email, key) {
    //name,id,email from TeamMember
    super(name,id,email);
    this.key = key;
    this.role = "Engineer"
    }

    getGithub() {
        return this.specific
    }
    
    getRole() {
        return "Engineer"
    }
    
    }
     // export back to main
    module.exports = Engineer;
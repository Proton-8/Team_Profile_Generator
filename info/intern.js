const Team = require('./teamMember')

class Intern extends TeamMember {
    constructor(name, id, email, specific) {
 // get info from Team
    super(name,id,email);
    this.specific = specific;
    this.role = "Intern"
    }
}
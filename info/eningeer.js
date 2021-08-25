const Team = require('./teamMember')

class Engineer extends TeamMember {
    constructor(name, id, email, specific) {
    //name,id,email from employee
    super(name,id,email);
    this.specific = specific;
    this.role = "Engineer"
    }
}
const Team = require('./team')

class Engineer extends Team {
    constructor(name, id, email, specific) {
    //name,id,email from employee
    super(name,id,email);
    this.specific = specific;
    this.role = "Engineer"
    }
}
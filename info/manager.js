const Team = require('./team')

class Manager extends Team {
    constructor(name, id, email, specific) {
  // get info from Team
    super(name,id,email);
    this.specific = specific;
    this.role = "Manager"
    }
}
const { expect } = require("@jest/globals");
const Team = require("../info/teamMember");

//test for creating new valid team member
describe("TeamMember", () => {

  describe("initialize", () => {
    it("should create new team memeber with valid inputs of name, id, email and role", () => {

      const team = new TeamMember("ExampleName", 001, "example@example.com");

      //check on the basics
      expect(team.name).toEqual("ExampleName");
      expect(team.id).toEqual(001)
      expect(team.email).toEqual("example@example.com")
      expect(team.role).toEqual("Team")
    });

    //initiate the tests 
    it("can set name, id, email", () => {
      const setExample = new TeamMember("John", 10, "example@example.com")
      expect(setExample.name).toBe("John")
      expect(setExample.id).toEqual(10)
      expect(setExample.email).toEqual("example@example.com")
      expect(setExample.role).toEqual("Team")
    });
    it("can get name, id, email, role using getName(), getId(), getEmail(), getRole()", () => {
      const getExample = new Employee("John", 10, "example@example.com")
      expect(getExample.getName()).toBe("John")
      expect(getExample.getId()).toBe(10)
      expect(getExample.getEmail()).toBe("example@example.com")
      expect(getExample.getRole()).toBe("Team")
    });
  });
})
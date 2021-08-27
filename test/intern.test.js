//  intern code for testing will go here(include School)

const Intern = require("../info/intern");

describe("Engineer", () => {

  describe("initialize", () => {
    it("should create new engineer object with valid inputs which will now include github", () => {

      const intern = new Intern("ExampleName",101,"example@example.com", "school");

  //first sanity check on the basics
      expect(intern.name).toEqual("ExampleName");
      expect(intern.id).toEqual(101)
      expect(intern.email).toEqual("example@example.com")
      expect(intern.key).toEqual("school")
      expect(intern.role).toEqual("Intern")
    });
   
    //initiate the tests 
    it("can set name, id, email, school", () => {
        const setExample = new Intern("John",10,"example@example.com","School")
        expect(setExample.name).toBe("John")
        expect(setExample.id).toEqual(10)
        expect(setExample.email).toEqual("example@example.com")
        expect(setExample.role).toEqual("Intern")
        expect(setExample.key).toEqual("School")
      });
      it("can get name, id, email, role and github using getName(), getId(), getEmail(), getRole(), getKey()", () => {
        const getExample = new Intern("John",10,"example@example.com")
        expect(getExample.getName()).toBe("John")
        expect(getExample.getId()).toBe(10)
        expect(getExample.getEmail()).toBe("example@example.com")
        expect(getExample.getRole()).toBe("Intern")
        expect(getExample.getKey()).toBe("School")
      });
    });
  })
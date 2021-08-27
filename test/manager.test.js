//  manager code for testing will go here (include office number)

const Manager = require("../info/manager");

describe("Manager", () => {

  describe("initialize", () => {
    it("should create new Manager object with valid inputs which will now include office number", () => {

      const manager = new Manager("ExampleName",101,"example@example.com", 8);

  //first sanity check on the basics
      expect(manager.name).toEqual("ExampleName");
      expect(manager.id).toEqual(101)
      expect(manager.email).toEqual("example@example.com")
      expect(manager.key).toEqual(8)
      expect(manager.role).toEqual("Manager")
    });
   
    //initiate the tests 
    it("can set name, id, email", () => {
        const setExample = new Manager("John",10,"example@example.com",8)
        expect(setExample.name).toBe("John")
        expect(setExample.id).toEqual(10)
        expect(setExample.email).toEqual("example@example.com")
        expect(setExample.role).toEqual("Manager")
        expect(setExample.key).toEqual(8)
      });
      it("can get name, id, email, role and office using getName(), getId(), getEmail(), getRole(), getgitHub()", () => {
        const getExample = new Manager("John",10,"example@example.com",8)
        expect(getExample.getName()).toBe("John")
        expect(getExample.getId()).toBe(10)
        expect(getExample.getEmail()).toBe("example@example.com")
        expect(getExample.getRole()).toBe("Manager")
        expect(getExample.getOfficeNumber()).toBe(8)
      });
    });
  })
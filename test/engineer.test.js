//  engineer code for testing will go here (include Github)

const Engineer = require("../info/engineer");


describe("Engineer", () => {

  describe("initialize", () => {
    it("should create new engineer object with valid inputs including github", () => {

      const engineer = new Engineer("ExampleName",101,"example@example.com", "gitHub");

  //first sanity check on the basics
      expect(engineer.name).toEqual("ExampleName");
      expect(engineer.id).toEqual(101)
      expect(engineer.email).toEqual("example@example.com")
      expect(engineer.key).toEqual("gitHub")
      expect(engineer.role).toEqual("Engineer")
    });
   
    //initiate the tests 
    it("can set name, id, email", () => {
        const setExample = new Engineer("John",10,"example@example.com","gitHub")
        expect(setExample.name).toBe("John")
        expect(setExample.id).toEqual(10)
        expect(setExample.email).toEqual("example@example.com")
        expect(setExample.role).toEqual("Engineer")
        expect(setExample.key).toEqual("gitHub")
      });
      it("can get name, id, email, role and github using getName(), getId(), getEmail(), getRole(), getGithub()", () => {
        const getExample = new Engineer("John",10,"example@example.com","gitHub")
        expect(getExample.getName()).toBe("John")
        expect(getExample.getId()).toBe(10)
        expect(getExample.getEmail()).toBe("example@example.com")
        expect(getExample.getRole()).toBe("Engineer")
        expect(getExample.getGithub()).toBe("gitHub")
      });
    });
  })
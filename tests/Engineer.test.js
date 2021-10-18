const Employee = require("../Employee");
const Engineer = require("../Engineer");

describe("Engineer class", () => {
    it("should create a new 'Engineer' object that has all of the elements of an 'Employee' object", () => {
        const obj = new Engineer(name, id, email);
        const name = "Kermit";
        const id = "345678";
        const email = "greenfrog@gmail.com";

        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.getName()).toBe(name);
        expect(obj.getId()).toBe(id);
        expect(obj.getEmail()).toBe(email);
    });

    describe("getGithub method", () => {
        it("should return an object containing a 'username' property when called with the 'new' keyword", () => {
            // Act
            const obj = new Engineer();

            // Assert
            expect("username" in obj).toEqual(true);
        });

        it("should set 'username' when created", () => {
            // Arrange
            const username = "drmeanzo";
            // Act
            const obj = new Engineer(username);
            // Assert
            expect(obj.username).toBe("drmeanzo");
        });

        it("should default 'username' to ''", () => {
            // Act
            const obj = new Engineer();
            // Assert
            expect(obj.username).toBe('');
        });
    });


    describe("getRole method", () => {
        it("should return the string 'Engineer'"), () => {
            // Act
            const obj = new Employee();

            // Assert
            expect(obj.getRole()).toBe("Engineer");
        };

    })
});
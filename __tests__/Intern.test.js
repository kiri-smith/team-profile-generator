const Employee = require("../Employee");
const Intern = require("../Intern");

describe("Intern class", () => {
    it("should create a new 'Intern' object that has all of the elements of an 'Employee' object", () => {
        const obj = new Intern(name, id, email);
        const name = "Fozzie";
        const id = "234567";
        const email = "wakawaka@gmail.com";

        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.getName()).toBe(name);
        expect(obj.getId()).toBe(id);
        expect(obj.getEmail()).toBe(email);

    });
    describe("getSchool method", () => {
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            // Act
            const obj = new Intern();

            // Assert
            expect("school" in obj).toEqual(true);
        });

        it("should set 'school' when created", () => {
            // Arrange
            const username = "Nazareth";
            // Act
            const obj = new Intern(school);
            // Assert
            expect(obj.school).toBe("Nazareth");
        });

        it("should default 'username' to ''", () => {
            // Act
            const obj = new Intern();
            // Assert
            expect(obj.school).toBe('');
        });
    });


    describe("getRole method", () => {
        it("should return the string 'Intern'"), () => {
            // Act
            const obj = new Employee();

            // Assert
            expect(obj.getRole()).toBe("Intern");
        };

    })
});
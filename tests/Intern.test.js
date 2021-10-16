const Employee = require("../Employee");
const Intern = require("../Intern");

describe("Intern class", () => {
    //do I need to add employee tests again here?
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
            expect(obj.school).toEqual("Nazareth");
        });

        it("should default 'username' to ''", () => {
            // Act
            const obj = new Intern();
            // Assert
            expect(obj.school).toEqual('');
        });
    });


    //how do I write this one?
    describe("getRole method", () => {
        it("should return the object name when called"), () => {
            // Act
            const obj = new Intern();

            // Assert
            expect(role).toEqual(Intern);
        };

        it("should return 'role' when created", () => {
            // Act
            const obj = new Intern();
            // Assert
            expect(role).toEqual("Intern");
        });

    })
});
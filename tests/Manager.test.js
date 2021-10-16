const Employee = require("../Employee");
const Manager = require("../Manager");

describe("Manager class", () => {
    //do I need to add employee tests again here?
    describe("getOfficeNumber method", () => {
        it("should return an object containing an 'officeNumber' property when called with the 'new' keyword", () => {
            // Act
            const obj = new Manager();

            // Assert
            expect("officeNumber" in obj).toEqual(true);
        });

        it("should set 'officeNumber' when created", () => {
            // Arrange
            const officeNumber = "003";
            // Act
            const obj = new Manager(officeNumber);
            // Assert
            expect(obj.officeNumber).toEqual("003");
        });

        it("should default 'officeNumber' to ''", () => {
            // Act
            const obj = new Manager();
            // Assert
            expect(obj.officeNumber).toEqual('');
        });
    });


    //how do I write this one?
    describe("getRole method", () => {
        it("should return the object name when called"), () => {
            // Act
            const obj = new Manager();

            // Assert
            expect(role).toEqual(Manager);
        };

        it("should return 'role' when created", () => {
            // Act
            const obj = new Manager();
            // Assert
            expect(role).toEqual("Manager");
        });

    })
});
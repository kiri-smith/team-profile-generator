const Employee = require("../Employee");
const Manager = require("../Manager");

describe("Manager class", () => {
    it("should create a new 'Manager' object that has all of the elements of an 'Employee' object", () => {
        const obj = new Manager(name, id, email);
        const name = "Summer";
        const id = "987654";
        const email = "sumpen@gmail.com";

        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.getName()).toBe(name);
        expect(obj.getId()).toBe(id);
        expect(obj.getEmail()).toBe(email);

    });

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
            expect(obj.officeNumber).toBe("003");
        });

        it("should default 'officeNumber' to ''", () => {
            // Act
            const obj = new Manager();
            // Assert
            expect(obj.officeNumber).toBe('');
        });
    });


    describe("getRole method", () => {
        it("should return the string 'Manager'"), () => {
            // Act
            const obj = new Employee();

            // Assert
            expect(obj.getRole()).toBe("Manager");
        };

    })
});

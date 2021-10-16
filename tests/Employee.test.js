const Employee = require("../Employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            // Act
            const obj = new Employee();

            // Assert
            expect("name" in obj).toEqual(true);
        });

        it("should set 'name' when created", () => {
            // Arrange
            const name = "Jill";
            // Act
            const obj = new Employee(name);
            // Assert
            expect(obj.name).toEqual("Jill");
        });

        it("should default 'name' to ''", () => {
            // Act
            const obj = new Employee();
            // Assert
            expect(obj.name).toEqual('');
        });
    });
});
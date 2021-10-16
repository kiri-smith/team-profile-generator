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

    describe("getID method", () => {
        it("should return an object containing an 'ID' property when called with the 'new' keyword", () => {
            // Act
            const obj = new Employee();

            // Assert
            expect("ID" in obj).toEqual(true);
        });

        it("should set 'ID' when created", () => {
            // Arrange
            const id = "123456";
            // Act
            const obj = new Employee(id);
            // Assert
            expect(obj.id).toEqual("123456");
        });

        it("should default 'ID' to ''", () => {
            // Act
            const obj = new Employee();
            // Assert
            expect(obj.id).toEqual('');
        });
    });

    describe("getEmail method", () => {
        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            // Act
            const obj = new Employee();

            // Assert
            expect("email" in obj).toEqual(true);
        });

        it("should set 'email' when created", () => {
            // Arrange
            const email = "jtf003@gmail.com";
            // Act
            const obj = new Employee(email);
            // Assert
            expect(obj.email).toEqual("jtf003@gmail.com");
        });

        it("should default 'email' to ''", () => {
            // Act
            const obj = new Employee();
            // Assert
            expect(obj.email).toEqual('');
        });
    });

    //how do I write this one?
    describe("getRole method", () => {
        it("should return the object name when called"), () => {
            // Act
            const obj = new Employee();

            // Assert
            expect(role).toEqual(Employee);
        });

    it("should return 'role' when created", () => {
        // Act
        const obj = new Employee();
        // Assert
        expect(role).toEqual("Employee");
    });

});
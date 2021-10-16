const Employee = require("../Employee");
const Engineer = require("../Engineer");

describe("Engineer class", () => {
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
            expect(obj.username).toEqual("drmeanzo");
        });

        it("should default 'username' to ''", () => {
            // Act
            const obj = new Engineer();
            // Assert
            expect(obj.username).toEqual('');
        });
    });


    //how do I write this one?
    describe("getRole method", () => {
        it("should return the object name when called"), () => {
            // Act
            const obj = new Engineer();

            // Assert
            expect(role).toEqual(Engineer);
        };

        it("should return 'role' when created", () => {
            // Act
            const obj = new Engineer();
            // Assert
            expect(role).toEqual("Engineer");
        });

    })
});
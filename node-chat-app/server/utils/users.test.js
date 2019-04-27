const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: "1",
            name: "TJC",
            room: "Lab412"
        }, {
            id: "2",
            name: "Jay",
            room: "Lab412"
        }, {
            id: "3",
            name: "Lin",
            room: "Lab414"
        }];
    });

    it("should add new user", () => {
        var users = new Users();
        var user = {
            id: "123",
            name: "TJC",
            room: "Lab412"
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it("should remove a user", () => {
        var userId = "1";
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it("should not remove user", () => {
        var userId = "99";
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it("should find user", () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it("should not find user", () => {
        var userId = "99";
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it("should return names for Lab412", () => {
        var userList = users.getUserList("Lab412");

        expect(userList).toEqual(["TJC", "Jay"]);
    });

    it("should return names for Lab414", () => {
        var userList = users.getUserList("Lab414");

        expect(userList).toEqual(["Lin"]);
    });
});
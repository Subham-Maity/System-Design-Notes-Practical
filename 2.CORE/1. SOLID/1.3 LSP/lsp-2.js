"use strict";
class BaseUser {
    getRole() {
        console.log("Base User Role");
    }
}
class User extends BaseUser {
    getAccessLevel() {
        console.log("User Access Level");
    }
    getRole() {
        console.log("User Role");
    }
}
class Admin extends User {
    getAccessLevel() {
        console.log("Admin Access Level");
    }
    getRole() {
        console.log("Admin Role");
    }
}
class Manager extends User {
    getAccessLevel() {
        console.log("Manager Access Level");
    }
    getRole() {
        console.log("Manager Role");
    }
}
class Customer extends BaseUser {
    getRole() {
        console.log("Customer Role");
    }
}
function getUserAccessLevel(user) {
    user.getAccessLevel();
}
function tryToGetUserAccessLevel(user) {
    if ("getAccessLevel" in user) {
        user.getAccessLevel();
    }
    else {
        console.log(`${user.constructor.name} does not have an access level.`);
    }
}
// LSP says: objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.
getUserAccessLevel(new Admin()); // Admin Access Level
getUserAccessLevel(new Manager()); // Manager Access Level
tryToGetUserAccessLevel(new Customer()); // Customer does not have an access level.

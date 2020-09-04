// core types
//number
var age = 25;
// string
var myName = "hanna";
// boolean
var isCool = true;
// object 
var person = { name: "barb", age: age, 30:  };
// specific object
var human = {
    name: "Ola",
    age: 60
};
// arrays
var hobbies = ["sports", "cooking"];
var ages = [23, 34];
// tuples - only 2 elements
var role = [2, "hi"];
// .push - exception in tuples - it works
// enum { new, old } - ts type - human readable identifiers?
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOT"] = 2] = "AUTHOT";
})(Role || (Role = {}));
var myRole = Role.ADMIN;
// any type - avoid using this ;)
var favouriteActivities;

[{
  id: '/',
  name: 'Andrew',
  room: 'Room A'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// class Person {
//     constructor (name, age) {
//       this.name = name;
//       this.age = age;
//     }
//
//     getUserDescription () {
//       return `${this.name} is ${this.age}`;
//     }
//
// }
//
// var me = new Person('Andrew', 23)

class Users {

  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {
      id,
      name,
      room
    };
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    // return user that was removed
    var removeUser = this.getUser(id);

    if(removeUser) {
      this.users = this.users.filter((removeUser) => removeUser.id !== id);
    }

    return removeUser;
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });

    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  }


}

module.exports = {Users};

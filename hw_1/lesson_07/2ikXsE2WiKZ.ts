{
    class User {
        constructor(public id: number, private name: string, private surname: string, private email: string, private phone: string) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
        }
    }

    const users: User[] = [];
    users.push(new User(1, 'vasia', 'goliaka', 'vasia.goliaka@gmail.com', '09765429261'));
    users.push(new User(2, 'petro', 'verb', 'petro.verb@gmail.com', '09365429262'));
    users.push(new User(3, 'nadia', 'verb', 'nadia.verb@gmail.com', '09765429263'));
    users.push(new User(4, 'semen', 'goliaka', 'semen.goliaka@gmail.com', '09765429264'));
    users.push(new User(5, 'kolia', 'goliaka', 'kolia.goliaka@gmail.com', '09765429265'));
    users.push(new User(6, 'vitaliy', 'goliaka', 'vitaliy.goliaka@gmail.com', '09765429266'));
    users.push(new User(7, 'nastia', 'surname', 'nastia.surname@gmail.com', '09765429267'));
    users.push(new User(8, 'olga', 'surname', 'olga.surname@gmail.com', '09765429268'));
    users.push(new User(9, 'vasia', 'surname', 'vasia.surname@gmail.com', '09765429269'));
    users.push(new User(10, 'kolia', 'surname', 'kolia.surname@gmail.com', '09765429260'));

    console.log(users);

    const filteredUsers: User[] = users.filter(user => user.id % 2 === 0);

    console.log(filteredUsers);
}
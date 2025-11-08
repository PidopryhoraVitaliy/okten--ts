{
    type UserType = {
        name: string, username: string, password: string
    }

    const users: UserType[] = [
        {name: 'Vasia', username: 'Vasia', password: 'password1'},
        {name: 'Petro', username: 'Petro', password: 'password2'},
        {name: 'Lisa', username: 'Simba', password: 'password3'},
        {name: 'Name', username: 'UName', password: 'password4'},
        {name: 'Vasia', username: 'UName23', password: 'password5'},
        {name: 'Vasia', username: 'UName324', password: 'password6'},
        {name: 'Name', username: 'UName325', password: 'password7'},
        {name: 'Petro', username: 'UName2025', password: 'password8'},
        {name: 'Semen', username: 'UName2010', password: 'password9'},
        {name: 'Name', username: 'UName2356', password: 'password10'},
    ];
    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);
}
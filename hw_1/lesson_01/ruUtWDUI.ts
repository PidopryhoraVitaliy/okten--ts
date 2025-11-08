const firstName1: string | null = prompt('enter your first name');
const middleName1: string | null = prompt('enter your middle name');
const age: string | null = prompt('enter your age');
console.log(firstName1, middleName1, age);


{
    type User = {
        name: string;
    }

    const user: User = {
        name: 'John',
    }

    console.log(user);

    const firstName: string = 'Vitalii', middleName: string = 'Viktorovych', lastName: string = 'Pidopryhora';

    console.log(firstName, middleName, lastName);
}
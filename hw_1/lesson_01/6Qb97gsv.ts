{
    type User = {
        name: string;
    }

    const user: User = {
        name: 'John',
    }

    console.log(user);

    {
        const firstName: string = 'Vitalii', middleName: string = 'Viktorovych', lastName: string = 'Pidopryhora';
        const person: string = lastName + ' ' + firstName + ' ' + middleName;
        console.log(person);
    }
}
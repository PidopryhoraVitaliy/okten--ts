{
    type UserType = {
        name: string;
        surname: string;
        age: number;
    }

    const form: HTMLFormElement = document.forms[0] as HTMLFormElement;

    form.onsubmit = function (event: SubmitEvent): void {
        event.preventDefault();

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const surnameInput = document.getElementById('surname') as HTMLInputElement;
        const ageInput = document.getElementById('age') as HTMLInputElement;

        const user: UserType = {
            name: nameInput.value,
            surname: surnameInput.value,
            age: +ageInput.value,
        }

        const div: HTMLDivElement = document.createElement('div');
        div.innerText = `name: ${user.name} surname: ${user.surname} ${user.age} years old`;
        document.body.appendChild(div);
    }
}
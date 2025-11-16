const ageInput: HTMLInputElement = document.getElementById('age') as HTMLInputElement;

document.getElementById('check-btn')?.addEventListener('click', function (): void {
    const age: number = +ageInput.value;
    if (age < 18) {
        alert('you are younger than 18!');
    }
});
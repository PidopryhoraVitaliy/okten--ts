{
    const KG_TO_POUND_COEFFICIENT: number = 2.20462;
    const kgInputElem = document.getElementById('kg') as HTMLInputElement;
    const poundsDivElem = document.getElementById('pounds') as HTMLDivElement;

    kgInputElem.addEventListener('input', function (event): void {
        const weightKg: number = +(event.target as HTMLInputElement).value;
        const weightPounds: number = weightKg * KG_TO_POUND_COEFFICIENT;
        poundsDivElem.innerText = 'pounds: ' + weightPounds;
    });
}
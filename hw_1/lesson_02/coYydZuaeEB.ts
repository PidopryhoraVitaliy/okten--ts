const weeklyTemperature: number[][] = [
    [18, 28, 25],
    [17, 27, 23],
    [19, 27, 22],
    [20, 25, 21],
    [21, 27, 23],
    [20, 28, 25],
    [21, 30, 27],
];
console.log(weeklyTemperature);

type WeeklyTemperatureType = {
    day: string, temperature: number []
}

const weeklyTemperature2: WeeklyTemperatureType[] = [
    {day: 'monday', temperature: [18, 28, 25]},
    {day: 'tuesday', temperature: [17, 27, 23]},
    {day: 'wednesday', temperature: [19, 27, 22]},
    {day: 'thursday', temperature: [20, 25, 21]},
    {day: 'friday', temperature: [21, 27, 23]},
    {day: 'saturday', temperature: [20, 28, 25]},
    {day: 'sunday', temperature: [21, 30, 27]},
];
console.log(weeklyTemperature2);
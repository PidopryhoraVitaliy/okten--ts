const loadedValue: string | null = localStorage.getItem('sessionsList');
const sessionsList: Date[] = (loadedValue) ? JSON.parse(loadedValue) as Date[] : [];

const ol: HTMLOListElement = document.getElementById('sessionsList') as HTMLOListElement;
for (const sessionData of sessionsList) {
    const li: HTMLLIElement = document.createElement('li');
    li.innerText = sessionData.toString();
    ol.appendChild(li);
}
